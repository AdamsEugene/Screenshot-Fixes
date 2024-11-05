import StickyAddToCart from "./StickyAddToCart";
import ChrisScreenShotFixes from "./ChrisScreenShotFixes";
import ForsonScreenshotFixes from "./ForsonScreenshotFixes";
import JesseScreenShotFixes from "./JesseScreenShotFixes";
import AnitaScreenShotFixes from "./AnitaScreenShotFixes";
import RyanScreenShotFixes from "./RyanScreenShotFixes";
import Common from "./Common";
import snippets from "./custom.snippets.json";
import styles from "./cssSnippets.json";
import { JsonEntry } from "./@types";

class ScreenshotFixes extends Common {
  constructor(debugMode = false) {
    super();
    this.debugMode = debugMode;
  }

  desktopFunctions = [
    () =>
      this.adjustHeightOfRelativeElements(
        "vc_row.style-color-jevc-bg.row-container"
      ),
    () =>
      this.adjustHeightOfRelativeElements(
        "vc_row.style-color-xsdn-bg.row-container"
      ),
    () =>
      this.adjustHeightOfRelativeElements(
        "row.unequal.triple-top-padding.triple-bottom-padding.no-h-padding.full-width.row-parent",
        true
      ),
    () =>
      this.adjustHeightOfRelativeElements(
        "row.triple-top-padding.triple-bottom-padding.single-h-padding.limit-width.row-parent.row-header",
        true
      ),
    () => this.setBackgroundWrapperHeight(),
    () => this.setSlideshowHeight(),
    () => this.observeMutationDesktop(),
    () => this.removeIdFromLogo(),
  ];

  mobileFunctions = [
    () => this.adjustReviewSliderDisplay(),
    () => this.runFunctionsForIdSite(),
    () => this.adjustGridProductImageHeight(),
    () => this.observeMutations(),
    () => this.DenvercoContentAdjustOpacity(),
  ];

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
      this.handleResize({
        desktopFuncs: this.desktopFunctions,
        mobileFuncs: this.mobileFunctions,
      });
      this.setElementsHeightToMaxContent(
        "best-seller-carousel.flickity-enabled.is-draggable"
      );
      this.setFirstChildSizeToParentSize(
        ["row.founders-content.d-flex.align-items-center"],
        "h"
      );
      this.setFirstChildSizeToParentSize(["#splide01-list"], "w", true);
      this.setHeight100();
      this.adjustSliderItems();
      this.adjustSlideshowSlides();
      this.setUncolHeight();
      this.adjustProductMediaWrapper();
      this.adjustCollectionList();
      this.adjustFlickityViewportWidth();
      this.setDisplayToBlock();
      this.removeClassesFromClassList();
      this.setOverflowHidden();
      this.processSnippets();
      this.ensureOverlayClass();
      this.adjustReviewRatingImages();
      this.setSlideshowFullScreenHeight();
      this.fixSvgsWithUse();
      this.removeLoadingClassAndSetImageHeight();
      this.updateSlickTrackWidths();
      this.hideCanvasMenu();
      this.adjustSlideshowHeight();
      this.injectCss();
      this.getAttrAndSetDisplayNone();
      this.modifyParentElement();
      // this.adjustFullWidthPageHeight();

