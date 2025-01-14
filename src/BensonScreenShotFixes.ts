import Common from "./Common";

export default class BensonScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.DaisyLondonRemoveWidthFromSlickTrack();
      this.run(this.PetsmonRemoveDuplicateFooters());
      this.RnnrRemoveCollectionLoadingClassAfterLoad();
      this.run(this.DialectRemoveOpacityOfPickerDropdown());
      this.TalkTheTalkAccordionIconDisplay();
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

  // Runny Hats: 3060
  private RnnrRemoveCollectionLoadingClassAfterLoad() {
    setInterval(() => {
      try {
        const targetElement = this.dom.querySelectorAll<HTMLElement>(
          ".collection__loading"
        );
        if (targetElement.length > 0) {
          targetElement.forEach((element) => {
            element.style.opacity = "0";
          });
        }
      } catch (error) {}
    }, 1000);
  }

  // DIALECT Fragrances: 2516
  private DialectRemoveOpacityOfPickerDropdown() {
    const targetElement =
      this.dom.querySelectorAll<HTMLElement>(".picker-dropdown");
    if (targetElement.length > 0) {
      targetElement.forEach((element) => {
        element.style.opacity = "0";
      });
    }
  }

  // TalkTheTalk: 2947
  private TalkTheTalkAccordionIconDisplay() {
    setInterval(() => {
      try {
        const targetElements = this.dom.querySelectorAll<HTMLElement>(
          ".accordion-item .plus__horizontal-line, .accordion-item .plus__vertical-line"
        );
        const dividers =
          this.dom.querySelectorAll<HTMLElement>(".accordion-divider");

        targetElements.forEach((element) => {
          element.style.display = "initial";
        });

        dividers.forEach((element) => {
          element.style.display = "inherit";
        });
      } catch (error) {}
    }, 1000);
  }
}
