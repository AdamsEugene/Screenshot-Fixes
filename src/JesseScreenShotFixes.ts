import Common from "./Common";

export default class JesseScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.changeAfterBackgroundToTransparent();
    };
    this.exec({ containerId, debugMode, func });
  }

  // Burga US Phone Cases.. fixes a loading overlay issue
  private changeAfterBackgroundToTransparent() {
    try {
      const loadingBody = this.dom.querySelector(
        ".wbsk-ui__loading-body"
      ) as HTMLElement | null;
      if (loadingBody) {
        const afterElementStyle = this.iframeWindow.getComputedStyle(
          loadingBody,
          "::after"
        );

        const currentBackgroundColor =
          afterElementStyle.getPropertyValue("background-color");
        if (currentBackgroundColor === "rgba(0, 0, 0, 0.31)") {
          const styleSheet = this.dom?.styleSheets?.[0];
          if (styleSheet) {
            const rule = `.wbsk-ui__loading-body::after { background: transparent !important; }`;
            styleSheet.insertRule(rule, styleSheet?.cssRules?.length);
          }
        }
      }
    } catch (error) {}
  }

  private addMissingCssForAddisonRossMobile() {
    // Check if the window width is less than or equal to 480px
    if (this.iframeWindow.innerWidth <= 480) {
      const css = `
        .col-lg-3 {
          -webkit-box-flex: 0;
          -ms-flex: 100% !important;
          flex: 100% !important;
          max-width: 100% !important;
        }
  
        .col-lg-2 {
          -webkit-box-flex: 0;
          -ms-flex: 100% !important;
          flex: 100% !important;
          max-width: 100% !important;
        }
  
        .col-lg-7.featured-collection {
          max-width: 100% !important;
        }
  
        .col-lg-7 {
          -webkit-box-flex: 0;
          -ms-flex: 100% !important;
          flex: 100% !important;
          max-width: 100% !important;
        }
      `;

      // Create a new <style> element
      const styleTag = this.dom.createElement("style");
      styleTag.type = "text/css";

      styleTag.appendChild(this.dom.createTextNode(css));
      this.dom.head.appendChild(styleTag);
    }
  }
}
