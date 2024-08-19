import StickyAddToCart from "./StickyAddToCart";
import ForsonScreenshotFixes from "./ForsonScreenshotFixes";

class ScreenshotFixes {
  private debugMode: boolean;
  private dom: Document;

  constructor(debugMode = false) {
    this.debugMode = debugMode;
  }

  public init(containerId = "recordingPlayer", debugMode = false): void {
    console.log("inside screenshot fixes, id: ", containerId);
    this.debugMode = debugMode;
    const container = document.getElementById(
      containerId
    ) as HTMLIFrameElement | null;
    this.dom = container?.contentWindow?.document || document;

    this.applyStyles();
    this.hidePopup();
    this.setPTagsDisplayBlock();

    const fixedElementsInstance = new StickyAddToCart(this.dom);
    const forsonScreenshotFixesInstance = new ForsonScreenshotFixes(this.dom);
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