      // this.adjustHeightOfRelativeElements();
    };

    this.exec({ containerId, debugMode, func });

    const chrisScreenShotFixesInstance = new ChrisScreenShotFixes(this.dom);
    chrisScreenShotFixesInstance.init();

    const jesseScreenShotFixesInstance = new JesseScreenShotFixes(this.dom);
    jesseScreenShotFixesInstance.init(containerId, debugMode);

    const anitaScreenShotFixesInstance = new AnitaScreenShotFixes(this.dom);
    anitaScreenShotFixesInstance.init();

    const forsonScreenshotFixesInstance = new ForsonScreenshotFixes(this.dom);
    forsonScreenshotFixesInstance.init();

    const ryanScreenshotFixesInstance = new RyanScreenShotFixes(this.dom);
    ryanScreenshotFixesInstance.init(containerId, debugMode);

    const fixedElementsInstance = new StickyAddToCart(this.dom);
    const fixedElements = fixedElementsInstance.getElements();
    fixedElements.forEach((element) => {
      element.style.setProperty("display", "block", "important");
    });
  }

  private injectCss() {
    styles.forEach((style: JsonEntry["content"]) => {
      const styleElement = this.dom.createElement("style");
      if (
        style.path &&
        style.idSite === this.idSite() &&
        style.idSiteHsr === this.idSiteHsr()
      ) {
        fetch(style.path)
          .then((response) => response.text())
          .then((cssContent) => {
            styleElement.innerHTML = cssContent;
            this.dom.head.appendChild(styleElement);
          })
          .catch((error) => {});
      }
    });
  }

  private processSnippets() {
    // console.log("this.iframeWindow: ", this.iframeWindow.location);

    // const url = new URL(this.iframeWindow.location.href);
    // const fileName = url.host + url.pathname + "-main.html";
    snippets.forEach((snippet: JsonEntry) => {
      const { selector, content } = snippet;

      const isElementInDom = selector
        ? this.dom.querySelector(selector)
        : undefined;

      // const s3FileName = content.path.split("custom.snippets/")[1];
      // console.log({ idSiteHsr: this.idSiteHsr(), isElementInDom });
      const idSiteHsr = content.idSiteHsr ? content.idSiteHsr === this.idSiteHsr() : true;

      if (
        content.path &&
        content.idSite === this.idSite() &&
        idSiteHsr &&
        isElementInDom
      ) {
        fetch(content.path)
          .then((response) => response.text())
          .then((htmlContent) => {
            const element = this.dom.querySelector(selector) as HTMLElement;
            this.displayBlock(element);
            if (element) {
              if (snippet.append) {
                const targetElement = document.querySelector(snippet.selector);
                if (targetElement) {
                  console.log(this.stringToHTML(htmlContent));

                  targetElement.parentNode.insertBefore(
                    this.stringToHTML(htmlContent),
                    targetElement
                  );
                }
              }
              if (snippet?.shadow)
                this.appendToFastSimonShadowRoot(element, htmlContent, snippet);
              else element.innerHTML = htmlContent;
            }
          })
          .catch((error) => console.error(`Error fetching content: ${error}`));
      }
    });
  }

  private appendToFastSimonShadowRoot(
    element: HTMLElement,
    htmlContent: string,
    snippet: JsonEntry
  ): void {
    const {
      elementToApplyStyles,
      classNames,
      shadowChildSelector,
      styles,
      stylesDes,
    } = snippet;
    if (element) {
      let applyStylesToMe: HTMLElement;
      this.displayBlock(element, true);
      const shadowRoot = element.shadowRoot;
      // console.log("shadowRoot: ", shadowRoot);
      if (shadowRoot) {
        if (!shadowRoot.querySelector(`#${shadowChildSelector}`)) {
          const newDiv = document.createElement("div");
          newDiv.id = shadowChildSelector;
          newDiv.className = classNames;

          newDiv.innerHTML = htmlContent;

          if (elementToApplyStyles) {
            applyStylesToMe = newDiv.querySelector(elementToApplyStyles);
            if (!applyStylesToMe)
              applyStylesToMe = shadowRoot.querySelector(elementToApplyStyles);
          }
          if (styles) {
            for (const [key, value] of Object.entries(styles)) {
              (applyStylesToMe || newDiv).style.setProperty(key, value);
            }
          }
          if (stylesDes && !this.isMobile()) {
            for (const [key, value] of Object.entries(stylesDes)) {
              (applyStylesToMe || newDiv).style.setProperty(key, value);
            }
          }
          shadowRoot.appendChild(newDiv);
        }
      }
    }
  }

  private stringToHTML(str: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, "text/html");
    return doc.body.firstChild;
  }

  private runFunctionsForIdSite() {
    const idSite = this.idSite();
    // console.log({ idSite });

    if (idSite !== null && this.functionsMap[idSite]) {
      this.functionsMap[idSite].forEach((func) => func());
    }
  }

  private setHeight100() {
    this.allElements("row.founders-content.d-flex.align-items-center").forEach(
      (element) => {
        this.setHeight(element, 100, "%");
      }
    );
  }

  private removeLoadingClassAndSetImageHeight(): void {
    const elements = this.dom.querySelectorAll<HTMLElement>(
      ".grid-link__image--loading"
    );
    elements.forEach((element) => {
      element.classList.remove("grid-link__image--loading");
      const img = element.querySelector<HTMLImageElement>("img");
      if (img) {
        img.style.setProperty("height", "100%", "important");
      }
    });
  }

  private removeIdFromLogo() {
    this.allElements(".wp-block-group.is-content-justification-right.is-nowrap.is-layout-flex.wp-container-core-group-is-layout-1.wp-block-group-is-layout-flex").forEach(parent => {
        const child = parent.querySelector("#site-logo");
        if (child) child.removeAttribute("id");
    });
}
  

  private setUncolHeight() {
    const parentElement = this.dom.querySelector<HTMLElement>(
      ".wpb_column.pos-top.pos-center.align_center.align_center_mobile.column_parent.col-lg-12.single-internal-gutter"
    );

    if (parentElement) {
      const uncolElement =
        parentElement.querySelector<HTMLElement>(".uncol.style-light");

      if (uncolElement) {
        this.setHeight(uncolElement, 100, "%");
        const uncont = uncolElement.querySelector<HTMLElement>(".uncont");
        if (uncont) {
          const secondChild = uncont.children[1] as HTMLElement;
          if (secondChild) {
            this.setImageParentsHeight(secondChild, uncont);
          }
        }
      }
    }
  }

  private setImageParentsHeight(secondChild: HTMLElement, uncont: HTMLElement) {
    const images = secondChild.querySelectorAll<HTMLImageElement>("img");
    images.forEach((img) => {
      const imgHeight = img.offsetHeight;
      let currentElement: HTMLElement | null = img.parentElement;
      while (currentElement && currentElement !== uncont) {
        currentElement.style.setProperty(
          "height",
          `${imgHeight}px`,
          "important"
        );
        currentElement = currentElement.parentElement;
      }
      uncont.style.setProperty("height", `${imgHeight}px`, "important");
    });
  }

  private removeExcessiveParentWidths = () => {
    const allElements = this.dom.querySelectorAll("*");
    const processedParents = new Set<HTMLElement>();
    allElements.forEach((element) => {
      const parent = element.parentElement;
      if (parent && !processedParents.has(parent)) {
        const parentWidth = parent.getBoundingClientRect().width;
        if (parentWidth > 430) {
          parent.style.width = "auto";
          processedParents.add(parent);
        }
      }
    });
  };

  private getSiteURLAsObj() {
    const currentUrl = window.location.href;
    return new URL(currentUrl);
  }

  private idSite(): number | null {
    const urlObj = this.getSiteURLAsObj();
    const idSiteParam = urlObj.searchParams.get("idSite");
    const idSiteNumber = idSiteParam ? parseInt(idSiteParam, 10) : null;
    return Number.isNaN(idSiteNumber) ? null : idSiteNumber;
  }

  private idSiteHsr() {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split("#")[1]);
    const subcategory = urlParams.get("subcategory");
    if (subcategory) {
      return Number.isNaN(subcategory) ? null : +subcategory;
    }
    const oldIdsitehsr = urlParams.get("old_idsitehsr");
    return Number.isNaN(oldIdsitehsr) ? null : +oldIdsitehsr;
  }

  private adjustReviewSliderDisplay() {
    const container = this.elements(
      ".custom-review-slider-box-container-v2"
    ) as HTMLElement;
    if (
      container &&
      container.className.trim() === "custom-review-slider-box-container-v2"
    ) {
      container.style.setProperty("display", "block", "important");
      const parent = container.parentElement;
      if (
        parent &&
        parent.className.trim() === "custom-review-slider-content"
      ) {
        parent.style.setProperty("max-height", "282px", "important");
        const parentOfParent = parent.parentElement;
        if (
          parentOfParent &&
          parentOfParent.classList.contains("custom-review-slider-container")
        ) {
          parentOfParent.style.setProperty("max-height", "282px", "important");
          const PPP = parentOfParent.parentElement;
          if (PPP && PPP.classList.contains("shopify-section")) {
            PPP.style.setProperty("max-height", "282px", "important");
          }
        }
      }
      const reviewBoxes = container.querySelectorAll<HTMLElement>(
        ".custom-review-slider-box"
      );
      reviewBoxes.forEach((box, index) => {
        if (index > 0) {
          box.style.setProperty("display", "none", "important");
        }
      });
    }
  }

  private adjustProductMediaWrapper() {
    const mediaWrappers = this.allElements<HTMLElement>(
      ".grid__item.large--one-half.product-single__media-wrapper"
    );
    mediaWrappers.forEach((mediaWrapper) => {
      const flickityViewport =
        mediaWrapper.querySelector<HTMLElement>(".flickity-viewport");
      if (flickityViewport) {
        flickityViewport.style.setProperty("min-height", "100%", "important");
        const flickitySlider =
          flickityViewport.querySelector<HTMLElement>(".flickity-slider");
        if (flickitySlider) {
          const sliderChildren = flickitySlider.children;
          Array.from(sliderChildren).forEach((child: Element) => {
            (child as HTMLElement).style.setProperty(
              "min-height",
              "100%",
              "important"
            );
          });
        }
      }
    });
  }

  private adjustGridProductImageHeight(): void {
    const productLinks = this.dom.querySelectorAll<HTMLElement>(
      ".grid-product__link"
    );
    productLinks.forEach((link) => {
      const productImage = link.querySelector<HTMLImageElement>(
        ".grid-product__image"
      );
      if (productImage && productImage.parentElement) {
        const parentHeight =
          productImage.parentElement.getBoundingClientRect().height;
        if (parentHeight) {
          this.setHeight(productImage, parentHeight);
        }
      }
    });
  }

  //jolies skin care
  private joliesskincareUpdateReviewsHeight() {
    if (window.location.href.includes("4646357")) {
      this.dom.querySelectorAll("#looxReviews").forEach((parentElement: HTMLElement) => {
        const childElement = parentElement.querySelector("#looxReviewsFrame") as HTMLElement;
        if (childElement) {
          if (childElement.style.height) {
            childElement.style.height = ''; 
          }
          childElement.style.height = '4088px';
        }
      });
    }
  }

  //Denver CO
  private DenvercoContentAdjustOpacity() {
    const style = this.dom.createElement('style');
    style.innerHTML = `
        .wp-block-group.is-content-justification-right.is-nowrap.is-layout-flex.wp-container-core-group-is-layout-1.wp-block-group-is-layout-flex #site-logo img {
            opacity: 0 !important;
        }
    `;
    this.dom.head.appendChild(style);
  }

  private observeMutations() {
    if (this.dom && this.dom.body) {
      const observer = new MutationObserver(() => {
        this.joliesskincareUpdateReviewsHeight();
      });
  
      observer.observe(this.dom.body, { childList: true, subtree: true });
    } 
  }

  private adjustFlickityViewportWidth(): void {
    const flickityViewports = this.dom.querySelectorAll<HTMLElement>(
      ".flickity-viewport.animate-out"
    );
    flickityViewports.forEach((viewport) => {
      viewport.style.setProperty("width", "100%", "important");
      const parentElement = viewport.parentElement;
      if (parentElement) {
        parentElement.style.removeProperty("transform");
      }
    });
  }

  private applyStyles(): void {
    this.allElements(".lai-star-rating-none svg, .lai-star-rating svg").forEach(
      (element: HTMLElement) => {
        element.style.maxWidth = "20px";
        element.style.float = "left";
      }
    );
  }

  private setDisplayToBlock() {
    const classes = [
      ".splide__list.sbc-section__menu.border-black",
      ".quick-add-modal__content-info",
    ];
    classes.forEach((cls) => {
      const elements = this.allElements(cls);
      elements.forEach((element) => {
        if (element) this.displayBlock(element, true);
      });
    });
  }

  private removeClassesFromClassList(): void {
    const classesToRemove = ["md-modal__backdrop"];
    classesToRemove.forEach((className) => {
      const elements = this.allElements<HTMLElement>(`.${className}`);
      elements.forEach((element) => {
        element.classList.remove(className);
      });
    });
  }

  private setOverflowHidden(): void {
    const classCombinations = [".no-js.var-sticky"];
    classCombinations.forEach((classCombo) => {
      const elements = this.allElements<HTMLElement>(classCombo);
      elements.forEach((element) => {
        element.style.setProperty("overflow", "hidden", "important");
      });
    });
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
    const mainContent = this.elementById("MainContent") as HTMLElement;
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
    const classes = [
      ".boost-cart__backdrop",
      ".modal__gifting",
      ".fixed.inset-0.bg-black.bg-opacity-25",
      ".needsclick.kl-private-reset-css-Xuajs1",
      ".flex.flex-wrap.h-full.px-4.-mx-4",
      ".window-overlay",
    ];
    
    // Add inline styles with !important to class-based elements
    classes.forEach((cls) => {
      this.allElements(cls)?.forEach((m: HTMLElement) => {
        m.style.setProperty("display", "none", "important");
      });
    });
    
    // Add !important to styles targeting IDs
    const idsToHide = ["pandectes-banner", "gdpr-blocking-page-overlay", "ps__widget_container", "shopify-section-promo-popup"];
    const style = this.dom.createElement("style");
    style.innerHTML = idsToHide
      .map((id) => `#${id} { display: none !important; }`)
      .join("\n");
    this.dom.head.appendChild(style);
  } 

  private getAttrAndSetDisplayNone() {
    const attrs = ['[x-show="searchActive"]'];
    attrs.forEach((attr) => {
      const elements = this.dom.querySelectorAll(
        attr
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        this.displayNone(element, true);
      });
    });
  }

  private setElementDisplayToBlock() {
    const classes = [""];
    classes.forEach((cls) => {
      this.allElements(cls)?.forEach((m: HTMLElement) => this.displayBlock(m));
    });
  }

  private adjustSlideshowSlides() {
    const slideshowSection = this.elementById(
      "shopify-section-offer-slideshow"
    );
    if (slideshowSection) {
      const slides = slideshowSection.querySelectorAll(".slideshow__slide");
      slides.forEach((slide: HTMLElement) => {
        if (getComputedStyle(slide).position === "absolute") {
          slide.style.setProperty("left", "0", "important");
        }
      });
    }
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
        const largerWidthElement = slide.querySelector<HTMLElement>(
          ".ingredient-card__content"
        );

        if (largerWidthElement) {
          const largerWidth = largerWidthElement.offsetWidth;

          if (largerWidth > parseFloat(mostCommonWidth)) {
            mostCommonWidth = `${largerWidth}px`;
          }
        }

        // console.log({ mostCommonWidth, slide });

        mostCommonWidth =
          parseFloat(mostCommonWidth) > 5 ? mostCommonWidth : "430px";

        slide.style.setProperty("width", mostCommonWidth, "important");
        slide.style.setProperty("max-width", mostCommonWidth, "important");
        slide.style.setProperty("min-width", mostCommonWidth, "important");
      });
    });
  }

  private adjustSliderItems() {
    const productSlider = this.elementById("productSlider");
    // console.log({ productSlider });

    if (productSlider) {
      productSlider.style.visibility = "visible";
      const sliderItems = productSlider.querySelectorAll(".slider-item");
      sliderItems.forEach((item: HTMLElement, index: number) => {
        if (index === 0) {
          item.style.setProperty("opacity", "1", "important");
          item.style.setProperty("position", "relative", "important");
        } else {
          item.style.setProperty("opacity", "0", "important");
          item.style.setProperty("position", "absolute", "important");
        }
      });
    }
  }

  private ensureOverlayClass(): void {
    const overlayElements = this.dom.querySelectorAll<HTMLElement>("#overlay");
    overlayElements.forEach((element) => {
      if (!element.classList.contains("overlay")) {
        element.classList.add("overlay");
      }
    });
  }

  private adjustReviewRatingImages(): void {
    const reviewRatings =
      this.dom.querySelectorAll<HTMLElement>(".review-rating");
    reviewRatings.forEach((element) => {
      if (
        element.children.length === 1 &&
        element.children[0].tagName === "IMG"
      ) {
        (element.children[0] as HTMLElement).style.objectFit = "contain";
      }
    });
  }

  private setSlideshowFullScreenHeight(): void {
    const slideshows = this.dom.querySelectorAll<HTMLElement>(
      ".slideshow--full-screen"
    );
    slideshows.forEach((slideshow) => {
      const actualHeight = slideshow.getAttribute("actualHeight");
      if (actualHeight) {
        slideshow.style.setProperty(
          "max-height",
          `${actualHeight}`,
          "important"
        );
      }
    });
  }

  private updateSlickTrackWidths(): void {
    const slickTracks = this.dom.querySelectorAll<HTMLElement>(".slick-track");
    slickTracks.forEach((item) => {
      Array.from(item.children).forEach((child) => {
        const actualWidth = child.getAttribute("actualWidth");
        if (actualWidth) {
          (child as HTMLElement).style.maxWidth = `${actualWidth}`;
        }
      });
    });
  }

  private hideCanvasMenu(): void {
    const canvasMenu = this.dom.querySelector<HTMLElement>(
      ".nt-canvas-menu.nt-push-menu"
    );
    if (canvasMenu) {
      canvasMenu.style.setProperty("left", "-1000000%", "important");
    }
  }

  private fixSvgsWithUse() {
    this.dom.querySelectorAll("svg").forEach((svg) => {
      const rect = svg.getBoundingClientRect();
      if (rect.top < 150) {
        const useElement = svg.querySelector("use");
        if (useElement && useElement.hasAttribute("href")) {
          const hrefValue = useElement.getAttribute("href");
          const img = this.dom.createElement("img");
          img.src = hrefValue;
          img.classList.add("heatmap__com-svg-replacement");
          svg.parentElement.appendChild(img);
          img.style.position = "absolute";
          img.style.top = `0px`;
          // svg.style.visibility = 'hidden';
        }
      }
    });
  }

  private modifyParentElement() {
    const element = this.dom.querySelector(
      ".recommendation-modal__container"
    ) as HTMLElement;
    if (element) {
      const parent = element.parentElement as HTMLElement;
      if (parent.tagName.toLowerCase() === "div" && parent.className === "") {
        parent.id = "the_id";
        const style = document.createElement("style");
        style.innerHTML = `#the_id { display: none !important; }`;
        document.head.appendChild(style);
      }
    }
  }

  public cleanup() {
    const container = document.getElementById(
      "containerId"
    ) as HTMLIFrameElement | null;
    // Remove the event listener when it's no longer needed
    // container?.contentWindow?.removeEventListener("resize", this.handleResize);
  }

  private setMastheadAndFirstChildHeight(height: number) {
    const masthead = this.elementById("masthead");
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

  private setHeroMaxHeight(): void {
    const heroElement = this.dom.querySelector<HTMLElement>(
      ".hero.hero--100vh.hero--mobile--500px.loaded.flickity-enabled.is-draggable.is-fade"
    );

    if (heroElement) {
      heroElement.style.setProperty("max-height", "968px", "important");

      const flickityViewport =
        heroElement.querySelector<HTMLElement>(".flickity-viewport");

      if (flickityViewport) {
        flickityViewport.style.setProperty("max-height", "968px", "important");

        const flickitySlider =
          flickityViewport.querySelector<HTMLElement>(".flickity-slider");

        if (flickitySlider) {
          flickitySlider.style.setProperty("max-height", "968px", "important");

          const firstChild = flickitySlider.firstElementChild as HTMLElement;

          if (firstChild) {
            firstChild.style.setProperty("max-height", "968px", "important");

            const firstGrandchild = firstChild.firstElementChild as HTMLElement;

            if (firstGrandchild) {
              firstGrandchild.style.setProperty(
                "max-height",
                "968px",
                "important"
              );
            }
          }
        }
      }
    }
  }

  private adjustSlideshowHeight() {
    const slideshowSections = this.allElements(
      ".shopify-section.shopify-section--slideshow"
    );
    slideshowSections.forEach((section) => {
      const actualHeight = section.getAttribute("actualHeight");
      if (actualHeight && actualHeight.endsWith("px")) {
        const actualHeightValue = parseFloat(actualHeight);
        const computedHeight = parseFloat(getComputedStyle(section).height);
        if (computedHeight > actualHeightValue * 1.04) {
          section.style.height = actualHeight;
          section.style.minHeight = actualHeight;
          section.style.maxHeight = actualHeight;
        }
      }
    });
  }

  private adjustHeightOfRelativeElements(className: string, noPt?: boolean) {
    const elements = this.allElements(className);

    elements.forEach((element: HTMLElement) => {
      if (noPt) {
        element.style.setProperty("padding-top", "0", "important");
      }
      const computedStyle = getComputedStyle(element);
      if (computedStyle.position === "relative") {
        element.style.setProperty("max-height", "720px", "important");
        const firstChild = element.firstElementChild as HTMLElement | null;
        if (firstChild) {
          firstChild.style.setProperty("max-height", "720px", "important");
        }
      }
    });
  }

  private setBackgroundWrapperHeight() {
    const elements = this.allElements(".background-wrapper");
    elements.forEach((element: HTMLElement) => {
      const firstChild = element.firstElementChild as HTMLElement | null;
      if (firstChild) {
        const backgroundImage = getComputedStyle(firstChild).backgroundImage;
        if (backgroundImage && backgroundImage !== "none") {
          this.setHeight(element, 720);
          this.setHeight(firstChild, 720);
        }
      }
    });
  }

  private adjustCollectionList(): void {
    const collectionLists = this.dom.querySelectorAll<HTMLElement>(
      ".collection-list.grid.grid--mobile-slider"
    );
    collectionLists.forEach((collectionList) => {
      const gridItems = collectionList.querySelectorAll<HTMLElement>(
        ".grid-item.collection-item.collection-item--centered"
      );
      gridItems.forEach((gridItem) => {
        const collectionImage = gridItem.querySelector<HTMLElement>(
          ".collection-item__image"
        );
        if (collectionImage) {
          collectionImage.style.setProperty("height", "100%", "important");
          collectionImage.style.setProperty("min-height", "100%", "important");
          const collectionBg = collectionImage.querySelector<HTMLElement>(
            ".collection-item__bg.aos-animate"
          );
          if (collectionBg) {
            this.setOpacityAndDisplay(collectionBg);
            const imageWrapper =
              collectionBg.querySelector<HTMLElement>(".image-wrapper");
            if (imageWrapper) {
              this.setOpacityAndDisplay(imageWrapper);
              const img = imageWrapper.querySelector<HTMLElement>("img");
              if (img) {
                this.setOpacityAndDisplay(img);
              }
            }
          }
        }
      });
    });
  }

  private setSlideshowHeight() {
    const slideshowElement = this.elements(
      ".slideshow-classic.image-slideshow.image-slideshow--slide.page-dots--false.flickity-enabled.is-draggable.flickity-resize"
    ) as HTMLElement;
    if (slideshowElement) {
      slideshowElement.style.setProperty("max-height", "839px", "important");
      const flickityViewport =
        slideshowElement.querySelector<HTMLElement>(".flickity-viewport");
      if (flickityViewport) {
        flickityViewport.style.setProperty("max-height", "839px", "important");
        const flickitySlider =
          flickityViewport.querySelector<HTMLElement>(".flickity-slider");
        if (flickitySlider) {
          flickitySlider.style.setProperty("max-height", "839px", "important");
          const galleryCells =
            flickitySlider.querySelectorAll<HTMLElement>(".gallery-cell");
          galleryCells.forEach((cell) => {
            cell.style.setProperty("max-height", "839px", "important");
            const images = cell.querySelectorAll<HTMLImageElement>("img");
            images.forEach((img) => {
              img.style.setProperty("max-height", "839px", "important");
            });
          });
        }
      }
    }
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

  //Gobi Heat
  private GobiHeatupdateLookImageStyles() {
    const updateStyles = (el: HTMLElement, prop: string, value: string) => {
        el.style.removeProperty(prop);
        el.style.setProperty(prop, value, 'important');
    };

    this.dom.querySelectorAll('.look').forEach((look: HTMLElement) => {
        const lookImage = look.querySelector('.look__image') as HTMLElement | null;
        if (!lookImage) return;

        updateStyles(lookImage, 'height', '810px');

        const container = lookImage.querySelector('.look__image-container') as HTMLElement | null;
        if (!container) return;

        updateStyles(container, 'min-height', 'auto');

        const dots = container.querySelector('.look__dots') as HTMLElement;
        if (dots) updateStyles(dots, 'height', 'auto');

        container.querySelectorAll('img').forEach((img: HTMLImageElement) => updateStyles(img, 'width', '100%'));
    });
  }

  private observeMutationDesktop() {
    if (this.dom && this.dom.body) {
      const observer = new MutationObserver(() => {
        this.GobiHeatupdateLookImageStyles();
      });
  
      observer.observe(this.dom.body, { childList: true, subtree: true });
    } 
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

  // Rubio Monocot
  // private RubioMonocotUpdateMenuState() {
  //   const parentElement1 = this.dom.querySelector(".main-menu") as HTMLElement;
  //   if (parentElement1) {
  //     const childElement1 = parentElement1.querySelector(
  //       ".main-menu__disclosure"
  //     ) as HTMLElement;
  //     if (childElement1) {
  //       childElement1.classList.add("is-open");
  //       childElement1.setAttribute("open", "");
  //     }
  //   }

  //   const parentElements2 = this.dom.querySelectorAll(
  //     ".js-mega-nav"
  //   ) as NodeListOf<HTMLElement>;
  //   parentElements2.forEach((parentElement2) => {
  //     const detailsElements = parentElement2.querySelectorAll(
  //       "details"
  //     ) as NodeListOf<HTMLDetailsElement>;
  //     detailsElements.forEach((detailsElement) => {
  //       detailsElement.setAttribute("open", "");
  //     });
  //   });
  // }

   //sevenlions
   private sevenlionsupdateMainContentMarginTop = () => {
    const mainContentElements = this.dom.querySelectorAll("#MainContent");
    mainContentElements.forEach((element: HTMLElement) => {
      if (element.style.marginTop) {
        element.style.marginTop = '';
      }
      element.style.setProperty('margin-top', '0', 'important');
    });
  };

  // Breeo
  private BreeoupdateBannerMinHeight = () => {
    const sections = this.dom.querySelectorAll(
      ".shopify-section.section.image-banner-section"
    );
    sections.forEach((section: HTMLElement) => {
      const banner = section.querySelector(
        ".banner.banner-medium.theme-dark"
      ) as HTMLElement;
      const bannerContent = banner?.querySelector(
        ".banner-content.banner-content-bottom-left.banner-content-mobile-top.container"
      ) as HTMLElement;
      if (banner) {
        banner.style.setProperty("min-height", "auto", "important");
      }
      if (bannerContent) {
        bannerContent.style.setProperty("margin-top", "125px", "important");
      }
    });
  };

  private adjustHeaderElements = () => {
    const findAndAdjustHeader = () => {
      const mainContent = this.dom.querySelector('main, #MainContent, [data-main], [role="main"]');
  
      if (mainContent) {
        const header = mainContent.previousElementSibling as HTMLElement;
  
        if (header) {
          const isShopHeader = header.querySelector('.site-header, .main-header, nav, [class*="menu"]');
  
          if (isShopHeader) {
            header.style.setProperty('margin-top', '-54px', 'important');
          }
        }
      }
      const mainNav = this.dom.querySelector('nav.site-nav, .main-nav, .site-header__nav');
  
      if (mainNav) {
        const headerContainer = mainNav.closest('header') || mainNav.parentElement;
        if (headerContainer) {
          (headerContainer as HTMLElement).style.setProperty('margin-top', '-54px', 'important');
        }
      }
    };
    
    findAndAdjustHeader();
    window.addEventListener('load', findAndAdjustHeader);
    
    const interval = setInterval(findAndAdjustHeader, 1000);
    setTimeout(() => clearInterval(interval), 5000);
  }

  private removeMainContentMarginTop = () => {
    const findAndAdjustContent = () => {
      const mainContent = this.dom.querySelector(
        '#MainContent, main, [data-main], [role="main"], .main-content'
      );
  
      if (mainContent) {
        (mainContent as HTMLElement).style.setProperty('margin-top', '0', 'important');
      }
    };
  
    findAndAdjustContent();
    
    window.addEventListener('load', findAndAdjustContent);
    
    const interval = setInterval(findAndAdjustContent, 1000);
    setTimeout(() => clearInterval(interval), 5000);
  }

  private heatmapSvgHideElements() {
    const svgElements = this.dom.querySelectorAll('.heatmap__com-svg-replacement') as NodeListOf<HTMLElement>;

    svgElements.forEach((element: HTMLElement) => {
        element.style.setProperty('display', 'none', 'important');
    });
  };

  private Nuvecartfooter = () => {
    const elements = [
      ...Array.from(this.dom.querySelectorAll('.cart__footer') as NodeListOf<HTMLElement>),
      this.dom.querySelector('#sticky_container') as HTMLElement
    ].filter(Boolean); // Filters out null if #sticky_container is not found

    elements.forEach(element => {
      element.style.removeProperty('display'); // Removes any existing display style
      element.style.setProperty('display', 'block', 'important');
    });
  };

  private observeMutation = () => {
    if (this.dom && this.dom.body) {
      const observer = new MutationObserver(() => {
        this.heatmapSvgHideElements();
      });
  
      observer.observe(this.dom.body, { childList: true, subtree: true });
    } 
  }

  //ELEAT
  private ELEATUpdatePositionForShopifyHeader = () => {
    setTimeout(() => {
      const headerElement = this.dom.getElementById("shopify-section-header") as HTMLElement;
  
      if (headerElement) {
        if (headerElement.style.position) {
          headerElement.style.position = '';
        }
        headerElement.style.setProperty("position", "relative", "important");
      }
    }, 1000);
  };

  // functionsMap: Record<number, (() => void)[]> = {
  //   1947: [this.removeExcessiveParentWidths],
  //   2910: [this.sevenlionsupdateMainContentMarginTop],
  //   2761: [this.BreeoupdateBannerMinHeight],
  //   2853: [this.adjustHeaderElements, this.removeMainContentMarginTop],
  //   // Add more idSite mappings as needed
  // };

  private functionsMap: Record<number, (() => void)[]> = this.createFunctionsMap();

  private createFunctionsMap(): Record<number, (() => void)[]> {
      const functionGroups = [
          { ids: [1947], functions: [this.removeExcessiveParentWidths] },
          { ids: [2910], functions: [this.sevenlionsupdateMainContentMarginTop] },
          { ids: [2761], functions: [this.BreeoupdateBannerMinHeight] },
          { ids: [2853], functions: [this.adjustHeaderElements, this.removeMainContentMarginTop] },
          { ids: [2777, 172, 2907, 555, 2922], functions: [this.observeMutation] },
          { ids: [1848], functions: [this.removeMainContentMarginTop] },
          { ids: [2118], functions: [this.ELEATUpdatePositionForShopifyHeader] },
          { ids: [2898], functions: [this.Nuvecartfooter] },
      ];

      const map: Record<number, (() => void)[]> = {};

      functionGroups.forEach(({ ids, functions }) => {
          ids.forEach(id => {
              map[id] = functions;
          });
      });

      return map;
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
