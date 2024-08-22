export default class ForsonScreenshotFixes {
    private elements: HTMLElement[];
    private document: Document;
  
    constructor(dom: Document = document) {
      this.document = dom;
      this.elements = this.getStickyAddToCart();
    }
  
    private getStickyAddToCart(): HTMLElement[] {
      const allElements = this.document.querySelectorAll("*");
      const fixedElements: HTMLElement[] = [];
  
      allElements.forEach((element: HTMLElement) => {
        if (this.isFixedPositionElement(element)) {
          fixedElements.push(element);
        }
      });
  
      return fixedElements;
    }
  
    private isFixedPositionElement(element: Element): boolean {
      const computedStyle = window.getComputedStyle(element);
  
      if (
        computedStyle.position !== "fixed" ||
        //   computedStyle.display === "none" ||
        computedStyle.visibility === "hidden"
      ) {
        return false;
      }
  
      const rect = element.getBoundingClientRect();
      const windowHeight =
        this.document.documentElement.clientHeight || window.innerHeight;
  
      return (
        rect.bottom >= windowHeight && rect.height <= windowHeight / 4
        //   && rect.height > 1000
      );
    }
  
    getElements(): HTMLElement[] {
      return this.elements;
    }
  }
  