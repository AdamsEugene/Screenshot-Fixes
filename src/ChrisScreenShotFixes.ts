export default class ChrisScreenShotFixes {
    private elements: HTMLElement[];
    private document: Document;
  
    constructor(dom: Document = document) {
      this.document = dom;
      this.elements = this.getStickyAddToCart();
    }
  
  
    getElements(): HTMLElement[] {
      return this.elements;
    }
  }
  