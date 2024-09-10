export default class ForsonScreenshotFixes {
  private document: Document;

  /* constructor(dom: Document = document) {
    this.document = dom;
  } */

  constructor(dom: Document = document) {
    this.document = dom;
    this.setupLoadEventListener();
  }

  private setupLoadEventListener(): void {
    window.addEventListener("load", () => {
      this.init();
    });
  }

  public init(): void {
    console.log("Initializing ScreenshotFixes");
    this.adjustBannerImageHeight();
    this.adjustImages();
    this.adjustPromoGridImages();
    this.adjustProductGridAndStyles();
    this.removeSectionInterstitialHeight();
    this.adjustImageStyles();
    this.removeDisplayNone();
    this.removeProperties();
    this.applyResponsiveStyles();
    this.applyCustomStyles();
    this.updateElements();
    this.setMinWidthForImages()
    this.setMinHeightForSection()
    this.updateStyles()
  }

  // Upcircle EU
  private adjustBannerImageHeight() {
    if (this.document.body.clientWidth > 430) {
      const bannerImage = this.document.querySelector(
        ".banner_image"
      ) as HTMLElement;
      if (bannerImage) {
        const parentElement = bannerImage.parentElement;
        if (parentElement) {
          const parentHeight = parentElement.offsetHeight;
          bannerImage.style.setProperty("min-height", `${parentHeight}px`);
        }
      }
    }
    const collectionSidebar = this.document.querySelector(
      ".collection_sidebar"
    ) as HTMLElement;
    if (collectionSidebar) {
      collectionSidebar.style.setProperty("width", "30%");
    }
  }

  // homepage craftklaris
  private adjustImages() {
    var viewportWidth = this.document.body.clientWidth;
    this.document
      .querySelectorAll(".banner__media.media")
      .forEach((bannerElement) => {
        var bannerImage = bannerElement.querySelector("img");
        if (bannerImage) {
          if (viewportWidth > 749) {
            var parentStyle = window.getComputedStyle(bannerElement);
            var parentWidth = parentStyle.getPropertyValue("width");
            var parentHeight = parentStyle.getPropertyValue("height");
            bannerImage.style.setProperty("min-width", parentWidth);
            bannerImage.style.setProperty("min-height", parentHeight);
          } else {
            bannerImage.style.removeProperty("min-width");
            bannerImage.style.removeProperty("min-height");
          }
        }
      });
    // Second part: Adjust hover effect images
    this.document
      .querySelectorAll(".media.media--hover-effect")
      .forEach((el) => {
        const images = el.querySelectorAll("img");
        if (images.length >= 2) {
          const secondImage = images[1];
          secondImage.style.minHeight = "100%";
        } else if (images.length >= 1) {
          const secondImage = images[0];
          secondImage.style.minHeight = "100%";
        }
      });
  }
  //MEXICO IN MY POCKET
  private adjustPromoGridImages(): void {
    console.log("running adjustPromoGridImages()");
    const viewportWidth = this.document.body.clientWidth;
    this.document
      .querySelectorAll(".promo-grid__bg")
      .forEach((promoElement) => {
        const promoImage = promoElement.querySelector("img");
        if (!(promoImage instanceof HTMLImageElement)) return;

        if (viewportWidth > 767) {
          this.setImageDimensions(promoImage, promoElement);
        } else {
          this.removeImageDimensions(promoImage);
        }
      });
  }

  // Mirai Clinical
  private adjustProductGridAndStyles() {
    // Part 1: Remove width auto
    const style = this.document.createElement("style");
    style.textContent = `
        .multicolumn-list__item.center .media--adapt,
        .multicolumn-list__item .media--adapt .multicolumn-card__image {
            width: 100% !important;
        }
    `;
    this.document.head.appendChild(style);

    // Part 2: Adjust product grid images
    const productGrid = this.document.querySelector(
      ".grid.product-grid.grid--2-col-tablet-down.grid--4-col-desktop"
    );
    if (productGrid) {
      const listItems = productGrid.querySelectorAll("li");
      listItems.forEach((li) => {
        const mediaElement = li.querySelector(".media.media--hover-effect");
        if (mediaElement) {
          const images = mediaElement.querySelectorAll("img");
          if (images.length >= 2) {
            const secondImage = images[1];
            secondImage.style.minHeight = "100%";
          } else if (images.length >= 1) {
            const firstImage = images[0];
            firstImage.style.minHeight = "100%";
          }
        }
      });
    }
  }


  private removeSectionInterstitialHeight() {
    console.log("running removeSectionInterstitialHeight()");
    const elements = this.document.querySelectorAll(".section-interstitial");
    elements.forEach((element) => {
      if (!(element instanceof HTMLElement)) return;

      element.style.removeProperty("height");
      if (element.style.getPropertyPriority("height") === "important") {
        element.style.setProperty("height", "initial", "important");
      }
    });
  }

    // DAVOCADOGUY
    private setMinHeightForSection() {
      const element = this.document.querySelector('.section-interstitial') as HTMLElement;
      if (element) {
          element.style.setProperty('min-height', '100%', 'important');
      }
  }

  // FLAKON
  private adjustImageStyles() {
    console.log("running adjustImageStyles()");
    const targetDivs = this.document.querySelectorAll(
      ".image-wrap, .text-spacing"
    );

    targetDivs.forEach((div) => {
      if (div instanceof HTMLElement) {
        div.style.removeProperty("height");
        div.style.setProperty("padding-bottom", "1px", "important");

        const img = div.querySelector("img");
        if (img instanceof HTMLImageElement) {
          img.style.setProperty("height", "auto", "important");
        }
      }
    });
  }

  // JELLYBEE
  private removeDisplayNone(): void {
    console.log("running removeDisplayNone()");
    const classList = [
      "jdgm-widget",
      "jdgm-carousel",
      "jdgm-carousel--default-theme",
      "jdgm-carousel--done",
      "jdgm-carousel-wrapper",
      "jdgm-carousel__left-arrow",
      "jdgm-carousel__right-arrow",
    ];

    classList.forEach((className) => {
      const elements = this.document.querySelectorAll(
        `.${className}`
      ) as NodeListOf<HTMLElement>;
      elements.forEach((element) => {
        element.style.removeProperty("display");
      });
    });
  }

  // Rubio Monocoat
  private removeProperties(): void {
    console.log("running removeProperties()");
    this.removeSectionHeight();
    this.removeImgFitDimensions();
  }

  private removeSectionHeight(): void {
    console.log("running removeSectionHeight()");
    const sectionElement = this.document.querySelector(
      ".icons-with-text.section.section--full-width.section--padded-small.color-scheme.color-scheme--2"
    );
    if (sectionElement instanceof HTMLElement) {
      sectionElement.style.removeProperty("height");
    }
  }

  private removeImgFitDimensions(): void {
    console.log("running removeImgFitDimensions()");
    const imgFitElements = this.document.querySelectorAll(".img-fit");
    imgFitElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.removeProperty("height");
        element.style.removeProperty("width");
      }
    });
  }

  private applyResponsiveStyles(): void {
    console.log("running applyResponsiveStyles()");
    const viewportWidth = this.document.body.clientWidth;
    if (viewportWidth <= 749) {
      const productIngredientsElement = this.document.querySelector(
        ".product-ingredients"
      );
      if (productIngredientsElement instanceof HTMLElement) {
        productIngredientsElement.style.setProperty(
          "--carousel-edge",
          "max(calc(var(--spacing-edge) * 0), 0rem)"
        );
      }
    }
  }

  private setImageDimensions(image: HTMLImageElement, parent: Element): void {
    const parentStyle = window.getComputedStyle(parent);
    image.style.setProperty("min-width", parentStyle.getPropertyValue("width"));
    image.style.setProperty(
      "min-height",
      parentStyle.getPropertyValue("height")
    );
  }

  private removeImageDimensions(image: HTMLImageElement): void {
    image.style.removeProperty("min-width");
    image.style.removeProperty("min-height");
  }

  private applyCustomStyles() {
    const sectionElement = this.document.querySelector(
      ".elementor-section.elementor-top-section.elementor-element.elementor-element-36d57aa4.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default"
    ) as HTMLElement;
    if (sectionElement) {
      sectionElement.style.setProperty(
        "background-image",
        "linear-gradient(60deg, var(--e-global-color-9043077) 0%, #2783F3AD 100%)"
      );
    }

    const imgElements = this.document.querySelectorAll(
      ".elementor-widget-container img"
    ) as NodeListOf<HTMLImageElement>;
    imgElements.forEach((element) => {
      element.style.setProperty("-webkit-mask-image", "none");
    });
  }

  //rubi
  private updateElements() {
    const wrapperElements = this.document.querySelectorAll(
      ".rimage-wrapper.lazyload--placeholder"
    ) as NodeListOf<HTMLImageElement>;
    wrapperElements.forEach((element) => {
      element.style.background = "none";
    });

    const imageElements = this.document.querySelectorAll(
      ".rimage__image"
    ) as NodeListOf<HTMLImageElement>;
    imageElements.forEach((element) => {
      element.style.height = "";
      element.style.width = "";
    });

    // Target the element with the ID 'CartPopup' and remove its width property
    const cartPopupElement = this.document.getElementById("CartPopup");
    if (cartPopupElement) {
      cartPopupElement.style.width = "";
    }
  }

  

  // RA optics
  private setMinWidthForImages() {
    const images = document.getElementsByClassName('rimage__image') as HTMLCollectionOf<HTMLElement>;;
    Array.from(images).forEach(image => {
        image.style.setProperty('min-width', '100%');
    });
}

// Call the function
// setMinWidthForImages();

  // ELEAT
  private updateStyles() {
    const benefitImage = this.document.querySelector('.benefit-sticky-image') as HTMLElement;
    if (benefitImage) {
        benefitImage.style.setProperty('transform', 'translate(0px, 580px)', 'important');
    }
    const reviewSection = this.document.querySelector('.review-section.bg-natural.py-4.desktop\\:py-14') as HTMLElement;
    if (reviewSection) {
        reviewSection.style.setProperty('position', 'relative', 'important');
    }
    const absoluteElement = this.document.querySelector('.absolute.-bottom-60.left-0.z-0.w-144') as HTMLElement;
    if (absoluteElement) {
        absoluteElement.style.setProperty('display', 'none', 'important');
    }
}

  
}
