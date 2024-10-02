import Common from "./Common";

export default class AnitaScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.changeBodyMargin();
    };
    this.exec({ containerId, debugMode, func });
  }

  // www.llamanaturals.com - white space on top of announcement bar fix
  private changeBodyMargin() {
    try {
      const styleSheet = this.dom?.styleSheets?.[0];
      if (styleSheet) {
        const rule = `body { margin-top: -30px !important; }`;
        styleSheet.insertRule(rule, styleSheet?.cssRules?.length);
      }
    } catch (error) {
      console.error("An error occurred while injecting CSS:", error);
    }
  }
}
