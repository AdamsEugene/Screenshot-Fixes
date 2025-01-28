import Common from "./Common";

export default class AntenorScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.aPupAboveScreenShotFixes();
      this.setNoodPromoCardImageSize();
      this.laBourseRemoveSearchBarOverlay();
      this.setSolaNewsletterFormDisplay();
      this.setBestBlockElementDisplay();
      this.otaaScreenShotFixes();
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
        "#shopify-section-template--23090236653890__slideshow_MgChQG"
      ) as HTMLElement | null;

      if (promoContainer) {
        promoContainer.style.removeProperty("height");
        const containerParent = promoContainer.parentElement;
        if (containerParent) {
          containerParent.style.removeProperty("height");
        }

        const promoSlider = promoContainer.querySelector(
          ".slide.slide-1.height--adapt.image-overlay.image-overlay--bg-full.slick-slide.slick-current.slick-active"
        ) as HTMLElement | null;

        if (promoSlider) {
          promoSlider.style.setProperty("max-width", "100vw");
          promoSlider.style.removeProperty("height");
        }

        const sliderChildrenSelectors = [
          ".rimage-outer-wrapper.mobile-only.fade-in.lazyloaded",
          ".slick-track",
          ".slick-list.draggable",
          ".slideshow.slideshow--navigation-none.slick-slider-overlay-dots-desktop.slick-slider-overlay-dots.slick-initialized.slick-slider",
          "#section-id-template--23090236653890__slideshow_MgChQG",
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

  private setBestBlockElementDisplay(): void {
    try {
      //clone element on page init to keep track of styles
      const syncStyles = (root: HTMLElement, copy: HTMLElement) => {
        const originalDisplayStyleValue =
          copy.style.getPropertyValue("display");

        const updatedDisplayStyleValue = root.style.getPropertyValue("display");

        if (updatedDisplayStyleValue !== originalDisplayStyleValue) {
          root.style.setProperty(
            "display",
            originalDisplayStyleValue,
            "important"
          );
        }

        const rootChildren = root.children;
        const copyChildren = copy.children;

        if (rootChildren.length === copyChildren.length) {
          for (let i = 0; i < rootChildren.length; i++) {
            const rootChild = rootChildren[i] as HTMLElement;
            const copyChild = copyChildren[i] as HTMLElement;

            syncStyles(rootChild, copyChild);
          }
        }
      };

      const rootElement = this.dom.querySelector(
        ".n2-section-smartslider.fitvidsignore.n2_clear"
      ) as HTMLElement | null;

      const rootElementClone = rootElement.cloneNode(true) as HTMLElement;

      if (rootElement) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" ||
              mutation.type === "childList"
            ) {
              syncStyles(rootElement, rootElementClone);
            }
          });
        });

        observer.observe(rootElement, {
          attributes: true,
          childList: true,
          subtree: true,
        });
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

  //Otaa

  private otaaScreenShotFixes(): void {
    try {
      const sectionContainer = this.dom.querySelector(
        "#shopify-section-collection-template-boost-pfs-filter"
      ) as HTMLElement | null;

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "attributes" || mutation.type === "childList") {
            this.fixOtaaFilterOptionsSize(sectionContainer);
            this.setOtaaSortIconOpacity(sectionContainer);
          }
        });
      });

      observer.observe(sectionContainer, {
        subtree: true,
        attributes: true,
        childList: true,
      });
    } catch (error) {}
  }
  private setOtaaSortIconOpacity(sectionContainer: HTMLElement): void {
    try {
      const filterOverlayContainer = sectionContainer.querySelector(
        ".boost-pfs-filter-wrapper"
      );

      if (filterOverlayContainer) {
        const sortIconContainer = filterOverlayContainer.querySelector(
          ".custom_mobile_filters_sort"
        ) as HTMLElement | null;

        const isOverlayActive =
          filterOverlayContainer.classList.contains("main_filter_div");
        if (sortIconContainer) {
          sortIconContainer.style.setProperty(
            "opacity",
            isOverlayActive ? "0" : "1"
          );
        }
      }
    } catch (error) {}
  }
  private fixOtaaFilterOptionsSize(sectionContainer: HTMLElement): void {
    try {
      const filterOptionsContainer = sectionContainer.querySelector(
        ".boost-pfs-filter-options-wrapper"
      ) as HTMLElement | null;

      const filterOptions = filterOptionsContainer.querySelectorAll(
        ".boost-pfs-filter-option.boost-pfs-filter-option-list.boost-pfs-filter-no-scrollbar.boost-pfs-filter-option-column-1"
      ) as NodeListOf<HTMLElement>;

      filterOptions.forEach((option) => {
        option.style.removeProperty("height");
      });
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
