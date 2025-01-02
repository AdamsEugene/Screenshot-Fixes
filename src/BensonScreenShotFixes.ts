import Common from "./Common";

export default class BensonScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.run(this.DaisyLondonRemoveWidthFromSlickTrack.bind(this));
    };
    this.exec({ containerId, debugMode, func });
  }

  private run(callback: Function, options: {
    onError?: (error: Error) => void;
  } = {}) {
    try {
      callback();
    } catch (error) {
      options.onError?.(error as Error);
    }
  }

  //Daisy London
  private DaisyLondonRemoveWidthFromSlickTrack() {
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
  }
}
