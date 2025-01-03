import Common from "./Common";

export default class BensonScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.DaisyLondonRemoveWidthFromSlickTrack();
      this.run(this.PetsmonRemoveDuplicateFooters());
    };
    this.exec({ containerId, debugMode, func });
  }

  private run(
    callback: void,
    options: {
      onError?: (error: Error) => void;
    } = {}
  ) {
    try {
      callback;
    } catch (error) {
      options.onError?.(error as Error);
    }
  }

  //Daisy London
  private DaisyLondonRemoveWidthFromSlickTrack() {
    try {
      setTimeout(() => {
        this.dom.querySelectorAll(".slick-list.draggable").forEach((parent) => {
          const track = parent.querySelector(".slick-track") as HTMLElement;
          if (track) {
            track.style.width = "";
            const currentSlide = track.querySelector(
              ".slick-slide.slick-current"
            ) as HTMLElement;
            if (currentSlide) {
              currentSlide.style.width = "100%";
            }
          }
        });
      }, 2000);
    } catch (error) {}
  }

  private PetsmonRemoveDuplicateFooters() {
    const footers = this.dom.querySelectorAll("#shopify-section-cwr-footer");
    footers.forEach((footer, index) => {
      if (index > 0) {
        footer.remove();
      }
    });
  }
}
