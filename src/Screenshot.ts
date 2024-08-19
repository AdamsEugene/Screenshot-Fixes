import StickyAddToCart from "./StickyAddToCart";
import ForsonScreenshotFixes from "./ForsonScreenshotFixes";

class ScreenshotFixes {
  private debugMode: boolean;
  private dom: Document;

  constructor(debugMode = false) {
    this.debugMode = debugMode;
  }

  public init(containerId = "recordingPlayer1", debugMode = false): void {
    console.log("inside screenshot fixes, id: ", containerId);
    this.debugMode = debugMode;
    const container = document.getElementById(
      containerId
    ) as HTMLIFrameElement | null;
    this.dom = container?.contentWindow?.document || document;

    this.applyStyles();
    this.hidePopup();
    this.setPTagsDisplayBlock();
    this.setZIndexToNegOne();
    this.setMinHeightMinWidth100();
    this.adjustMainContentPosition();

    const fixedElementsInstance = new StickyAddToCart(this.dom);
    // const forsonScreenshotFixesInstance = new ForsonScreenshotFixes(this.dom);
    const fixedElements = fixedElementsInstance.getElements();
    fixedElements.forEach((element) => {
      element.style.setProperty("display", "block", "important");
    });
    console.log(fixedElements);
    // Stop the Owl Carousel autoplay
  }

  private applyStyles(): void {
    this.dom
      ?.querySelectorAll<HTMLElement>(
        ".lai-star-rating-none svg, .lai-star-rating svg"
      )
      .forEach((element) => {
        element.style.maxWidth = "20px";
        element.style.float = "left";
      });
  }
  private hidePopup(): void {
    const popup = this.dom?.querySelector<HTMLElement>(".canadian-first-popup");
    if (popup) {
      const sibling = popup.previousElementSibling as HTMLElement | null;
      if (
        sibling &&
        sibling.children.length === 0 &&
        sibling.className === ""
      ) {
        sibling.style.setProperty("display", "none", "important");
      }
    }
  }
  private setPTagsDisplayBlock() {
    this.dom?.querySelectorAll(".feature__description")?.forEach((element) => {
      const pTags = element.querySelectorAll("p");
      pTags.forEach((p) => {
        p.style.display = "block";
      });
    });

    this.dom
      ?.querySelectorAll(".custom-blk ul li img")
      ?.forEach((img: HTMLElement) => {
        img.style.minWidth = "100%";
      });
  }
  private setZIndexToNegOne() {
    const divsWithExactText = Array.from(
      this.dom.querySelectorAll("div")
    )?.filter((div) => div?.textContent.trim() === "Optimized Theme Version");
    console.log("====================================");
    console.log(divsWithExactText);
    console.log("====================================");
    divsWithExactText.forEach((div) => {
      div.style.setProperty("z-index", "-1", "important");
    });
  }
  private setMinHeightMinWidth100() {
    const classNames = ["collection-hero.w3_bg"];
    classNames.forEach((className) => {
      const heroElements = this.dom.querySelectorAll(`.${className}`);
      heroElements.forEach((heroElement) => {
        const imgElement = heroElement.querySelector("img");
        if (imgElement) {
          imgElement.style.minWidth = "100%";
          imgElement.style.minHeight = "100%";
        }
      });
    });
  }
  private adjustMainContentPosition() {
    const mainContent = this.dom.querySelector("#MainContent") as HTMLElement;
    if (mainContent) {
      let previousElement = mainContent.previousElementSibling;
      if (previousElement) {
        const header = previousElement.querySelector("header");
        if (header) {
          const headerRect = previousElement.getBoundingClientRect();
          if (headerRect.height === 0) {
            previousElement = header;
          }
        }
        const previousElementRect = previousElement.getBoundingClientRect();
        const previousElementBottom = previousElementRect.bottom;
        const mainContentRect = mainContent.getBoundingClientRect();
        let mainContentTop = mainContentRect.top;
        if (Math.floor(mainContentTop) !== Math.floor(previousElementBottom)) {
          mainContent.style.marginTop = `${
            previousElementBottom - mainContentTop
          }px`;
        }
      }
    }
  }
}

function createInstance<T>(
  constructor: new (...args: any[]) => T,
  ...args: any[]
): T {
  return new constructor(...args);
}

const myClassInstance: ScreenshotFixes = createInstance(ScreenshotFixes);

export type ScreenshotFixesType = typeof myClassInstance;

export default ScreenshotFixes;
