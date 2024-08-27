import StickyAddToCart from "./StickyAddToCart";
import ChrisScreenShotFixes from "./ChrisScreenShotFixes";
import ForsonScreenshotFixes from "./ForsonScreenshotFixes";
import Common from "./Common";

class ScreenshotFixes extends Common {
  constructor(debugMode = false) {
    super();
    this.debugMode = debugMode;
  }

  public init(containerId = "recordingPlayer1", debugMode = false): void {
    const func = () => {
      console.log("Function executed inside ScreenshotFixes");

      this.applyStyles();
      this.hidePopup();
      this.setPTagsDisplayBlock();
      this.setZIndexToNegOne();
      this.setMinHeightMinWidth100();
      this.adjustMainContentPosition();
      this.setElementDisplayToNone();
      this.setHeroImagesStyles([
        "index-hero-wrapper",
        "content_card",
        "reservation-section-wrapper",
      ]);
      this.normalizeSwiperSlideWidths();
      this.setCarouselImageHeightToFull();
      this.handleResize();
      this.setElementsHeightToMaxContent(
        "best-seller-carousel.flickity-enabled.is-draggable"
      );
      this.setFirstChildSizeToParentSize(
        ["flickity-viewport", "row.founders-content.d-flex.align-items-center"],
        "h"
      );
      this.setFirstChildSizeToParentSize(["#splide01-list"], "w", true);
      this.setHeight100();
    };

    this.exec({ containerId, debugMode, func });

    console.log("new dom to be used inside scf: ", this.dom);

    const chrisScreenShotFixesInstance = new ChrisScreenShotFixes(this.dom);
    chrisScreenShotFixesInstance.init();

    const forsonScreenshotFixesInstance = new ForsonScreenshotFixes(this.dom);
    forsonScreenshotFixesInstance.init();

    const fixedElementsInstance = new StickyAddToCart(this.dom);
    const fixedElements = fixedElementsInstance.getElements();
    fixedElements.forEach((element) => {
      element.style.setProperty("display", "block", "important");
    });
  }

  private setHeight100() {
    this.allElements("row.founders-content.d-flex.align-items-center").forEach(
      (element) => {
        this.setHeight(element, 100, "%");
      }
    );
  }

  private applyStyles(): void {
    this.allElements(".lai-star-rating-none svg, .lai-star-rating svg").forEach(
      (element: HTMLElement) => {
        element.style.maxWidth = "20px";
        element.style.float = "left";
      }
    );
  }

