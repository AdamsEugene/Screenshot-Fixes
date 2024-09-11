import { log } from "console";

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
    this.setMinWidthForImages();
    this.setMinHeightForSection();
    this.updateStyles();
    this.DavocadoBgImage();
    this.setImageMinHeight();
    this.modifyAKTElements();
    this.setTopToZero();
    this.modifyMainContent();
    this.setBackgroundTransparent();
    this.modifyElements();
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
    const style = this.document.createElement("style");
    style.textContent = `
        .multicolumn-list__item.center .media--adapt,
        .multicolumn-list__item .media--adapt .multicolumn-card__image {
            width: 100% !important;
        }
    `;
    this.document.head.appendChild(style);
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
  private DavocadoBgImage() {
    const imgElement = this.document.querySelector('.section-interstitial__img img') as HTMLElement;
    if (imgElement) {
        imgElement.style.setProperty('min-height', '100vh');
    }
}

  // FLAKON
  private adjustImageStyles() {
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
    this.removeSectionHeight();
    this.removeImgFitDimensions();
  }

  private removeSectionHeight(): void {
    const sectionElement = this.document.querySelector(
      ".icons-with-text.section.section--full-width.section--padded-small.color-scheme.color-scheme--2"
    );
    if (sectionElement instanceof HTMLElement) {
      sectionElement.style.removeProperty("height");
    }
  }

  private removeImgFitDimensions(): void {
    const imgFitElements = this.document.querySelectorAll(".img-fit");
    imgFitElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.removeProperty("height");
        element.style.removeProperty("width");
      }
    });
  }

  private applyResponsiveStyles(): void {
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
    const cartPopupElement = this.document.getElementById("CartPopup");
    if (cartPopupElement) {
      cartPopupElement.style.width = "";
    }
  }

  // RA optics
    private setMinWidthForImages() {
      const images = this.document.querySelectorAll('.rimage__image, .okeReviews-reviewsCarousel-review-product-image');
      images.forEach(image => {
          (image as HTMLElement).style.setProperty('min-width', '100%');
      });
  }
    
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

// Infinity Laser Spa
private setImageMinHeight(): void {
  const className = '.image-wrap';
  const elements = this.document.querySelectorAll(className) as NodeListOf<HTMLElement>;
  elements.forEach(element => {
    const parentHeight = element.offsetHeight;
    const images = element.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      img.style.minHeight = `${parentHeight}px`;
    });
  });
}

// AKT London
private modifyAKTElements() {
  const swiperElement = this.document.querySelector('.z-0.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events') as HTMLElement;
  if (swiperElement) {
    swiperElement.style.setProperty('overflow', 'hidden', 'important');
  }
  const flexElement = this.document.querySelector('.flex.flex-col.min-h-screen.font-primary') as HTMLElement;
  if (flexElement) {
    flexElement.style.setProperty('min-height', 'auto', 'important');
  }
}

// Llama Naturals
private setTopToZero(): void {
  const stickyRibbonElement = this.document.querySelector('.container-sticky-ribbon') as HTMLElement;
  if (stickyRibbonElement) {
    stickyRibbonElement.style.setProperty('top', '0px', 'important');
    stickyRibbonElement.style.setProperty('height', '45px', 'important');
  }
}

// Etee
private modifyMainContent() {
  const mainContent = this.document.querySelector('#MainContent') as HTMLElement;
  if (mainContent) {
    mainContent.style.setProperty('position', 'relative', 'important');
    mainContent.style.setProperty('top', '50px', 'important');
  }
}

// Eleganza
private setBackgroundTransparent() {
  const elements = this.document.querySelectorAll('.logos__link-overlay') as NodeListOf<HTMLImageElement>;
  elements.forEach(element => {
    element.style.setProperty('background', 'transparent', 'important');
  });
}

// Nouveauts KSL
private modifyElements() {
  console.log("running Nouveauts KSL function");
  const fixedElement = document.querySelector('.fixed.inset-0.bg-black.bg-opacity-25') as HTMLElement;
  if (fixedElement) {
    fixedElement.style.setProperty('position', 'unset', 'important');
  }
  const scrollableElement = document.querySelector('.h-\\[70vh\\].max-h-\\[600px\\].w-full.overflow-y-auto') as HTMLElement;
  if (scrollableElement) {
    scrollableElement.style.setProperty('display', 'none', 'important');
  }
}

}
