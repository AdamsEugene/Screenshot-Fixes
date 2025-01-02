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

}
