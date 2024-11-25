type COMMON = {
  containerId: string;
  debugMode: boolean;
  func: (...args: any[]) => void; // Allow func to accept any arguments
};

type DIM = "h" | "w" | "b";

export default class Common {
  protected dom: Document;
  protected iframeWindow: Window;
  protected debugMode: boolean;
  private domId = "recordingPlayer1";
  protected insideIframe = false;
  protected prodMode = true;

  private selectorsToExclude = new Map([
    [
      3004,
      {
        idSelectors: ["#replace-this-with-id"],
        classSelectors: ["mob-drawer"],
      },
    ],
    // add another of idSite and ids and classes not to add heatmap-com__hidden-element
  ]);

  private getSiteURLAsObj() {
    const currentUrl = window.location.href;
    return new URL(currentUrl);
  }

  constructor(dom: Document = document) {
    this.dom = dom;
  }

  protected exec({ containerId = this.domId, debugMode, func }: COMMON): void {
    this.debugMode = debugMode;
    this.prodMode = this.getRedirectType() === "dashboard";

    const container = document.getElementById(
      containerId
    ) as HTMLIFrameElement | null;
    this.iframeWindow = container?.contentWindow || window;
    this.dom = container?.contentWindow?.document || document;
    if (container?.contentWindow?.document) this.insideIframe = true;

    func();
  }

  protected idSite(): number | null {
    const urlObj = this.getSiteURLAsObj();
    const idSiteParam = urlObj.searchParams.get("idSite");
    const idSiteNumber = idSiteParam ? parseInt(idSiteParam, 10) : null;
    return Number.isNaN(idSiteNumber) ? null : idSiteNumber;
  }

  protected idSiteHsr() {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split("#")[1]);
    const subcategory = urlParams.get("subcategory");
    if (subcategory) {
      return Number.isNaN(subcategory) ? null : +subcategory;
    }
    const oldIdsitehsr = urlParams.get("old_idsitehsr");
    return Number.isNaN(oldIdsitehsr) ? null : +oldIdsitehsr;
  }

  protected allElements<T extends Element = HTMLElement>(
    className: string,
    tag?: boolean
  ): NodeListOf<T> {
    const name = className.startsWith(".") ? className : `.${className}`;
    return this.dom.querySelectorAll(tag ? className : name) as NodeListOf<T>;
  }

  protected elements(className: string, tag?: boolean) {
    const name = className.startsWith(".") ? className : `.${className}`;
    return this.dom.querySelector(tag ? className : name);
  }

  protected elementById(id: string) {
    return this.dom.getElementById(id);
  }

  protected setHeight(element: HTMLElement, height: number, unit = "px") {
    element.style.setProperty("height", `${height}${unit}`, "important");
  }

  protected setWidth(element: HTMLElement, width: number, unit = "px") {
    element.style.setProperty("width", `${width}${unit}`, "important");
  }

  protected setElementsHeightToMaxContent(className: string) {
    const elements = this.allElements(`.${className}`);
    elements.forEach((element: HTMLElement) => {
      element.style.setProperty("height", "max-content", "important");
      element.style.setProperty("min-height", "max-content", "important");
    });
  }

  protected setFirstChildSizeToParentSize(cn: string[], d: DIM, id = false) {
    const applyChanges = (element: HTMLElement) => {
      const firstChild = element.firstElementChild as HTMLElement | null;
      console.log({ firstChild });

      if (firstChild) {
        if (d === "b") {
          const parentHeight = element.clientHeight;
          const parentWidth = element.clientWidth;
          this.setHeight(firstChild, parentHeight);
          this.setWidth(firstChild, parentWidth);
        } else if (d === "h") {
          const parentHeight = element.clientHeight;
          this.setHeight(firstChild, parentHeight);
        } else if (d === "w") {
          const parentWidth = element.clientWidth; // Use clientWidth instead of clientHeight for width
          this.setWidth(firstChild, parentWidth);
        }
      }
    };

    if (id) {
      cn.forEach((id) => {
        const element = this.elementById(id);
        if (element) applyChanges(element);
      });
    } else {
      cn.forEach((className) => {
        const elements = this.allElements(`.${className}`);
        elements.forEach((element: HTMLElement) => {
          console.log({ element });
          if (element) applyChanges(element);
        });
      });
    }
  }

  protected displayNone(element: HTMLElement, important?: boolean) {
    element.style.setProperty("display", "none", important ? "important" : "");
  }

  protected displayBlock(element: HTMLElement, important?: boolean) {
    element.style.setProperty("display", "block", important ? "important" : "");
  }

  protected handleResize = ({
    mobileFuncs,
    desktopFuncs,
  }: {
    mobileFuncs: (() => void)[];
    desktopFuncs: (() => void)[];
  }) => {
    if (this.dom.documentElement.clientWidth > 500) {
      desktopFuncs.forEach((func) => func());
    } else {
      mobileFuncs.forEach((func) => func());
    }
  };

  protected isMobile() {
    return this.dom.documentElement.clientWidth < 500;
  }

  protected setOpacityAndDisplay(element: HTMLElement) {
    element.style.setProperty("opacity", "1", "important");
    element.style.setProperty("display", "block", "important");
  }

  protected cleanup() {
    const container = document.getElementById(
      "containerId"
    ) as HTMLIFrameElement | null;
    // Remove the event listener when it's no longer needed
    // container?.contentWindow?.removeEventListener("resize", this.handleResize);
  }

  protected isElementInViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (this.iframeWindow.innerHeight ||
          this.dom.documentElement.clientHeight) &&
      rect.right <=
        (this.iframeWindow.innerWidth || this.dom.documentElement.clientWidth)
    );
  }

  public removeHeatmapComHideElement() {
    if (!this.idSite()) return;
    const exclusionRules = this.selectorsToExclude.get(this.idSite());
    if (!this.prodMode) console.log({ exclusionRules, id: this.idSite() });

    if (!exclusionRules) return;

    const selectors = [
      ...exclusionRules.idSelectors,
      ...exclusionRules.classSelectors.map((cls) => `.${cls}`),
    ].join(", ");

    if (!this.prodMode) console.log({ selectors });

    this.dom.querySelectorAll(selectors).forEach((container) => {
      container.classList.remove("heatmap-com__hidden-element");
      if (!this.prodMode) console.log({ container });

      const allElements = container.querySelectorAll("*");

      if (!this.prodMode) console.log({ allElements });

      Array.from(allElements).forEach((element) => {
        if (this.isElementInViewport(element)) {
          element.classList.remove("heatmap-com__hidden-element");
        }
      });
    });
  }

  private getRedirectType(): "dashboard" | "locala" | "deves" | "dever" {
    const url = new URL(window.location.href);
    const hostname = url.hostname;
    if (hostname.includes("localhost")) return "locala";
    if (hostname.includes("dashboard")) return "dashboard";
    if (hostname.includes("portal")) return "dashboard";
    if (hostname.includes("early-release")) return "dever";
    if (hostname.includes("earlystage")) return "deves";
    return "dever";
  }
}
