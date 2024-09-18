import { log } from "console";

export default class JesseScreenShotFixes {
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
    this.changeAfterBackgroundToTransparent();
 
  }

// Burga US Phone Cases.. fixes a loading overlay issue
private changeAfterBackgroundToTransparent() {
    const loadingBody = document.querySelector('.wbsk-ui__loading-body') as HTMLElement | null;
  
    if (loadingBody) {
      const afterElementStyle = window.getComputedStyle(loadingBody, '::after');
      
      const currentBackgroundColor = afterElementStyle.getPropertyValue('background-color');
  
      if (currentBackgroundColor === 'rgba(0, 0, 0, 0.31)') {
        const styleSheet = document.styleSheets[0]; 
        const rule = `.wbsk-ui__loading-body::after { background: transparent !important; }`;
        
        styleSheet.insertRule(rule, styleSheet.cssRules.length); 
        } 
    } 
  }
  

}