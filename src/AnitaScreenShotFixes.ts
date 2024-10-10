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
}