  private hidePopup(): void {
    const popup = this.elements(".canadian-first-popup");
    if (popup) {
      const sibling = popup.previousElementSibling as HTMLElement | null;
      if (
        sibling &&
        sibling.children.length === 0 &&
        sibling.className === ""
      ) {
        this.displayNone(sibling);
      }
    }
  }
  private setPTagsDisplayBlock() {
    this.allElements(".feature__description")?.forEach((element) => {
      const pTags = element.querySelectorAll("p");
      pTags.forEach((p) => {
        p.style.display = "block";
      });
    });

    this.allElements(".custom-blk ul li img")?.forEach((img: HTMLElement) => {
      img.style.minWidth = "100%";
    });
  }
  private setZIndexToNegOne() {
    const divsWithExactText = Array.from(this.allElements("div", true))?.filter(
      (div) => div?.textContent.trim() === "Optimized Theme Version"
    );
    divsWithExactText.forEach((div: HTMLElement) => {
      div.style.setProperty("z-index", "-1", "important");
    });
  }
  private setMinHeightMinWidth100() {
    const classNames = ["collection-hero.w3_bg"];
    classNames.forEach((className) => {
      const heroElements = this.allElements(`.${className}`);
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

  private setElementDisplayToNone() {
    this.allElements(".modal__gifting")?.forEach((m: HTMLElement) =>
      this.displayNone(m)
    );
  }

  private setHeroImagesStyles(classNames: string[]) {
    classNames.forEach((className) => {
      const heroWrappers = this.allElements(`.${className}`);
      heroWrappers.forEach((wrapper) => {
        const imgElement = wrapper.querySelector("img");
        if (imgElement) {
          imgElement.style.setProperty("width", "100%", "important");
          imgElement.style.setProperty("min-width", "100%", "important");
          imgElement.style.setProperty(
            "min-height",
            "max-content",
            "important"
          );
          imgElement.style.setProperty("height", "max-content", "important");
        }
      });
    });
  }

  private normalizeSwiperSlideWidths(): void {
    const swipers = this.allElements<HTMLElement>(".swiper-wrapper");
    swipers.forEach((swiper) => {
      const slides = swiper.querySelectorAll<HTMLElement>(".swiper-slide");
      const widthCounts: Record<string, number> = {};

      slides.forEach((slide) => {
        const width = slide.style.width || `${slide.offsetWidth}px`;
        widthCounts[width] = (widthCounts[width] || 0) + 1;
      });

      let mostCommonWidth = "";
      let maxCount = 0;
      for (const [width, count] of Object.entries(widthCounts)) {
        if (count > maxCount) {
          mostCommonWidth = width;
          maxCount = count;
        }
      }
      slides.forEach((slide) => {
        slide.style.setProperty("width", mostCommonWidth, "important");
      });
    });
  }

  public cleanup() {
    const container = document.getElementById(
      "containerId"
    ) as HTMLIFrameElement | null;
    // Remove the event listener when it's no longer needed
    container?.contentWindow?.removeEventListener("resize", this.handleResize);
  }

  private setMastheadAndFirstChildHeight(height: number) {
    const masthead = this.dom.getElementById("masthead");
    if (masthead) {
      this.setElementHeightRecursively(masthead, height, 5);
    }
  }

  private setElementHeightRecursively(
    element: HTMLElement,
    height: number,
    depth: number
  ) {
    if (depth > 0 && element) {
      element.style.setProperty("height", `${height}px`, "important");
      const firstChild = element.firstElementChild as HTMLElement;
      if (firstChild) {
        this.setElementHeightRecursively(firstChild, height, depth - 1);
      }
    }
  }

  private setImageHeightToMaxContent(height: string) {
    const elements = this.allElements(".dummy.secondary-dummy-image");

    elements.forEach((element: HTMLElement) => {
      // Set height for the element itself
      element.style.setProperty("height", height, "important");

      // Set height for the image within the element
      const imgElement = element.querySelector("img") as HTMLElement | null;
      if (imgElement) {
        imgElement.style.setProperty("height", height, "important");
        imgElement.style.setProperty("min-height", "max-content", "important");
      }

      // Check the adjacent sibling element
      const adjacentElement = element.nextElementSibling as HTMLElement | null;
      if (adjacentElement && adjacentElement.tagName.toLowerCase() === "a") {
        // Set height for the image within the adjacent <a> tag
        const adjacentImgElement = adjacentElement.querySelector(
          "img"
        ) as HTMLElement | null;
        if (adjacentImgElement) {
          adjacentImgElement.style.setProperty("height", height, "important");
          adjacentImgElement.style.setProperty(
            "min-height",
            "max-content",
            "important"
          );
        }
      }
    });
  }

  private setCarouselImageHeightToFull() {
    const elements = this.allElements(".monthly-carousel-img-right");
    elements.forEach((element: HTMLElement) => {
      const imgElement = element.querySelector(
        ".w-100.desktop-only"
      ) as HTMLElement | null;
      if (imgElement) {
        imgElement.style.setProperty("height", "100%", "important");
        imgElement.style.setProperty("min-height", "100%", "important");
      }
    });
  }

  private setElementAndFirstChildHeight(
    height: number,
    domElement: HTMLElement | NodeListOf<HTMLElement>
  ) {
    const elements =
      domElement instanceof HTMLElement ? [domElement] : Array.from(domElement);

    elements.forEach((element) => {
      element.style.setProperty("height", `${height}px`, "important");
      const firstChild = element.firstElementChild as HTMLElement | null;
      if (firstChild) {
        firstChild.style.setProperty("height", `${height}px`, "important");
      }
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
