import Common from "./Common";

export default class AntenorScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.setAPupAboveInactiveSlickSlideInititalOpacity();
      this.setNoodPromoCardImageSize();
    };
    this.exec({ containerId, debugMode, func });
  }

  //A pup above
  //Set  inactive slick-slide intial opacity to 0
  private setAPupAboveInactiveSlickSlideInititalOpacity(): void {
    try {
      const nutrientSlickSlides = this.dom.querySelectorAll(
        ".nutrients__slide.slick-slide"
      ) as NodeListOf<HTMLElement>;

      nutrientSlickSlides.forEach((slide) => {
        const activeClasses = ["slick-current", "slick-active"];

        const isSlideActive = activeClasses.every((className) =>
          slide.classList.contains(className)
        );

        if (!isSlideActive) {
          slide.style.setProperty("opacity", "0");
        }
      });
    } catch (error) {}
  }

  //Nood

  private setNoodPromoCardImageSize(): void {
    try {
      const promoSlider = this.dom.querySelector(
        ".slide.slide-1.height--adapt.image-overlay.image-overlay--bg-full.slick-slide.slick-current.slick-active"
      ) as HTMLElement;

      console.log("promo", promoSlider);

      if (promoSlider) {
        promoSlider.style.setProperty("max-width", "100vw");

        const divWithBGImage = promoSlider.querySelector(
          ".rimage-outer-wrapper.mobile-only.fade-in.lazyloaded"
        ) as HTMLElement;

        if (divWithBGImage) {
          divWithBGImage.style.removeProperty("height");
        }
      }
    } catch (error) {}
  }
}
