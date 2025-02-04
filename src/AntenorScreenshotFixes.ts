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
      this.laticoLeathersScreenShotFixes();
      // this.logOXScreenShotFixes();
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
            [
              ".boost-pfs-filter-wrapper-filter",
              ".boost-pfs-filter-tree-content",
            ].forEach((selector) => {
              const filterOverlayElement = sectionContainer.querySelector(
                selector
              ) as HTMLElement | null;
              if (filterOverlayElement) {
                if (filterOverlayElement.style.height) {
                  filterOverlayElement.style.removeProperty("height");
                }
              }
            });

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

  //Latico Leathers

  private laticoLeathersScreenShotFixes(): void {
    try {
      this.setLaticoLeathersReviewCarouselImageOverlayDisplay();
      this.setLaticoLeathersReviewOverlayHeight();
      this.setLaticoAfterPaySVGIconHeight();
    } catch (error) {}
  }

  private setLaticoLeathersReviewCarouselImageOverlayDisplay(): void {
    try {
      const reviewCarouselContainer = this.dom.querySelector(
        "#shopify-block-AYTBUNzNwdCt3dGFvT__28e3ba65-f3df-46ad-9b89-286449c44b5d"
      ) as HTMLElement | null;

      if (reviewCarouselContainer) {
        const carouselImageList = reviewCarouselContainer.querySelector(
          "ul.hooper-track"
        ) as HTMLElement | null;

        const imageOverlays = carouselImageList.querySelectorAll(
          ".oke-mediaOverlay.oke-okendoMediaCarousel-slide-overlay"
        ) as NodeListOf<HTMLElement>;

        imageOverlays.forEach((overlay) => {
          overlay.style.setProperty("display", "none");
        });
      }
    } catch (error) {}
  }

  private setLaticoLeathersReviewOverlayHeight(): void {
    try {
      const laticoBody = this.dom.querySelector("body#callie-sling-crossbody");
      if (laticoBody) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "childList" ||
              mutation.type === "attributes"
            ) {
              const overlayContainer = this.dom.querySelector(
                "#oke-modalContainer"
              ) as HTMLElement | null;
              if (overlayContainer) {
                const overlayDialog = overlayContainer.querySelector(
                  ".oke-modal-content"
                ) as HTMLElement | null;
                if (overlayDialog) {
                  overlayDialog.style.setProperty("height", "100%");
                }
              }
            }
          });
        });

        observer.observe(laticoBody, {
          childList: true,
          attributes: true,
          subtree: true,
        });
      }
    } catch (error) {}
  }

  private setLaticoAfterPaySVGIconHeight(): void {
    try {
      const productPurchasePaymentMethodsSection = this.dom.querySelector(
        ".payment-methods-text.ProductMeta__Text"
      ) as HTMLElement | null;
      if (productPurchasePaymentMethodsSection) {
        const iconContainer =
          productPurchasePaymentMethodsSection.querySelector(
            "span.afterpay-logo-link"
          ) as HTMLElement | null;
        if (iconContainer) {
          const svgRectElement = iconContainer.querySelector(
            "svg defs clipPath#clip0 rect"
          ) as HTMLElement | null;

          if (svgRectElement) {
            svgRectElement.style.removeProperty("height");
          }
        }
      }
    } catch (error) {}
  }

  //LogOX
  private logOXScreenShotFixes(): void {
    this.removeLogOXGetConnectedSectionSliderImagesMaxWidth();
    this.logOXAuthorizedRetailersSectionFixes();
    this.removeLogOXPaddingFromBrandsWeSellSection();
    this.setLogOXHeroVideoHeight();
  }

  private removeLogOXGetConnectedSectionSliderImagesMaxWidth(): void {
    try {
      const getConnectedSliderContainer = this.dom.querySelector(
        ".d-flex.flex-warp.connected_post.mb-md-0.mb-5.custom-instagram.slick-initialized.slick-slider"
      ) as HTMLElement | null;

      if (getConnectedSliderContainer) {
        //contain images
        // this.wrapWithObserver(
        //   getConnectedSliderContainer,
        //   () => {
        setInterval(() => {
          const anchorTags = getConnectedSliderContainer.querySelectorAll(
            "a.post_img.slick-slide"
          ) as NodeListOf<HTMLAnchorElement>;

          anchorTags.forEach((tag) => {
            tag.style.removeProperty("max-width");

            const linkImage = tag.querySelector(
              "img"
            ) as HTMLImageElement | null;

            if (linkImage) {
              linkImage.style.removeProperty("height");
            }
          });
        }, 500);
        //   },
        //   ["attributes", "childList"]
        // );
      }
    } catch (error) {}
  }

  private logOXAuthorizedRetailersSectionFixes(): void {
    try {
      const authorizedRetailersSection = this.dom.querySelector(
        "#shopify-section-template--16879726100566__fbde8f8f-d63e-4c78-aa9c-7ae6106764e2"
      ) as HTMLElement | null;

      if (authorizedRetailersSection) {
        this.wrapWithObserver(
          authorizedRetailersSection,

          () => {
            const bgImage = authorizedRetailersSection.querySelector(
              "img.bg-img"
            ) as HTMLImageElement | null;

            if (bgImage) {
              bgImage.style.removeProperty("height");
              bgImage.style.removeProperty("width");
            }

            //logo list images fix
            const logoSliderList = this.dom.querySelectorAll(
              ".logo-list-img.slick-slide"
            ) as NodeListOf<HTMLElement>;
            console.log("slides", logoSliderList);
            logoSliderList.forEach((logoSlider) => {
              logoSlider.style.removeProperty("min-height");
              logoSlider.style.removeProperty("max-width");

              const logoSliderImage = logoSlider.querySelector(
                "img"
              ) as HTMLImageElement | null;

              if (logoSliderImage) {
                logoSliderImage.style.removeProperty("width");
              }
            });
          },
          ["attributes", "childList"]
        );
      }
    } catch (error) {}
  }

  private removeLogOXPaddingFromBrandsWeSellSection(): void {
    try {
      const brandsWeSellSection = this.dom.querySelector(
        "#shopify-section-template--16879726100566__03ab1527-a9a3-4dcf-a02a-e817632ef113"
      ) as HTMLElement | null;

      // const observer = new MutationObserver((mutations) => {
      //   mutations.forEach((mutation) => {
      //     if (mutation.type === "childList" || mutation.type === "attributes") {
      //       const proudToSellContainer = brandsWeSellSection.querySelector(
      //         ".proud-to-sell.position-relative"
      //       ) as HTMLElement | null;
      //       if (proudToSellContainer) {
      //         proudToSellContainer.style.removeProperty("padding-top");
      //       }
      //     }
      //   });
      // });
      if (brandsWeSellSection) {
        this.wrapWithObserver(
          brandsWeSellSection,
          () => {
            const proudToSellContainer = brandsWeSellSection.querySelector(
              ".proud-to-sell.position-relative"
            ) as HTMLElement | null;
            if (proudToSellContainer) {
              proudToSellContainer.style.removeProperty("padding-top");
            }
          },
          ["attributes", "childList"]
        );
        // observer.observe(brandsWeSellSection, {
        //   childList: true,
        //   subtree: true,
        //   attributes: true,
        // });
      }
    } catch (error) {}
  }

  private setLogOXHeroVideoHeight(): void {
    try {
      const heroSection = this.dom.querySelector(
        "#shopify-section-template--16879726100566__main"
      ) as HTMLElement | null;

      if (heroSection) {
        const videoContainer = heroSection.querySelector(
          ".custom-video-container.full-video-layout.header-video-slide.swiper-slide.slide-video_slide_pWKJrq.slick-slide.w3_bg"
        ) as HTMLElement | null;

        if (videoContainer) {
          //remove m
          this.setStylePropertyFromAttribute(
            videoContainer,
            "height",
            "actualheight",
            true
          );

          const selectors = [
            "custom-video.video-with--text.position-relative.d-block.w-100.h-100.placement--grid",
            ".content-section.w3_bg",
            ".poster-image.w3_bg",
            "video.h-100.w-100",
          ];

          selectors.forEach((selector) => {
            const element = videoContainer.querySelector(
              selector
            ) as HTMLElement | null;

            if (element) {
              element.style.removeProperty("height");
            }
          });
        }
      }
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

  private wrapWithObserver(
    elementToObserver: HTMLElement,
    callback: Function,
    mutationTypes?: MutationRecordType[],
    mutationTargets?: Node[]
  ): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          (!mutationTypes || mutationTypes.includes(mutation.type)) &&
          (!mutationTargets || mutationTargets.includes(mutation.target))
        ) {
          callback();
        }
      });
    });

    observer.observe(elementToObserver, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
}
