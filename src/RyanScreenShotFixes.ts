import { log } from "console";

export default class RyanScreenshotFixes {
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
    this.updateFeaturedCollectionSection();
  }

  // theLogOx
private updateFeaturedCollectionSection() {
  // Select all parent elements with class 'featured-collection-section'
  const parentElements = this.document.querySelectorAll('.featured-collection-section') as NodeListOf<HTMLElement>;

  parentElements.forEach(parent => {
    parent.classList.remove('pt-6', 'pt-9', 'pb-9');
    
    // Clear any inline padding styles (padding-top and padding-bottom)
    parent.style.paddingTop = '';
    parent.style.paddingBottom = '';
  });
}

}