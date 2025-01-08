import Common from "./Common";

const delayTime = 500
export default class FortuneScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.announcementBarTextOverlay();
    };
    this.exec({ containerId, debugMode, func });
  }

  private announcementBarTextOverlay() {
    setTimeout(() => {
        try {
            const announcementBars = this.dom.querySelectorAll('.announcement-bar ') as NodeListOf<HTMLElement>;
            if (announcementBars.length > 0) {
                announcementBars.forEach((bar) => {
                    if (bar.style.opacity) {
                        bar.style.removeProperty('opacity');
                    }
                });
            }
        } catch (error) {
            return;
        }
    }, delayTime);
  }
}
