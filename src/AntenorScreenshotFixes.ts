import Common from "./Common";

export default class AntenorScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.aPupAboveScreenShotFixes();
      this.setNoodPromoCardImageSize();
      this.laBourseRemoveSearchBarOverlay();
    };
    this.exec({ containerId, debugMode, func });
  }

  //A pup above
  private aPupAboveScreenShotFixes(): void {
    try {
      this.setAPupAboveInactiveSlickSlideInititalOpacity();
      this.removeAPupAboveNutrientPopUp();
      this.setAPupAboveProductSliderContainerHeight();
    } catch (error) {}
  }
  private setAPupAboveInactiveSlickSlideInititalOpacity(): void {
    try {
      setInterval(() => {
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
      }, 1000);
    } catch (error) {}
  }

  private removeAPupAboveNutrientPopUp(): void {
    try {
      const popUpElement = this.dom.querySelector(
        "#mobile-nutrient-pop-up"
      ) as HTMLElement;
      if (popUpElement) {
        popUpElement.style.setProperty("display", "none");
      }
    } catch (error) {}
  }

  private setAPupAboveProductSliderContainerHeight(): void {
    try {
      const sliderContainer = this.dom.querySelector(
        ".pdp-gallery.product-single__media-group.medium-up--one-half"
      ) as HTMLElement;
      if (sliderContainer) {
        const actualHeight = sliderContainer.getAttribute("actualheight");
        sliderContainer.style.setProperty("height", actualHeight);
      }
    } catch (error) {}
  }

  //Nood
  private setNoodPromoCardImageSize() {
    try {
      const promoSlider = this.dom.querySelector(
        ".slide.slide-1.height--adapt.image-overlay.image-overlay--bg-full.slick-slide.slick-current.slick-active"
      ) as HTMLElement;

      if (promoSlider) {
        promoSlider.style.setProperty("max-width", "100vw");
        promoSlider.style.setProperty("height", "max-content");

        const divWithBGImage = promoSlider.querySelector(
          ".rimage-outer-wrapper.mobile-only.fade-in.lazyloaded"
        ) as HTMLElement;

        if (divWithBGImage) {
          divWithBGImage.style.removeProperty("height");
        }
      }
    } catch (error) {}
  }

  // La Bourse Aux Livres
  private laBourseRemoveSearchBarOverlay(): void {
    try {
      const searchBarForm = this.dom.querySelector(
        "form.lg\\:jc-relative.jc-group\\/search-form"
      ) as HTMLElement;

      if (searchBarForm) {
        const searchContentElement = searchBarForm.querySelector(
          ".js-searchbar-content"
        ) as HTMLElement;

        searchContentElement.style.setProperty("display", "none");
      }
    } catch (error) {}
  }
}
