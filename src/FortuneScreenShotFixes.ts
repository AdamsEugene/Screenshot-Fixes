import Common from "./Common";

const delayTime = 500
export default class FortuneScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.announcementBarTextOverlay();
      this.adjustFixedElement();
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

  private adjustFixedElement() {
    setTimeout(() => {
      try {
        const bannerMediaDivs = this.dom.querySelectorAll('.banner__media') as NodeListOf<HTMLElement>;
        bannerMediaDivs.forEach((div) => {
          if (div.children.length === 1 && div.children[0].tagName.toLowerCase() === 'img') {
            const img = div.children[0] as HTMLImageElement;
            img.style.setProperty('top', '0px');
          }
        });
        
        const fixedElements = this.dom.querySelectorAll('.animate--fixed>img:not(.zoom):not(.deferred-media__poster-button), .animate--fixed>svg:not(.zoom):not(.deferred-media__poster-button)') as NodeListOf<HTMLElement>;
        fixedElements.forEach((element) => {
            element.style.setProperty('position', 'absolute', 'important');
        });
      } catch (error) {
          return;
      }
    }, delayTime);
  }
}
