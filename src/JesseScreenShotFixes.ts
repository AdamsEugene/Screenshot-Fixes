import Common from "./Common";

export default class JesseScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.changeAfterBackgroundToTransparent();
      this.updatePaddingForSmallScreens();
      this.addMarginForSmallScreens();
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
        // console.log(this.iframeWindow, "hey here i am");
        // console.log(this.dom, "hey");
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

  //   Addison Ross Luxury
  private updatePaddingForSmallScreens() {
    // Define the media query for screens below 749px
    const mediaQuery = this.iframeWindow.matchMedia("(max-width: 749px)");

    // Function to apply the padding-top change
    const applyPaddingChange = () => {
      try {
        if (mediaQuery.matches) {
          // Add a new style rule to override the existing padding-top with !important
          const styleSheet = this.dom?.styleSheets?.[0]; // Select the first stylesheet
          if (styleSheet) {
            const rule = `
            .featured-category .collection-list-wrapper.page-width {
              padding-top: 250px !important;
              }
              `;
            styleSheet.insertRule(rule, styleSheet?.cssRules?.length);
          }
        }
      } catch (error) {}
    };
    applyPaddingChange();
  }

  private addMarginForSmallScreens() {
    const mediaQuery = this.iframeWindow.matchMedia("(max-width: 749px)");
    const applyMarginChange = () => {
      if (mediaQuery.matches) {
        const parentDiv = this.dom.getElementById('shopify-section-template--17862126403806__shop_by_colours_BTUmmM') as HTMLElement | null;
        if (parentDiv) {
          const colourShopContainer = parentDiv.querySelector('.colour-shop-container') as HTMLElement | null;
          if (colourShopContainer) {
            colourShopContainer.style.marginTop = '120px';
          } 
        } 
      } 
    };
      applyMarginChange();
  }
}
