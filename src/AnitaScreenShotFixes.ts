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
    this.hideMiniCartSections();
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

  private hideMiniCartSections(): void {
    const miniCartSections = document.querySelectorAll(
      '#shopify-section-global-minicart.shopify-section'
    ) as NodeListOf<HTMLElement>;
  
    miniCartSections.forEach((element) => {
      element.style.setProperty('display', 'none', 'important');
    });
  }
}
