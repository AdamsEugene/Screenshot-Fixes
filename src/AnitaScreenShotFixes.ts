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
}
