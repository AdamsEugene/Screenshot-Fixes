import Common from "./Common";

export default class AnitaScreenShotFixes {
  private document: Document;

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
    this.removeHeightProperty();
    this.hideShopifyMinicartElements();
    this.setTransparentBackground();
    this.setMobileMenuZIndexAndPosition();
    this.hideSearchForm();
    this.disableFlexOnMobileMenuBody();
    this.showGlobalOverlay();
    this.removeFixedPositionFromHeader();
    this.makeBackdropTransparent();
    // this.removeMainContentMargin();
    this.setDisplayToBlock();
    this.setOpacityToHeroSideBySide();
    this.removeFixedPositionFromHeaderBedsite();
    this.removeMinHeightAndOverflow();
    this.removeDisplayNone();
    this.setStyleToRecommendationModal();
    this.rdImasetOpacityToProductCages();
    this.setDisplayToBlockFulton();
    this.setDisplayToBlockForKachingBundles();
    this.removeAllInlineStylesFromMegaMenuWithDelay();
    this.updateHeightForSpecificElement();
    this.removeMarginTopFromContent();
    // this.removePositionFromShopifySection();
    this.removePositionFromShopifySectionEleat();
    this.updatePositionForShopifyHeaderELEAT();
    this.removeInlineStylesFromAllPromoCardsKHAITE();
    this.removeDisplayFromCartAsideELEAT();
    this.removeMarginTopAndHeightFromParentKHAITE();
    this.setOwlItemWidthBLACK();
  }

  private removeHeightProperty() {
    const mobileNav = this.document.querySelector(
      "mobile-navigation"
    ) as HTMLElement;

    if (
      mobileNav?.classList.contains("drawer") &&
      mobileNav.classList.contains("drawer--from-left") &&
      mobileNav.id === "mobile-menu-drawer"
    ) {
      mobileNav.style.setProperty("height", "", "important");
    }
  }

  private hideShopifyMinicartElements(): void {
    const elements = this.document.querySelectorAll(
      "#shopify-section-global-minicart"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element: HTMLElement) => {
      if (element.classList.contains("shopify-section")) {
        element.style.setProperty("display", "none", "important");
      }
    });
  }

  private setTransparentBackground(): void {
    const element = this.document.querySelector(
      "#product-hero-7"
    ) as HTMLElement;

    if (
      element &&
      element.classList.contains("comp-lightbox") &&
      element.classList.contains("is-video") &&
      element.classList.contains("product-image")
    ) {
      element.style.setProperty("background", "transparent", "important");
    }
  }

  private setMobileMenuZIndexAndPosition(): void {
    const element = this.document.querySelector(
      "nav.global-header__mobile-menu__content"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("z-index", "2", "important");
      element.style.setProperty("position", "relative", "important");
    }
  }

  private hideSearchForm(): void {
    const element = this.document.querySelector(
      "form.comp-search.cr-white"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("display", "none", "important");
    }
  }

  private disableFlexOnMobileMenuBody(): void {
    const parentElement = this.document.querySelector(
      ".global-header__mobile-menu.min-safe-h-screen.f-v.g-gap-3.cr-white.bg-green-main.tablet-down-only"
    ) as HTMLElement;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".global-header__mobile-menu__body"
      ) as HTMLElement;
      if (childElement) {
        childElement.style.setProperty("flex", "none", "important");
      }
    }
  }

  private showGlobalOverlay(): void {
    const element = this.document.querySelector(
      ".global-overlay.p-fill.js-dropdown-menu-close.js-mobile-menu-close"
    ) as HTMLElement;

    if (element && element.style.display === "none") {
      element.style.setProperty("display", "block", "important");
    }
  }
  private removeFixedPositionFromHeader(): void {
    const headerElement = this.document.getElementById(
      "shopify-section-header"
    ) as HTMLElement;

    if (headerElement) {
      const isShopifySection =
        headerElement.classList.contains("shopify-section");

      if (isShopifySection) {
        headerElement.style.removeProperty("position");
      }
    }
  }

  private makeBackdropTransparent(): void {
    const element = this.document.querySelector(
      "body.product-mc-modified .recommendation-modal__backdrop"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("background", "transparent", "important");
    }
  }

  private setDisplayToBlock(): void {
    const blockElement = this.document.getElementById(
      "shopify-block-jebbit_product_quiz_builder_jebbit_campaign_url_7xczVR"
    ) as HTMLElement;

    if (
      blockElement &&
      blockElement.classList.contains("shopify-block") &&
      blockElement.classList.contains("shopify-app-block")
    ) {
      blockElement.style.setProperty("display", "block", "important");
    }

    const iframeElement = this.document.querySelector(
      "iframe.jebbit-iframe"
    ) as HTMLElement;

    if (iframeElement) {
      iframeElement.style.setProperty("display", "block", "important");
    }
  }
  private setOpacityToHeroSideBySide(): void {
    const parentElement = this.document.querySelector(
      ".slideshow__slide.slideshow__slide--slideshow-split2-0.is-selected"
    ) as HTMLElement;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".hero__sidebyside.hero__sidebyside-text--left.color-scheme-2"
      ) as HTMLElement;

      if (childElement) {
        childElement.style.opacity = "1";
      }
    }
  }

  private removeFixedPositionFromHeaderBedsite(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "shopify-section-header"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("shopify-section") &&
        element.classList.contains("section-header")
      ) {
        element.style.setProperty("position", "static", "important");
        element.style.removeProperty("position");
      }
    }, 100);
  }
  private removeMinHeightAndOverflow(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "gp-carousel-ft-gp-carousel-gKJd-U6nmQ-template--17982265458943__gp_section_523067330180154432-7635732070655-template--17982265458943__gp_section_523067330180154432"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("gem-slider") &&
        element.classList.contains("gp-h-full") &&
        element.classList.contains("gp-overflow-hidden") &&
        element.classList.contains("gp-select-none") &&
        element.classList.contains("mobile:!gp-flex-nowrap") &&
        element.classList.contains("tablet:!gp-flex-nowrap") &&
        element.classList.contains("!gp-flex-nowrap") &&
        element.classList.contains("mobile:!gp-min-h-full") &&
        element.classList.contains("tablet:!gp-min-h-full") &&
        element.classList.contains("!gp-min-h-full")
      ) {
        element.style.removeProperty("min-height");
        element.style.removeProperty("overflow");
      }
    }, 100);
  }

  private removeDisplayNone(): void {
    setTimeout(() => {
      const element = this.document.querySelector(
        ".gp-items-center.gp-justify-center.gp-gap-2.gp-text-center.gp-carousel-dot-container.gp-carousel-dot-container-ft-gp-carousel-gKJd-U6nmQ-template--17982265458943__gp_section_523067330180154432-7635732070655-template--17982265458943__gp_section_523067330180154432.gp-static.gp-flex-row.gp-left-0.gp-right-0.tablet\\:gp-static.tablet\\:gp-flex-row.tablet\\:gp-left-0.tablet\\:gp-right-0.mobile\\:gp-static.mobile\\:gp-flex-row.mobile\\:gp-left-0.mobile\\:gp-right-0"
      ) as HTMLElement;

      if (element) {
        element.style.removeProperty("display");
      }
    }, 100);
  }
  private setStyleToRecommendationModal(): void {
    const bodyElement = this.document.querySelector(
      "body.gradient.template-index"
    ) as HTMLElement;

    if (bodyElement) {
      const containerElement = bodyElement.querySelector(
        ".recommendation-modal__container"
      ) as HTMLElement;

      if (containerElement) {
        containerElement.style.setProperty("display", "block", "important");
      }
    }
  }
  private rdImasetOpacityToProductCages(): void {
    setTimeout(() => {
      const imageElements = this.document.querySelectorAll(
        ".product-card__image.product-card__image--secondary"
      ) as NodeListOf<HTMLElement>;

      imageElements.forEach((element) => {
        element.style.setProperty("opacity", "0", "important");
      });
    }, 100);
  }
  private setDisplayToBlockFulton(): void {
    setTimeout(() => {
      const parentElement = this.document.getElementById(
        "shopify-section-layout-header"
      ) as HTMLElement;

      if (parentElement) {
        const targetElement = parentElement.children[1] as HTMLElement;

        if (targetElement) {
          targetElement.style.setProperty("display", "block", "important");
        }
      }
    }, 100);
  }

  private setDisplayToBlockForKachingBundles(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".kaching-bundles__bar-radio"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        if (element.style.display === "none") {
          element.style.setProperty("display", "block", "important");
        }
      });
    }, 100);
  }
  private removeAllInlineStylesFromMegaMenuWithDelay(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".viair-header-mega-menu"
      ) as NodeListOf<HTMLElement>;

      if (elements.length === 0) {
        return;
      }

      elements.forEach((element, index) => {
        element.removeAttribute("style");
      });
    }, 1000);
  }

  private updateHeightForSpecificElement(): void {
    setTimeout(() => {
      let element = this.document.querySelector(
        '.r-4wlhl5[data-rid="0623162f-5f5e-4f4c-9c7e-f50d1df9f84b"]'
      ) as HTMLElement;

      if (!element) {
        element = this.document.querySelector(
          '[data-rid="0623162f-5f5e-4f4c-9c7e-f50d1df9f84b"]'
        ) as HTMLElement;

        if (!element) {
          element = this.document.querySelector(".r-4wlhl5") as HTMLElement;
        }
      }

      if (element) {
        if (element.style.height === "max-content") {
          element.style.removeProperty("height");
        }

        element.style.setProperty("height", "12vh", "important");
      }
    }, 1000);
  }
  private removeMarginTopFromContent(): void {
    const element = this.document.querySelector(
      ".content-for-layout.focus-none"
    ) as HTMLElement;

    if (element) {
      element.style.removeProperty("margin-top");
    }
  }
  private removePositionFromShopifySectionEleat(): void {
    const element = this.document.getElementById(
      "shopify-section-header"
    ) as HTMLElement;

    if (element) {
      if (
        element.classList.contains("shopify-section") &&
        element.classList.contains("sticky") &&
        element.classList.contains("top-0") &&
        element.classList.contains("z-header")
      ) {
        element.style.removeProperty("position");
      }
    }
  }

  private updatePositionForShopifyHeaderELEAT(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "shopify-section-header"
      ) as HTMLElement;

      if (element) {
        if (element.style.position) {
          element.style.removeProperty("position");
        }
        element.style.setProperty("position", "relative", "important");
      }
    }, 1000);
  }
  private removeInlineStylesFromAllPromoCardsKHAITE(): void {
    const elements = this.document.querySelectorAll(
      ".collection-promo-card__media"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.removeAttribute("style");
    });
  }

  private removeDisplayFromCartAsideELEAT(): void {
    const element = this.document.getElementById(
      "shopify-section-cart-aside"
    ) as HTMLElement;

    if (
      element &&
      element.classList.contains("shopify-section") &&
      element.classList.contains("cart-aside")
    ) {
      element.style.removeProperty("display");
    }
  }
  private removeMarginTopAndHeightFromParentKHAITE(): void {
    const element = this.document.getElementById(
      "shopify-section-template--15516159377471__hero_banner_GWHzkd"
    ) as HTMLElement;

    if (element) {
      const parent = element.closest(
        "#MainContent.main-content"
      ) as HTMLElement;
      if (parent) {
        parent.style.setProperty("margin-top", "0", "important");
        parent.style.setProperty("height", "auto", "important");
      }
    }
  }
  private setOwlItemWidthBLACK(): void {
    const elements = this.document.querySelectorAll(
      ".owl-item"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.setProperty("width", "1512px", "important");
    });
  }
}
