import Common from "./Common";

export default class AntenorScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.aPupAboveScreenShotFixes();
      this.setNoodPromoCardImageSize();
      this.laBourseRemoveSearchBarOverlay();
      this.setSolaNewsletterFormDisplay();
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
      ) as HTMLElement | null;
      if (popUpElement) {
        popUpElement.style.setProperty("display", "none");
      }
    } catch (error) {}
  }

  private setAPupAboveProductSliderContainerHeight(): void {
    try {
      const sliderContainer = this.dom.querySelector(
        ".pdp-gallery.product-single__media-group.medium-up--one-half"
      ) as HTMLElement | null;
      if (sliderContainer) {
        this.setStylePropertyFromAttribute(
          sliderContainer,
          "height",
          "actualheight"
        );

        const sliderChildElementSelectors = [
          ".slick-list.draggable",
          ".product-single__media-slider.product-single__media-slider--mobile.slick-initialized.slick-slider",
        ];

        sliderChildElementSelectors.forEach((selector) => {
          const childElement = sliderContainer.querySelector(
            selector
          ) as HTMLElement | null;
          if (childElement)
            this.setStylePropertyFromAttribute(
              childElement,
              "height",
              "actualheight"
            );
        });
      }
    } catch (error) {}
  }

  //Nood
  private setNoodPromoCardImageSize() {
    try {
      const promoContainer = this.dom.querySelector(
        "#section-id-template--23090236653890__slideshow_MgChQG"
      ) as HTMLElement | null;

      if (promoContainer) {
        const promoSlider = promoContainer.querySelector(
          ".slide.slide-1.height--adapt.image-overlay.image-overlay--bg-full.slick-slide.slick-current.slick-active"
        ) as HTMLElement | null;

        if (promoSlider) {
          promoSlider.style.setProperty("max-width", "100vw");
          promoSlider.style.setProperty("height", "max-content");
        }

        const sliderChildrenSelectors = [
          ".rimage-outer-wrapper.mobile-only.fade-in.lazyloaded",
          ".slick-track",
          ".slick-list.draggable",
          ".slideshow.slideshow--navigation-none.slick-slider-overlay-dots-desktop.slick-slider-overlay-dots.slick-initialized.slick-slider",
        ];

        sliderChildrenSelectors.forEach((selector) => {
          const childElement = promoContainer.querySelector(
            selector
          ) as HTMLElement | null;

          if (childElement) {
            childElement.style.removeProperty("height");
          }
        });
      }
    } catch (error) {}
  }

  // La Bourse Aux Livres
  private laBourseRemoveSearchBarOverlay(): void {
    try {
      const searchBarForm = this.dom.querySelector(
        "form.lg\\:jc-relative.jc-group\\/search-form"
      ) as HTMLElement | null;

      if (searchBarForm) {
        const searchContentElement = searchBarForm.querySelector(
          ".js-searchbar-content"
        ) as HTMLElement | null;

        searchContentElement.style.setProperty("display", "none");
      }
    } catch (error) {}
  }

  //Solawave
  private setSolaNewsletterFormDisplay(): void {
    try {
      setInterval(() => {
        const formContainer = this.dom.querySelector(
          ".klaviyo-form-RnerNm.klaviyo-form.form-version-cid-1"
        ) as HTMLElement | null;

        if (formContainer) {
          formContainer.style.setProperty("display", "block");
        }
      }, 1000);
    } catch (error) {}
  }

  //Utils
  private setStylePropertyFromAttribute(
    element: HTMLElement,
    propertyName: string,
    attributeName: string,
    isImportant = false
  ): void {
    const attributeValue = element.getAttribute(attributeName);
    element.style.setProperty(
      propertyName,
      attributeValue,
      isImportant ? "important" : ""
    );
  }
}
