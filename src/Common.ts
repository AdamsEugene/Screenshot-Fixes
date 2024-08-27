type COMMON = {
  containerId: string;
  debugMode: boolean;
  func: (...args: any[]) => void; // Allow func to accept any arguments
};

type DIM = "h" | "w" | "b";

export default class Common {
  protected dom: Document;
  protected debugMode: boolean;
  private domId = "recordingPlayer1";

  constructor(dom: Document = document) {
    this.dom = dom;
  }

  protected exec({ containerId = this.domId, debugMode, func }: COMMON): void {
    console.log("inside screenshot fixes, id: ", containerId);
    this.debugMode = debugMode;

    const container = document.getElementById(
      containerId
    ) as HTMLIFrameElement | null;
    this.dom = container?.contentWindow?.document || document;

    func();

    container?.contentWindow?.addEventListener("resize", this.handleResize);
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
    const name = id.startsWith("#") ? id : `#${id}`;
    console.log({ name });

    return this.dom.getElementById(name);
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
    if (id)
      cn.forEach((id) => {
        const element = this.elementById(id);
        console.log({ element });

        element && applyChanges(element);
      });
    // else
    //   cn.forEach((className) => {
    //     const elements = this.allElements(`.${className}`);
    //     elements.forEach((element: HTMLElement) => {
    //       applyChanges(element);
    //     });
    //   });

    function applyChanges(element: HTMLElement) {
      const firstChild = element.firstElementChild as HTMLElement | null;
      console.log({ firstChild });

      if (firstChild) {
        if (d === "b") {
          const parentHeight = element.clientHeight;
          const parentWidth = element.clientWidth;
          this.setHeight(firstChild, parentHeight);
          this.setWidth(firstChild, parentWidth);
        }
        if (d === "h") {
          const parentHeight = element.clientHeight;
          this.setHeight(firstChild, parentHeight);
        }
        if (d === "w") {
          const parentWidth = element.clientHeight;
          this.setWidth(firstChild, parentWidth);
        }
      }
    }
  }

  protected displayNone(element: HTMLElement, important?: boolean) {
    element.style.setProperty("display", "none", important ? "important" : "");
  }

  protected handleResize = () => {
    console.log("called with: ", this.dom.documentElement.clientWidth);
  };

  protected cleanup() {
    const container = document.getElementById(
      "containerId"
    ) as HTMLIFrameElement | null;
    // Remove the event listener when it's no longer needed
    container?.contentWindow?.removeEventListener("resize", this.handleResize);
  }
}
