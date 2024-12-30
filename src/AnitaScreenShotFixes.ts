export default class AnitaScreenShotFixes {
  private document: Document;
  private prodMode: boolean;

  constructor(dom: Document = document) {
    this.document = dom;
    this.prodMode = this.getRedirectType() === "dashboard";
    this.setupLoadEventListener();
  }

  private setupLoadEventListener(): void {
    window.addEventListener("load", () => {
      this.init();
    });
  }

  public init(): void {
    this.log("Initializing AnitaScreenShotFixes...");
    if (this.prodMode) {
      this.log("Running in production mode");
    } else {
      this.log("Running in non-production mode");
    }

    this.removeHeightProperty();
    this.setTransparentBackground();
    this.setMobileMenuZIndexAndPosition();
    this.hideSearchForm();
    this.disableFlexOnMobileMenuBody();
    this.showGlobalOverlay();
    this.removeFixedPositionFromHeader();
    this.makeBackdropTransparent();
    this.setDisplayToBlock();
    this.setOpacityToHeroSideBySide();
    this.removeFixedPositionFromHeaderBedsite();
    this.removeMinHeightAndOverflow();
    this.removeDisplayNone();
    this.setStyleToRecommendationModal();
    this.rdImasetOpacityToProductCages();
    // this.setDisplayToBlockFulton();
    this.setDisplayToBlockForKachingBundles();
    this.removeAllInlineStylesFromMegaMenuWithDelay();
    this.updateHeightForSpecificElement();
    this.removeMarginTopFromContent();
    this.removePositionFromShopifySectionEleat();
    this.updatePositionForShopifyHeaderELEAT();
    this.removeDisplayFromCartAsideELEAT();
    this.removeStylesFromPromoCardsAndParentKHAITE();
    this.removePositionFromHeaderElementKHT();
    this.hideAgeVerifierPopupEsafety();
    this.setDrawerBackgroundTransparentNurosym();
    this.hideAnnouncementHeaderBedsrus();
    this.removeMarginTopFromParentOfHomepageHeroUNDERDOG();
    this.removeInlineStylesFromFigureSquareSwiperSlide();
    this.removeInlineStylesFromSwiperSlideImage();
    this.hideContainerPdpLightboxContentContainer();
    this.removeInlineStylesFromSlideshowSlideFlakon();
    this.removeMarginTopFromSiblingOfFooterkhaite();
    this.removeInlineStylesFromOwlStageBedrus();
    this.setWidthForOwlItemWithAncestorBLACK();
    this.removeAllInlineStylesSAYA();
    this.removeInlineCssFromWidgetHeaderAKT();
    this.removeAllInlineStylesFromElementsHEDERA();
    this.removeWidthFromElementNerd();
    this.removeFormWidthFromNewsletterElementSAYA();
    this.removeInlineStylesFromAnnouncementSwiperSlideEVERYDAYDOSE();
    this.removeDisplayFromSpacerElementsCEDIA();
    this.removeHeightFromLookImageElementsGOBI();
    this.removeHeightFromHeaderMenuKHAITE();
    this.removeBackgroundFromSidebarContainerinfiniteicon();
    this.removeInlineStylesFromSwiperElementALBION();
    this.removeDisplayNoneFromDescendantsOBVI();
    this.updateSvgElementsInsideDecorCEDIA();
    this.updateStylesForSecondImageInProductFiguresHAPPYDAD();
    this.removeDisplayNoneFromNestedElementsANDIE();
    this.removeDisplayNoneFromNestedElementsBreeo();
    this.removeInlineStylesFromBannerContent();
    this.updateDisplayForNestedElementsAMIE();
    this.updateImageStyleForBannerOMG();
    this.updateVisibilityForShowOnScrollElementsEMERY();
    this.updateHomepageVideoPlayButtonDisplayEMERY();
    this.updateIframeDisplayInEmbedContainerEMERY();
    this.removeWidthFromProductImageCarouselItemsEMERY();
    this.updateBannerMediaImageStylesOMG();
    this.setDisplayBlockForRowElementsADDISON();
    this.setMaxWidthForColorElementsADDISON();
    this.setMaxWidthForSpecificColorElementsADDISON();
    this.updateSecondSiblingPositionSMEL();
    this.hideAllScalapayModals();
    this.updateDrawerMenuDisplayNuBest();
    this.hideJstIframeElementNuBest();
    this.updateDescendantsDisplayAmie();
    this.updateHeaderSectionChildrenDisplayEXCISION();
    this.updateMenuDrawerAndInnerHeightEXCISION();
    this.removeInlineStylesFromCurrencySwitcherChildWUNutrition();
    this.removeInlineStylesFromImageswonderpaws();
    this.removeAfterPseudoFromHomeSliderAncestral();
    this.removeWidthPropertiesFromSwiperSlidessullen();
    this.removeWidthPropertiesFromSwiperSlidesRIO();
    this.hideElementWithClassBGT4X4();
    this.setHeaderToFlexMYSTICBARRELS();
    this.removeInlineStylesFromElementOCTO();
    this.removeInlineStylesFASTTRAC();
    this.setVisibilityForElementFastTrac();
    this.hideInsertedStarContainersFastTrac();
    this.setWidthForMobileMenuReviewMysticBarrels();
    this.removeInlineStylesFromMenuDrawerZBioticz();
    this.removeMarginFromAncestorOATFUL();
    this.removeInlineStylesFromWhiteLogoMcAffe();
    this.hideCartPopupSectionFuego();
    this.testMenuDrawerzorali();
    this.setPositionRelativeTanitco();
    this.removeOpacityFromFlickityDescendantsTanitco();
    this.removeDisplayFromChildBUDMOTHER();
    this.hideMultipleFeaturedCollectionsBUDMOTHER();
    this.setSvgStylesForSliderSNAX();
    this.hidePrevArrowSNAX();
    this.setArrowsStyleSNAX();
    this.setArrowsStyleSnaxNAVdots();
    this.monitorPaginationDotsSNAXDOTS();
    this.stylePaginationAndChildrenSNAX();
    this.removeInlineStylesFromSidebarNOVA();
    this.removeDisplayFromHeaderOPULIZE();
    this.setVisibilityOnChildFastTRAC();
    this.setVisibilityOnSpecificChildfasttrac();
    this.hideSubNavElementsBentgo();
    this.observeNutrientsSlideOpacityAPupAbove();
    this.removeInlineStylesFromChildBreeo();
    // this.setupMobileNavToggleBentgo();
    this.removeInlineCssFromSecondDivChildHelloSilky();
    this.setAuthorAvatarImageStylesTalktheTalk();
    this.removeInlineOpacityFromVideoModalHELLOSILKY();
    this.removeInlineCssFromSectionTalktheTalk();
    this.removeInlineHeightFromImageTalktheTalk();
    this.removeInlineLeftStyleIfHasChildNova();
    this.removeInlineHeightFromMobileMenuBALANCE();
    // this.setDisplayBlockForClosedStateDescendantsSupply();
    this.hideMediaOverlaysKotomi();
    this.removeInlineStylesFromMediaElementsKotomi();
    this.setDisplayBlockForClosedStateDescendantsSupply1();
    this.observeAndRemoveInlineOpacityNAALI();
    this.reloadLazyImagesSourplus();
    this.removeInlineHeightAndWidthSourplus();
    this.goToFirstSlideDRWOOLF();
    this.removeMinHeightInlineStylesNAALI();
    this.setDisplayToBlockForWidgetEarthFlow();
    this.removeBeforeContentFromBannerCURATEDchrome();
    this.hideMobileHeaderSectionCuratedChrome();
    this.setGradientDisplayToBlockFourth();
    this.adjustVerifiedBadgeWidthLittleCuriousMinds();
    this.showCustomStickyAtcAerify();
    this.removeInlineStylesKarambit();
    this.setSlickTrackWidthKarambit();
    this.removeWidthFromObjfitKarambit();
    this.removeDisplayNoneFromSiteHeaderOffsetDryrobe();
    this.removeWidthFromImgFluidWithAncestorNutriseed();
    this.removeWidthFromImagesNUTRISEED();
    this.setMinHeightForElementBARLEYBUS();
    this.setMinHeightForSpecificElementBARLEYBUS();
    this.removeInlineCSSFromOverlayWithParentBarleyBus();
  }

  private log(message: string, ...optionalParams: any[]): void {
    if (!this.prodMode) {
    }
  }

  private getRedirectType(): "dashboard" | "locala" | "deves" | "dever" {
    const url = new URL(window.location.href);
    const hostname = url.hostname;
    if (hostname.includes("localhost")) return "locala";
    if (hostname.includes("dashboard")) return "dashboard";
    if (hostname.includes("early-release")) return "dever";
    if (hostname.includes("earlystage")) return "deves";
    return "dashboard";
  }

  private removeHeightProperty() {
    const mobileNav = this.document.querySelector(
      "mobile-navigation"
    ) as HTMLElement;

    this.log("Checking for mobile navigation element...", mobileNav);

    if (
      mobileNav?.classList.contains("drawer") &&
      mobileNav.classList.contains("drawer--from-left") &&
      mobileNav.id === "mobile-menu-drawer"
    ) {
      mobileNav.style.setProperty("height", "", "important");
      this.log("Removed height property from mobile navigation.");
    }
  }

  private setTransparentBackground(): void {
    const element = this.document.querySelector(
      "#product-hero-7"
    ) as HTMLElement;

    this.log("Checking for product hero element...", element);

    if (
      element &&
      element.classList.contains("comp-lightbox") &&
      element.classList.contains("is-video") &&
      element.classList.contains("product-image")
    ) {
      element.style.setProperty("background", "transparent", "important");
      this.log("Set transparent background for product hero.");
    }
  }

  private setMobileMenuZIndexAndPosition(): void {
    const element = this.document.querySelector(
      "nav.global-header__mobile-menu__content"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("z-index", "2", "important");
      element.style.setProperty("position", "relative", "important");
    }
  }

  private hideSearchForm(): void {
    const element = this.document.querySelector(
      "form.comp-search.cr-white"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("display", "none", "important");
    }
  }

  private disableFlexOnMobileMenuBody(): void {
    const parentElement = this.document.querySelector(
      ".global-header__mobile-menu.min-safe-h-screen.f-v.g-gap-3.cr-white.bg-green-main.tablet-down-only"
    ) as HTMLElement;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".global-header__mobile-menu__body"
      ) as HTMLElement;
      if (childElement) {
        childElement.style.setProperty("flex", "none", "important");
      }
    }
  }

  private showGlobalOverlay(): void {
    const element = this.document.querySelector(
      ".global-overlay.p-fill.js-dropdown-menu-close.js-mobile-menu-close"
    ) as HTMLElement;

    if (element && element.style.display === "none") {
      element.style.setProperty("display", "block", "important");
    }
  }
  private removeFixedPositionFromHeader(): void {
    const headerElement = this.document.getElementById(
      "shopify-section-header"
    ) as HTMLElement;

    if (headerElement) {
      const isShopifySection =
        headerElement.classList.contains("shopify-section");

      if (isShopifySection) {
        headerElement.style.removeProperty("position");
      }
    }
  }

  private makeBackdropTransparent(): void {
    const element = this.document.querySelector(
      "body.product-mc-modified .recommendation-modal__backdrop"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("background", "transparent", "important");
    }
  }

  private setDisplayToBlock(): void {
    const blockElement = this.document.getElementById(
      "shopify-block-jebbit_product_quiz_builder_jebbit_campaign_url_7xczVR"
    ) as HTMLElement;

    if (
      blockElement &&
      blockElement.classList.contains("shopify-block") &&
      blockElement.classList.contains("shopify-app-block")
    ) {
      blockElement.style.setProperty("display", "block", "important");
    }

    const iframeElement = this.document.querySelector(
      "iframe.jebbit-iframe"
    ) as HTMLElement;

    if (iframeElement) {
      iframeElement.style.setProperty("display", "block", "important");
    }
  }
  private setOpacityToHeroSideBySide(): void {
    const parentElement = this.document.querySelector(
      ".slideshow__slide.slideshow__slide--slideshow-split2-0.is-selected"
    ) as HTMLElement;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".hero__sidebyside.hero__sidebyside-text--left.color-scheme-2"
      ) as HTMLElement;

      if (childElement) {
        childElement.style.opacity = "1";
      }
    }
  }

  private removeFixedPositionFromHeaderBedsite(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "shopify-section-header"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("shopify-section") &&
        element.classList.contains("section-header")
      ) {
        element.style.setProperty("position", "static", "important");
        element.style.removeProperty("position");
      }
    }, 100);
  }
  private removeMinHeightAndOverflow(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "gp-carousel-ft-gp-carousel-gKJd-U6nmQ-template--17982265458943__gp_section_523067330180154432-7635732070655-template--17982265458943__gp_section_523067330180154432"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("gem-slider") &&
        element.classList.contains("gp-h-full") &&
        element.classList.contains("gp-overflow-hidden") &&
        element.classList.contains("gp-select-none") &&
        element.classList.contains("mobile:!gp-flex-nowrap") &&
        element.classList.contains("tablet:!gp-flex-nowrap") &&
        element.classList.contains("!gp-flex-nowrap") &&
        element.classList.contains("mobile:!gp-min-h-full") &&
        element.classList.contains("tablet:!gp-min-h-full") &&
        element.classList.contains("!gp-min-h-full")
      ) {
        element.style.removeProperty("min-height");
        element.style.removeProperty("overflow");
      }
    }, 100);
  }

  private removeDisplayNone(): void {
    setTimeout(() => {
      const element = this.document.querySelector(
        ".gp-items-center.gp-justify-center.gp-gap-2.gp-text-center.gp-carousel-dot-container.gp-carousel-dot-container-ft-gp-carousel-gKJd-U6nmQ-template--17982265458943__gp_section_523067330180154432-7635732070655-template--17982265458943__gp_section_523067330180154432.gp-static.gp-flex-row.gp-left-0.gp-right-0.tablet\\:gp-static.tablet\\:gp-flex-row.tablet\\:gp-left-0.tablet\\:gp-right-0.mobile\\:gp-static.mobile\\:gp-flex-row.mobile\\:gp-left-0.mobile\\:gp-right-0"
      ) as HTMLElement;

      if (element) {
        element.style.removeProperty("display");
      }
    }, 100);
  }
  private setStyleToRecommendationModal(): void {
    const bodyElement = this.document.querySelector(
      "body.gradient.template-index"
    ) as HTMLElement;

    if (bodyElement) {
      const containerElement = bodyElement.querySelector(
        ".recommendation-modal__container"
      ) as HTMLElement;

      if (containerElement) {
        containerElement.style.setProperty("display", "block", "important");
      }
    }
  }
  private rdImasetOpacityToProductCages(): void {
    setTimeout(() => {
      const imageElements = this.document.querySelectorAll(
        ".product-card__image.product-card__image--secondary"
      ) as NodeListOf<HTMLElement>;

      imageElements.forEach((element) => {
        element.style.setProperty("opacity", "0", "important");
      });
    }, 100);
  }
  // private setDisplayToBlockFulton(): void {
  //   setTimeout(() => {
  //     const parentElement = this.document.getElementById(
  //       "shopify-section-layout-header"
  //     ) as HTMLElement;

  //     if (parentElement) {
  //       const targetElement = parentElement.children[1] as HTMLElement;

  //       if (targetElement) {
  //         targetElement.style.setProperty("display", "block", "important");
  //       }
  //     }
  //   }, 100);
  // }

  private setDisplayToBlockForKachingBundles(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".kaching-bundles__bar-radio"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        if (element.style.display === "none") {
          element.style.setProperty("display", "block", "important");
        }
      });
    }, 100);
  }
  private removeAllInlineStylesFromMegaMenuWithDelay(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".viair-header-mega-menu"
      ) as NodeListOf<HTMLElement>;

      if (elements.length === 0) {
        return;
      }

      elements.forEach((element, index) => {
        element.removeAttribute("style");
      });
    }, 1000);
  }

  private updateHeightForSpecificElement(): void {
    setTimeout(() => {
      let element = this.document.querySelector(
        '.r-4wlhl5[data-rid="0623162f-5f5e-4f4c-9c7e-f50d1df9f84b"]'
      ) as HTMLElement;

      if (!element) {
        element = this.document.querySelector(
          '[data-rid="0623162f-5f5e-4f4c-9c7e-f50d1df9f84b"]'
        ) as HTMLElement;

        if (!element) {
          element = this.document.querySelector(".r-4wlhl5") as HTMLElement;
        }
      }

      if (element) {
        if (element.style.height === "max-content") {
          element.style.removeProperty("height");
        }

        element.style.setProperty("height", "12vh", "important");
      }
    }, 1000);
  }
  private removeMarginTopFromContent(): void {
    const element = this.document.querySelector(
      ".content-for-layout.focus-none"
    ) as HTMLElement;

    if (element) {
      element.style.removeProperty("margin-top");
    }
  }
  private removePositionFromShopifySectionEleat(): void {
    const element = this.document.getElementById(
      "shopify-section-header"
    ) as HTMLElement;

    if (element) {
      if (
        element.classList.contains("shopify-section") &&
        element.classList.contains("sticky") &&
        element.classList.contains("top-0") &&
        element.classList.contains("z-header")
      ) {
        element.style.removeProperty("position");
      }
    }
  }

  private updatePositionForShopifyHeaderELEAT(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "shopify-section-header"
      ) as HTMLElement;

      if (element) {
        const parentElement = element.parentElement;

        if (
          parentElement &&
          parentElement.classList.contains("bg-white") &&
          parentElement.classList.contains("font-gimlet") &&
          parentElement.classList.contains("text-base") &&
          parentElement.classList.contains("text-black") &&
          parentElement.tagName.toLowerCase() === "body"
        ) {
          if (element.style.position) {
            element.style.removeProperty("position");
          }
          element.style.setProperty("position", "relative", "important");
        }
      }
    }, 1000);
  }

  private removeDisplayFromCartAsideELEAT(): void {
    const element = this.document.getElementById(
      "shopify-section-cart-aside"
    ) as HTMLElement;

    if (
      element &&
      element.classList.contains("shopify-section") &&
      element.classList.contains("cart-aside")
    ) {
      element.style.removeProperty("display");
    }
  }
  private setWidthForOwlItemWithAncestorBLACK(): void {
    const elements = this.document.querySelectorAll(
      ".gradient.gempage .owl-item"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.setProperty("width", "1512px", "important");
    });
  }

  private updatePromoCardsAndParentStylesKHAITE(): void {
    const element = this.document.getElementById(
      "shopify-section-template--15516159377471__hero_banner_GWHzkd"
    ) as HTMLElement;

    if (element) {
      const parent = element.closest(
        "#MainContent.main-content"
      ) as HTMLElement;
      if (parent) {
        parent.style.setProperty("margin-top", "0", "important");
        parent.style.setProperty("height", "auto", "important");
      }
    }
    const promoCardElements = this.document.querySelectorAll(
      ".collection-promo-card__media"
    ) as NodeListOf<HTMLElement>;

    promoCardElements.forEach((element) => {
      element.style.removeProperty("height");
      element.style.removeProperty("width");
    });
  }
  private removeStylesFromPromoCardsAndParentKHAITE(): void {
    const heroBannerElement = this.document.getElementById(
      "shopify-section-template--15516159377471__hero_banner_GWHzkd"
    ) as HTMLElement;

    if (heroBannerElement) {
      const parent = heroBannerElement.closest(
        "#MainContent.main-content"
      ) as HTMLElement;
      if (parent) {
        parent.style.setProperty("margin-top", "0", "important");
        parent.style.setProperty("height", "auto", "important");
      }
    }

    const promoCardElements = this.document.querySelectorAll(
      ".collection-promo-card__media"
    ) as NodeListOf<HTMLElement>;

    promoCardElements.forEach((element) => {
      element.style.removeProperty("height");
      element.style.removeProperty("width");
    });
    setTimeout(() => {
      promoCardElements.forEach((element) => {
        element.removeAttribute("style");
      });
    }, 1000);
  }
  private removePositionFromHeaderElementKHT(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "shopify-section-header"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("shopify-section") &&
        element.classList.contains("header-section") &&
        element.classList.contains("header--ontop")
      ) {
        const ancestor = element.closest(
          "#khaite-official-website"
        ) as HTMLElement;

        if (ancestor) {
          element.style.removeProperty("position");
        }
      }
    }, 1000);
  }
  private hideAgeVerifierPopupEsafety(): void {
    const element = this.document.getElementById(
      "shopify-section-sections--16673528938664__age-verifier-popup"
    ) as HTMLElement;

    if (
      element &&
      element.classList.contains("shopify-section") &&
      element.classList.contains("shopify-section-group-footer-group")
    ) {
      element.style.setProperty("display", "none", "important");
    }
  }
  private setDrawerBackgroundTransparentNurosym(): void {
    const elements = this.document.querySelectorAll(
      ".lang-drawer, .menu-drawer"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.setProperty("background-color", "transparent", "important");
    });
  }

  private hideAnnouncementHeaderBedsrus(): void {
    const element = this.document.getElementById(
      "shopify-section-announcement-header"
    ) as HTMLElement;

    if (element && element.classList.contains("shopify-section")) {
      element.style.display = "none";
    }
  }
  private removeMarginTopFromParentOfHomepageHeroUNDERDOG(): void {
    const element = this.document.getElementById(
      "shopify-section-homepage_hero_C4eetH"
    ) as HTMLElement | null;

    if (element && element.classList.contains("shopify-section")) {
      const parent = element.parentElement as HTMLElement | null;

      if (parent && parent.style.marginTop) {
        parent.style.removeProperty("margin-top");
      }
    }
  }
  private removeInlineStylesFromFigureSquareSwiperSlide(): void {
    const elements = this.document.querySelectorAll(
      ".figure--square.swiper-slide"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.removeAttribute("style");
    });
  }

  private removeInlineStylesFromSwiperSlideImage(): void {
    const elements = this.document.querySelectorAll(
      ".swiper-slide.image"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.removeAttribute("style");
    });
  }

  private hideContainerPdpLightboxContentContainer(): void {
    const elements = this.document.querySelectorAll(
      ".container.pdp-lightbox__content-container"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.display = "none";
    });
  }
  private removeInlineStylesFromSlideshowSlideFlakon(): void {
    const elements = this.document.querySelectorAll(
      ".slideshow__slide"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      const ancestor = element.closest(
        "#Slideshow-template--19990696919368__slideshow"
      ) as HTMLElement | null;

      if (
        ancestor &&
        ancestor.classList.contains("hero") &&
        ancestor.classList.contains("hero--100vh") &&
        ancestor.classList.contains(
          "hero--template--19990696919368__slideshow"
        ) &&
        ancestor.classList.contains("hero--mobile--100vh") &&
        ancestor.classList.contains("loaded") &&
        ancestor.classList.contains("flickity-enabled") &&
        ancestor.classList.contains("is-draggable") &&
        ancestor.classList.contains("is-fade")
      ) {
        element.style.removeProperty("width");
        element.style.removeProperty("height");
        element.style.removeProperty("overflow");
      }
    });
  }
  private removeMarginTopFromSiblingOfFooterkhaite(): void {
    const element = this.document.getElementById(
      "shopify-section-footer"
    ) as HTMLElement | null;

    if (element && element.classList.contains("shopify-section")) {
      const previousSibling =
        element.previousElementSibling as HTMLElement | null;

      if (previousSibling && previousSibling.style.marginTop) {
        previousSibling.style.removeProperty("margin-top");
      }
    }
  }
  private removeInlineStylesFromOwlStageBedrus(): void {
    const elements = this.document.querySelectorAll(
      ".owl-stage"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      const ancestor = element.closest(
        "#shopify-section-announcement-bar"
      ) as HTMLElement | null;

      if (ancestor) {
        element.removeAttribute("style");
      }
    });
  }
  private removeAllInlineStylesSAYA(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "t4s-menu-drawer"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("t4s-drawer") &&
        element.classList.contains("sidenavwidth") &&
        element.classList.contains("t4s-drawer__left")
      ) {
        element.removeAttribute("style");
      }
    }, 2000);
  }

  private removeInlineCssFromWidgetHeaderAKT(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "widget-header"
      ) as HTMLElement;

      if (
        element &&
        element.classList.contains("starter-offer") &&
        element.classList.contains("swiper-initialized") &&
        element.classList.contains("swiper-horizontal") &&
        element.classList.contains("swiper-css-mode")
      ) {
        element.removeAttribute("style");
      }
    }, 1000);
  }

  private removeAllInlineStylesFromElementsHEDERA(): void {
    const elements = this.document.querySelectorAll(
      ".jdgm-rev.jdgm-divider-top.jdgm--done-setup.jdgm--leex-done-setup"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.removeAttribute("style");
    });
  }
  private removeWidthFromElementNerd(): void {
    const element = this.document.querySelector(
      ".row.single-top-padding.single-bottom-padding.no-h-padding.limit-width.row-parent"
    ) as HTMLElement;

    if (element) {
      element.style.removeProperty("width");
    }
  }
  private removeFormWidthFromNewsletterElementSAYA(): void {
    const element = this.document.querySelector(
      ".t4s-newsletter-parent.t4s_newsletter_se.t4s-newsl-des-1.t4s-newsl-small.t4s-text-start.t4s-hidden-mobile-false"
    ) as HTMLElement;

    if (element) {
      element.style.removeProperty("--form-width");
    }
  }
  private removeInlineStylesFromAnnouncementSwiperSlideEVERYDAYDOSE(): void {
    const elements = this.document.querySelectorAll(
      ".announcementSwiperSlide.swiper-slide"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.removeProperty("width");
      element.style.removeProperty("max-width");
      element.style.removeProperty("min-width");
    });
  }
  private removeDisplayFromSpacerElementsCEDIA(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".spacer"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        element.style.removeProperty("display");
      });
    }, 2000);
  }

  private removeHeightFromLookImageElementsGOBI(): void {
    const elements = this.document.querySelectorAll(
      ".look__image.look__image--fullheight"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.removeProperty("height");
    });
  }
  private removeHeightFromHeaderMenuKHAITE(): void {
    setTimeout(() => {
      const element = this.document.querySelector(
        ".header__menu.cc-show"
      ) as HTMLElement;

      if (element) {
        element.style.removeProperty("height");
      }
    }, 1000);
  }
  private removeBackgroundFromSidebarContainerinfiniteicon(): void {
    const elements = this.document.querySelectorAll(
      ".sidebar-container.z-100.menu-drawer.fixed.top-0.left-0.bottom-0.w-11\\/12.max-w-md.px-4.py-4.bg-scheme-background.text-scheme-text.transform.overflow-y-auto"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.removeProperty("background");
    });
  }

  private updateStylesForSecondImageInProductFiguresHAPPYDAD(): void {
    setTimeout(() => {
      const productFigures = this.document.querySelectorAll(
        ".product-card__figure"
      ) as NodeListOf<HTMLElement>;

      productFigures.forEach((figure, index) => {
        const images = figure.querySelectorAll(
          "img"
        ) as NodeListOf<HTMLImageElement>;

        if (images[1]) {
          images[1].style.setProperty("opacity", "1", "important");
          images[1].style.setProperty("display", "none", "important");
        }
      });
    }, 2000);
  }

  private removeInlineStylesFromSwiperElementALBION(): void {
    setTimeout(() => {
      const ancestorElement = this.document.getElementById(
        "product-main-template--17243876589748__main"
      ) as HTMLElement;

      if (
        ancestorElement &&
        ancestorElement.classList.contains("td-product-main") &&
        ancestorElement.classList.contains("td-page-width")
      ) {
        const targetElement = ancestorElement.querySelector(
          ".swiper.slider-section__wrapper.swiper-initialized.swiper-horizontal.swiper-pointer-events"
        ) as HTMLElement;

        if (targetElement) {
          targetElement.removeAttribute("style");
        }
      }
    }, 2000);
  }
  private removeDisplayNoneFromDescendantsOBVI(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        ".r-kfm34z"
      ) as HTMLElement;

      if (parentElement) {
        const descendants = parentElement.querySelectorAll(
          "*"
        ) as NodeListOf<HTMLElement>;

        descendants.forEach((element) => {
          if (element.style.display === "none") {
            element.style.removeProperty("display");
          }
        });
      }
    }, 1000);
  }

  private updateSvgElementsInsideDecorCEDIA(): void {
    const decorSvgElements = this.document.querySelectorAll(
      ".decor svg"
    ) as NodeListOf<SVGElement>;

    decorSvgElements.forEach((svgElement) => {
      svgElement.style.setProperty("width", "calc(1vw + 1vh)", "important");
      svgElement.style.setProperty("margin-bottom", "-300%", "important");
    });
  }
  private removeDisplayNoneFromNestedElementsANDIE(): void {
    const parentElements = this.document.querySelectorAll(
      ".layout.layout--collection"
    ) as NodeListOf<HTMLElement>;

    parentElements.forEach((parent: HTMLElement) => {
      const matchingElements = parent.querySelectorAll(
        'div[style*="display: none;"][viewportwidth="100vw"]'
      ) as NodeListOf<HTMLElement>;

      matchingElements.forEach((element: HTMLElement) => {
        element.style.removeProperty("display");
      });
    });
  }

  private removeDisplayNoneFromNestedElementsBreeo(): void {
    const parentElements = this.document.querySelectorAll(
      ".r-1mf0icq"
    ) as NodeListOf<HTMLElement>;

    parentElements.forEach((parentElement) => {
      const childElements = parentElement.querySelectorAll(
        ".r-1ks6rne"
      ) as NodeListOf<HTMLElement>;

      childElements.forEach((childElement) => {
        if (childElement.style.display === "none") {
          childElement.style.removeProperty("display");
        }
      });
    });
  }

  private removeInlineStylesFromBannerContent(): void {
    const elements = this.document.querySelectorAll(
      ".banner-content.banner-content-bottom-left.banner-content-mobile-top.container"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.removeAttribute("style");
    });
  }
  private updateDisplayForNestedElementsAMIE(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".r-1mf0icq .r-1ks6rne"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        if (element && element.style.display === "none") {
          element.style.removeProperty("display");
          element.style.setProperty("display", "block", "important");
        }
      });
    }, 2000);
  }
  private updateImageStyleForBannerOMG(): void {
    const element = this.document.getElementById(
      "Banner-template--17503515181245__image_banner_qdE7JV"
    ) as HTMLElement;

    if (element) {
      const imgElement = element.querySelector("img") as HTMLElement;

      if (imgElement) {
        imgElement.style.setProperty("height", "100%", "important");
        imgElement.style.setProperty("position", "absolute", "important");
      }
    }
  }
  private updateVisibilityForShowOnScrollElementsEMERY(): void {
    const elements = this.document.querySelectorAll(
      ".show-on-scroll"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.style.setProperty("visibility", "visible", "important");
    });
  }
  private updateHomepageVideoPlayButtonDisplayEMERY(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".homepage-video-play-button-inner"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        element.style.setProperty("display", "block", "important");
      });
    }, 2000);
  }

  private updateIframeDisplayInEmbedContainerEMERY(): void {
    setTimeout(() => {
      const embedContainers = this.document.querySelectorAll(
        ".embed-container.type-youtube"
      ) as NodeListOf<HTMLElement>;

      embedContainers.forEach((container) => {
        const iframeElement = container.querySelector("iframe") as HTMLElement;

        if (iframeElement) {
          iframeElement.style.setProperty("display", "block", "important");
        }
      });
    }, 3000);
  }

  private removeWidthFromProductImageCarouselItemsEMERY(): void {
    const parentElement = this.document.getElementById(
      "shopify-block-judge_me_reviews_featured_carousel_i4iYAw"
    ) as HTMLElement;

    if (parentElement) {
      const carouselItems = parentElement.querySelectorAll(
        ".jdgm-carousel-item__product-image"
      ) as NodeListOf<HTMLElement>;

      carouselItems.forEach((item) => {
        if (item.style.width) {
          item.style.removeProperty("width");
        }
      });
    }
  }
  private updateBannerMediaImageStylesOMG(): void {
    const bannerMediaElement = this.document.querySelector(
      ".banner__media.media.animate--fixed.scroll-trigger.animate--fade-in"
    ) as HTMLElement;

    if (bannerMediaElement) {
      const imgElement = bannerMediaElement.querySelector("img") as HTMLElement;

      if (imgElement) {
        imgElement.style.setProperty("position", "absolute", "important");
        imgElement.style.setProperty("top", "-206px", "important");
      }
    }
  }
  private setDisplayBlockForRowElementsADDISON(): void {
    const elements = this.document.querySelectorAll(
      ".row.mb-50"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.setProperty("display", "block", "important");
    });
  }

  private setMaxWidthForColorElementsADDISON(): void {
    const elements = this.document.querySelectorAll(
      ".color.col-lg-3.col-md-6.col-sm-6.d-flex.align-items-center.col_img_k.collectionimagesn"
    ) as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
      element.style.setProperty("max-width", "100%", "important");
    });
  }
  private setMaxWidthForSpecificColorElementsADDISON(): void {
    const elements = this.document.querySelectorAll(
      ".color.col-lg-2.col-md-6.col-sm-6.d-flex"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.style.setProperty("max-width", "100%", "important");
    });
  }

  private updateSecondSiblingPositionSMEL(): void {
    const announcementBar = this.document.getElementById(
      "shopify-section-announcement-bar_simple"
    ) as HTMLElement;

    if (announcementBar) {
      let secondSibling = announcementBar.previousElementSibling;

      if (secondSibling) {
        secondSibling = secondSibling.previousElementSibling;

        if (secondSibling) {
          (secondSibling as HTMLElement).style.setProperty(
            "position",
            "relative",
            "important"
          );
        }
      }
    }
  }

  private hideAllScalapayModals(): void {
    const modalElements = this.document.querySelectorAll(
      "scalapay-modal-core"
    ) as NodeListOf<HTMLElement>;

    if (modalElements.length > 0) {
      modalElements.forEach((modalElement) => {
        modalElement.style.setProperty("display", "none", "important");
      });
    }
  }
  private updateDrawerMenuDisplayNuBest(): void {
    const element = this.document.querySelector(
      ".t4s-drawer-menu__close.t4s-pe-none.t4s-op-0.t4s-pf"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("display", "none", "important");
    }
  }

  private hideJstIframeElementNuBest(): void {
    const element = this.document.getElementById(
      "_jst-iframe-ff0f878ae2aa44168b3e310ce8eef2b6-92b9e5301c2811ee8c7cb55495ba6c2c-c5e2bdb1a4cf432c8e005e64d49f9368"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("display", "none", "important");
    }
  }
  private updateDescendantsDisplayAmie(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        ".r-1v6j6db"
      ) as HTMLElement;

      if (parentElement) {
        const descendants = parentElement.querySelectorAll(
          "*"
        ) as NodeListOf<HTMLElement>;

        descendants.forEach((descendant) => {
          if (descendant.style.display === "none") {
            descendant.style.setProperty("display", "block", "important");
          }
        });
      }
    }, 2000);
  }
  private updateHeaderSectionChildrenDisplayEXCISION(): void {
    const parentElement = this.document.querySelector(
      ".shopify-section.shopify-section-group-header-group.header-section.header-sticky"
    ) as HTMLElement;

    if (parentElement) {
      const children = parentElement.children;
      Array.from(children).forEach((child) => {
        const childElement = child as HTMLElement;
        if (childElement.style.display === "none") {
          childElement.style.display = "";
          childElement.style.setProperty("display", "block", "important");
        }
      });
    }
  }

  private updateMenuDrawerAndInnerHeightEXCISION(): void {
    const drawerElement = this.document.querySelector(
      "menu-drawer#MenuDrawer.menu-drawer.drawer.drawer--start.z-30.fixed.bottom-0.left-0.h-full.w-full.pointer-events-none"
    ) as HTMLElement;

    if (drawerElement) {
      const drawerInnerElement = drawerElement.querySelector(
        ".drawer__inner.z-10.absolute.top-0.flex.flex-col.w-full.h-full.overflow-hidden"
      ) as HTMLElement;

      if (drawerInnerElement) {
        drawerInnerElement.style.setProperty(
          "max-height",
          "calc(100% - 60px)",
          "important"
        );
      }
    }
  }

  private removeInlineStylesFromCurrencySwitcherChildWUNutrition(): void {
    const parentElement = this.document.querySelector(
      ".doubly-nice-select.currency-switcher.left.slim.open"
    ) as HTMLElement;

    if (parentElement) {
      const childElement = parentElement.querySelector(".list") as HTMLElement;

      if (childElement) {
        childElement.removeAttribute("style");
      }
    }
  }

  private removeInlineStylesFromImageswonderpaws(): void {
    const parentElements = this.document.querySelectorAll<HTMLElement>(
      ".swiper-slide.item-product-card.grid__item.medium-up--one-half.text-left"
    );

    parentElements.forEach((parent) => {
      const images = parent.querySelectorAll<HTMLImageElement>(
        "img.feature-row__image"
      );

      images.forEach((img) => {
        img.removeAttribute("style");
      });
    });
  }
  private removeAfterPseudoFromHomeSliderAncestral(): void {
    const element = this.document.getElementById("homeslider") as HTMLElement;

    if (element) {
      const style = this.document.createElement("style");
      style.innerHTML = `
          #homeslider::after {
              content: none !important;
          }
      `;
      this.document.head.appendChild(style);
    }
  }
  private removeWidthPropertiesFromSwiperSlidessullen(): void {
    const allProductsElement = this.document.querySelector(
      ".all_products_abc"
    ) as HTMLElement;

    if (allProductsElement) {
      const swiperSlides = allProductsElement.querySelectorAll(
        ".swiper-slide"
      ) as NodeListOf<HTMLElement>;

      swiperSlides.forEach((swiperSlide) => {
        swiperSlide.style.removeProperty("min-width");
        swiperSlide.style.removeProperty("max-width");
      });
    }
  }

  private removeWidthPropertiesFromSwiperSlidesRIO(): void {
    const ancestorElement = this.document.getElementById(
      "CollectionSwitcher1-template--16295078461517__featured_collection_switcher_wThniV"
    );
    if (ancestorElement) {
      const swiperSlides = ancestorElement.querySelectorAll(
        ".grid__image-contain.image-style--.image-element"
      ) as NodeListOf<HTMLElement>;
      swiperSlides.forEach((swiperSlide) => {
        swiperSlide.style.removeProperty("width");
      });
    }
  }
  private hideElementWithClassBGT4X4(): void {
    const element = this.document.querySelector(
      ".shopify-section.place-under-transparent-header.is-in-viewport"
    ) as HTMLElement;
    if (element) {
      element.style.display = "none";
    }
  }
  private setHeaderToFlexMYSTICBARRELS(): void {
    const headerElement = this.document.querySelector(
      ".header.header--middle-left.header--mobile-center.page-width.header--has-menu.header--has-social.header--has-account"
    ) as HTMLElement;

    if (headerElement) {
      headerElement.style.display = "flex";
    }
  }
  private removeInlineStylesFromElementOCTO(): void {
    const element = this.document.querySelector(
      ".bgExtraLayerOverlay"
    ) as HTMLElement;

    if (element) {
      element.removeAttribute("style");
    }
  }

  private removeInlineStylesFASTTRAC(): void {
    const element = this.document.querySelector(
      ".sc-TBWPX.gKJFzi.pf-280_.pf-heading-1-h3"
    ) as HTMLElement;

    if (element) {
      element.removeAttribute("style");
    }
  }

  private setVisibilityForElementFastTrac(): void {
    const element = this.document.querySelector(
      ".sc-TBWPX.gKJFzi.pf-171_.pf-heading-1-h3"
    ) as HTMLElement;

    if (element) {
      element.style.visibility = "visible";
    }
  }

  private hideInsertedStarContainersFastTrac(): void {
    const parent = this.document.querySelector(
      ".sc-dwsnSq.jqylDz"
    ) as HTMLElement;
    if (parent) {
      const elements = parent.querySelectorAll(
        ".inserted-star-container"
      ) as NodeListOf<HTMLElement>;

      setTimeout(() => {
        elements.forEach((element) => {
          element.style.display = "none";
        });
      }, 2000);
    }
  }

  private setWidthForMobileMenuReviewMysticBarrels(): void {
    const menuDrawer = this.document.querySelector(
      ".menu-drawer__navigation"
    ) as HTMLElement;
    const mobileMenuReview = menuDrawer?.querySelector(
      ".mobile-menu-review"
    ) as HTMLElement;

    if (mobileMenuReview) {
      mobileMenuReview.style.width = "392px";
    }
  }

  private removeInlineStylesFromMenuDrawerZBioticz(): void {
    const menuDrawer = this.document.querySelector(
      "#menu-drawer.bg-stone-500.menu-drawer.motion-reduce"
    ) as HTMLElement;

    if (menuDrawer) {
      menuDrawer.removeAttribute("style");
    }

    const menuDrawerNavContainer = menuDrawer?.querySelector(
      ".menu-drawer__navigation-container"
    ) as HTMLElement;

    if (menuDrawerNavContainer) {
      menuDrawerNavContainer.removeAttribute("style");
    }
  }

  private removeInlineStylesFromScopedNavigationContainers(): void {
    const ancestor = this.document.querySelector(
      ".header__icon.header__icon--menu.header__icon--summary.link.focus-inset"
    ) as HTMLElement;

    if (ancestor) {
      const elements = ancestor.querySelectorAll(
        ".menu-drawer__navigation-container"
      ) as NodeListOf<HTMLElement>;

      elements.forEach((element) => {
        element.removeAttribute("style"); // Remove all inline styles
      });
    }
  }

  private removeInlineStylesFromImagesInMegaInnerMob(): void {
    const parentElements = this.document.querySelectorAll(
      ".menu-drawer__menu-item.list-menu__item.link.link--text.focus-inset"
    ) as NodeListOf<HTMLElement>;

    parentElements.forEach((parent) => {
      const megaInnerMobElements = parent.querySelectorAll(
        ".mega_inner_mob"
      ) as NodeListOf<HTMLElement>;

      megaInnerMobElements.forEach((megaInnerMob) => {
        const images = megaInnerMob.querySelectorAll(
          "img"
        ) as NodeListOf<HTMLImageElement>;

        images.forEach((img) => {
          img.removeAttribute("style");
        });
      });
    });
  }

  private removeMarginFromAncestorOATFUL(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "shopify-section-main_banner_U6w7wr"
      ) as HTMLElement | null;

      if (element) {
        const ancestor = element.closest(
          "main.homepage-contentwrapper.main-content"
        ) as HTMLElement | null;

        if (ancestor) {
          ancestor.style.removeProperty("margin");
        }
      }
    }, 2000);
  }

  private removeInlineStylesFromWhiteLogoMcAffe(): void {
    const parentElement = this.document.querySelector(
      ".header__logo-link.has-white-logo.flex.items-center.relative"
    ) as HTMLElement | null;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".white-logo.hidden.md\\:block.absolute"
      ) as HTMLElement | null;

      if (childElement) {
        childElement.removeAttribute("style");
      }
    }
  }
  private hideCartPopupSectionFuego(): void {
    const targetElement = this.document.querySelector(
      "#shopify-section-cart-popup.shopify-section"
    ) as HTMLElement | null;

    if (targetElement) {
      const topSibling =
        targetElement.previousElementSibling as HTMLElement | null;
      const bottomSibling =
        targetElement.nextElementSibling as HTMLElement | null;

      if (
        topSibling?.id === "shopify-section-header" &&
        topSibling?.classList.contains("shopify-section") &&
        topSibling?.classList.contains("section-header") &&
        topSibling?.classList.contains("header_sticky") &&
        bottomSibling?.id === "MainContent" &&
        bottomSibling?.classList.contains("content-for-layout") &&
        bottomSibling?.classList.contains("focus-none")
      ) {
        targetElement.style.setProperty("display", "none", "important");
      }
    }
  }
  private testMenuDrawerzorali(): void {
    const menuDrawer = this.document.querySelector(
      "#menu-drawer.gradient.menu-drawer.motion-reduce.color-"
    ) as HTMLElement | null;

    if (menuDrawer) {
      const innerContainer = menuDrawer.querySelector(
        ".menu-drawer__inner-container"
      ) as HTMLElement | null;
      const navigationContainer = innerContainer?.querySelector(
        ".menu-drawer__navigation-container"
      ) as HTMLElement | null;

      if (innerContainer && navigationContainer) {
        innerContainer.style.removeProperty("width");
        navigationContainer.style.removeProperty("width");
      }

      const megaInnerMobElements = menuDrawer.querySelectorAll(
        ".mega_inner_mob img"
      ) as NodeListOf<HTMLImageElement>;
      megaInnerMobElements.forEach((img) => {
        const parent = img.closest(".mega_inner_mob") as HTMLElement | null;
        if (parent) {
          img.style.removeProperty("width");
          img.style.removeProperty("height");
        }
      });
    }
  }
  private setPositionRelativeTanitco(): void {
    const element = this.document.querySelector(
      ".slideshow__slide.slideshow__slide--template--16650453188833__730c5010-4eb1-4723-8b3d-06970325ab13-1666466508afdc26e1-0.d-flex.justify-content-center.align-items-center"
    ) as HTMLElement | null;

    if (element) {
      element.style.setProperty("position", "relative", "important");
    }
  }
  private removeOpacityFromFlickityDescendantsTanitco(): void {
    const parentElement = this.document.getElementById(
      "Slideshow-template--18622508073185__659ca9df-371f-4701-bb4c-92dd5f2b0c43"
    ) as HTMLElement | null;

    if (parentElement) {
      const flickityViewports = parentElement.querySelectorAll(
        ".flickity-viewport"
      ) as NodeListOf<HTMLElement>;

      flickityViewports.forEach((viewport) => {
        const descendants = viewport.querySelectorAll(
          "*"
        ) as NodeListOf<HTMLElement>;
        descendants.forEach((descendant) => {
          descendant.style.removeProperty("opacity");
        });
      });
    }
  }
  private removeDisplayFromChildBUDMOTHER(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        ".cw-cart-drower"
      ) as HTMLElement | null;

      if (parentElement) {
        const childElement = parentElement.querySelector(
          ".tw-h-full.tw-fixed.tw-top-0.tw-right-0.tw-z-30"
        ) as HTMLElement | null;

        if (childElement) {
          childElement.style.removeProperty("display");
        }
      }
    }, 2000);
  }

  private hideMultipleFeaturedCollectionsBUDMOTHER(): void {
    const ids: string[] = [
      "shopify-section-template--24198020596096__cw_featured_collection_bypTGe",
      "shopify-section-template--24198020596096__cw_featured_collection_RJqhjY",
      "shopify-section-template--24198020596096__cw_featured_collection_XPEC66",
    ];

    ids.forEach((id) => {
      const element = this.document.getElementById(id) as HTMLElement | null;
      if (element) {
        element.style.setProperty("display", "none", "important");
      }
    });
  }
  private setSvgStylesForSliderSNAX(): void {
    const sliderElement = this.document.querySelector(
      ".rtnu-collection__sp-slider.splide--slide.splide--ltr.splide--draggable.is-active.is-initialized"
    ) as HTMLElement | null;

    if (sliderElement) {
      const arrowElement = sliderElement.querySelector(
        ".splide__arrow.splide__arrow--next"
      ) as HTMLElement | null;

      if (arrowElement) {
        const svgChild = arrowElement.querySelector("svg") as SVGElement | null;

        if (svgChild) {
          svgChild.style.fill = "rgba(var(--c-dark), .28)";
          svgChild.style.transition = "all .2s";
        }
      }
    }
  }
  private hidePrevArrowSNAX(): void {
    const sliderElement = this.document.querySelector(
      ".rtnu-collection__sp-slider.splide--slide.splide--ltr.splide--draggable.is-active.is-initialized"
    ) as HTMLElement | null;

    if (sliderElement) {
      const prevArrow = sliderElement.querySelector(
        ".splide__arrow.splide__arrow--prev"
      ) as HTMLElement | null;

      if (prevArrow) {
        prevArrow.style.display = "none";
      }
    }
  }
  private setArrowsStyleSNAX(): void {
    const sliderElement = this.document.querySelector(
      ".rtnu-collection__sp-slider.splide--slide.splide--ltr.splide--draggable.is-active.is-initialized"
    ) as HTMLElement | null;

    if (sliderElement) {
      const arrowsElement = sliderElement.querySelector(
        ".splide__arrows.splide__arrows--ltr"
      ) as HTMLElement | null;

      if (arrowsElement) {
        arrowsElement.style.opacity = "1";
        arrowsElement.style.position = "absolute";
        arrowsElement.style.top = "50%";
        arrowsElement.style.right = "0";
        arrowsElement.style.transform = "translateY(-50%)";
        arrowsElement.style.zIndex = "999";
      }
    }
  }
  private setArrowsStyleSnaxNAVdots(): void {
    const sliderElement = this.document.querySelector(
      ".rtnu-collection__sp-slider.splide--slide.splide--ltr.splide--draggable.is-active.is-initialized"
    ) as HTMLElement | null;

    if (sliderElement) {
      const paginationPages = sliderElement.querySelectorAll(
        ".splide__pagination__page"
      ) as NodeListOf<HTMLElement>;

      if (paginationPages.length > 0) {
        paginationPages.forEach((page) => {
          page.style.width = "20px";
          page.style.height = "20px";
          page.style.borderRadius = "100vmax";
          page.style.background = "rgba(var(--c-dark), 1)";
          page.style.opacity = ".19";
          page.style.padding = "0";
        });
      }
    }
  }

  private monitorPaginationDotsSNAXDOTS(): void {
    const paginationContainer = this.document.querySelector(
      ".splide__pagination.splide__pagination--ltr"
    ) as HTMLElement | null;

    if (!paginationContainer) {
      return;
    }

    const initializeOpacity = (): void => {
      const allDots = paginationContainer.querySelectorAll(
        ".splide__pagination__page"
      ) as NodeListOf<HTMLElement>;
      allDots.forEach((dot) => {
        dot.style.opacity = dot.classList.contains("is-active") ? "1" : "0.19";
      });
    };

    initializeOpacity();

    const observer = new MutationObserver(() => {
      initializeOpacity();
    });

    observer.observe(paginationContainer, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });
  }

  private stylePaginationAndChildrenSNAX(): void {
    const paginationElement = this.document.querySelector(
      ".splide__pagination.splide__pagination--ltr"
    ) as HTMLElement | null;

    if (paginationElement) {
      paginationElement.style.margin = "3.5rem 0 0";

      const childLiElements = paginationElement.querySelectorAll(
        "li"
      ) as NodeListOf<HTMLElement>;
      childLiElements.forEach((li) => {
        li.style.margin = "0 4px";
      });
    }
  }
  private removeInlineStylesFromSidebarNOVA(): void {
    const sidebarElement = this.document.querySelector(
      ".sidebar.col-lg-3.order-1.col-12"
    ) as HTMLElement | null;

    if (sidebarElement) {
      sidebarElement.removeAttribute("style");
    }
  }
  private removeDisplayFromHeaderOPULIZE(): void {
    const headerElement = this.document.querySelector(
      ".header.header--middle-left.header--mobile-center.page-width.header--has-menu.header--has-social.header--has-account"
    ) as HTMLElement | null;

    if (headerElement) {
      headerElement.style.removeProperty("display");
    }
  }
  private setVisibilityOnChildFastTRAC(): void {
    const parentElement = this.document.querySelector(
      ".sc-dExXmK.fNpoDq.pf-280_"
    ) as HTMLElement | null;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".sc-eZjPq.gpuBwB.pf-281_.pf-heading-1-h3"
      ) as HTMLElement | null;

      if (childElement) {
        childElement.style.visibility = "visible";
      }
    }
  }
  private setVisibilityOnSpecificChildfasttrac(): void {
    const parentElement = this.document.querySelector(
      ".sc-dExXmK.fNpoDq.pf-171_"
    ) as HTMLElement | null;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".sc-eZjPq.gpuBwB.pf-172_.pf-heading-1-h3"
      ) as HTMLElement | null;

      if (childElement) {
        childElement.style.visibility = "visible";
      }
    }
  }
  private hideSubNavElementsBentgo(): void {
    const mobileNav = this.document.querySelector(
      "#mobile-nav"
    ) as HTMLElement | null;

    if (mobileNav && mobileNav.tagName.toLowerCase() === "nav") {
      const colorboxSibling =
        mobileNav.previousElementSibling as HTMLElement | null;

      if (colorboxSibling && colorboxSibling.id === "colorbox") {
        const subNavElements = mobileNav.querySelectorAll(
          ".sub-nav"
        ) as NodeListOf<HTMLElement>;

        if (subNavElements.length > 0) {
          subNavElements.forEach((element) => {
            element.style.display = "none";
          });
        }
      }
    }
  }
  private observeNutrientsSlideOpacityAPupAbove(): void {
    const container = this.document.querySelector(
      ".slick-slider"
    ) as HTMLElement | null;

    if (!container) {
      return;
    }

    const updateSlideOpacity = (): void => {
      const allSlides = container.querySelectorAll(
        ".nutrients__slide.slick-slide"
      ) as NodeListOf<HTMLElement>;

      allSlides.forEach((slide) => {
        slide.style.opacity = "0";
      });

      const activeSlide = container.querySelector(
        ".nutrients__slide.slick-slide.slick-current.slick-active"
      ) as HTMLElement | null;

      if (activeSlide) {
        activeSlide.style.opacity = "1";
      }
    };

    updateSlideOpacity();

    const observer = new MutationObserver(() => {
      updateSlideOpacity();
    });

    observer.observe(container, {
      childList: true,
      attributes: true,
      subtree: true,
      attributeFilter: ["class"],
    });
  }

  private removeInlineStylesFromChildBreeo(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        ".variant-specs-compare-image-col.grid-item"
      ) as HTMLElement | null;

      if (parentElement) {
        const childElement = parentElement.querySelector(
          ".variant-specs-compare-images"
        ) as HTMLElement | null;

        if (childElement) {
          childElement.removeAttribute("style");
        }
      }
    }, 2000);
  }

  private setupMobileNavToggleBentgo(): void {
    const toggleButton = this.document.querySelector(
      ".toggle-mob-nav"
    ) as HTMLElement | null;
    const mobileNav = this.document.querySelector(
      "#mobile-nav"
    ) as HTMLElement | null;

    if (!toggleButton || !mobileNav) {
      return;
    }

    const showClass = "show-mobile-nav";
    const navActiveStyle = "transform: translate3d(100%, 0, 0);";

    const applyTransform = (): void => {
      this.document.body.classList.add(showClass);
      mobileNav.style.cssText = navActiveStyle;
    };

    const resetTransform = (): void => {
      this.document.body.classList.remove(showClass);
      mobileNav.style.removeProperty("transform");
    };

    toggleButton.addEventListener("click", (event: Event) => {
      event.stopPropagation();
      if (this.document.body.classList.contains(showClass)) {
        resetTransform();
      } else {
        applyTransform();
      }
    });

    this.document.addEventListener("click", (event: Event) => {
      const target = event.target as HTMLElement;
      if (!mobileNav.contains(target) && !toggleButton.contains(target)) {
        resetTransform();
      }
    });
  }
  private removeInlineCssFromSecondDivChildHelloSilky(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        "#shopify-section-template--21644081922071__ss_shoppable_video_xtELYD"
      ) as HTMLElement | null;

      if (parentElement) {
        const childDivs = Array.from(parentElement.children).filter(
          (child): child is HTMLElement => child.tagName === "DIV"
        );

        if (childDivs.length >= 2) {
          const secondDivChild = childDivs[1];
          secondDivChild.removeAttribute("style");
        }
      }
    }, 2000);
  }

  private setAuthorAvatarImageStylesTalktheTalk(): void {
    const element = this.document.querySelector(
      ".author-avatar-image"
    ) as HTMLElement | null;

    if (element) {
      element.style.opacity = "1";
      element.style.fontSize = "0px";
      element.style.left = "0px";
      element.style.top = "0px";
      element.style.width = "50px";
      element.style.height = "50px";
      element.style.position = "relative";
      element.style.borderRadius = "50%";
    }
  }

  private removeInlineOpacityFromVideoModalHELLOSILKY(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        ".video-modal-template--21644081922071__ss_shoppable_video_xtELYD"
      ) as HTMLElement | null;

      if (parentElement) {
        parentElement.style.opacity = "";
      }
    }, 3000);
  }

  private removeInlineCssFromSectionTalktheTalk(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        ".section-border"
      ) as HTMLElement | null;

      if (parentElement) {
        const childElement = parentElement.querySelector(
          ".section-background"
        ) as HTMLElement | null;

        if (childElement) {
          parentElement.removeAttribute("style");
          childElement.removeAttribute("style");
        }
      }
    }, 2000);
  }
  private removeInlineHeightFromImageTalktheTalk(): void {
    const parentElement = document.querySelector(
      ".fluid-image-container.sqs-image-content"
    ) as HTMLElement | null;

    if (parentElement) {
      const contentFillElement = parentElement.querySelector(
        ".content-fill"
      ) as HTMLElement | null;

      if (contentFillElement) {
        const imgElement = contentFillElement.querySelector(
          "img"
        ) as HTMLImageElement;

        if (imgElement) {
          imgElement.style.height = "";
        }
      }
    }
  }
  private removeInlineLeftStyleIfHasChildNova(): void {
    const parentElement = this.document.querySelector(
      ".nt-canvas-menu.nt-push-menu"
    ) as HTMLElement;

    if (parentElement) {
      const childElement = parentElement.querySelector(
        ".shopify-section.menu-section-container.menu-section"
      ) as HTMLElement;

      if (childElement) {
        parentElement.style.left = "";
      }
    }
  }
  private removeInlineHeightFromMobileMenuBALANCE(): void {
    const element = this.document.querySelector(
      "#mobile-menu-drawer.drawer.drawer--from-left.new_mobile_mega_menu"
    ) as HTMLElement;

    if (element) {
      element.style.height = "";
    }
  }
  private setDisplayBlockForClosedStateDescendantsSupply(): void {
    const parentElement = this.document.querySelector(
      ".r-1r5tugn"
    ) as HTMLElement | null;

    if (parentElement) {
      const closedElements = parentElement.querySelectorAll(
        '[data-state="closed"]'
      ) as NodeListOf<HTMLElement>;

      closedElements.forEach((element) => {
        element.style.display = "block";
      });
    }
  }
  private hideMediaOverlaysKotomi(): void {
    const elements = this.document.querySelectorAll(
      ".media__overlay"
    ) as NodeListOf<HTMLElement>;

    if (elements.length === 0) {
      return;
    }

    elements.forEach((element) => {
      element.style.display = "none";
    });
  }

  private removeInlineStylesFromMediaElementsKotomi(): void {
    const mediaSourceElements = this.document.querySelectorAll(
      ".media__source"
    ) as NodeListOf<HTMLElement>;

    mediaSourceElements.forEach((mediaSource) => {
      const ancestor = mediaSource.closest(
        ".MediaGalleryWidget__media"
      ) as HTMLElement | null;

      if (ancestor) {
        if (ancestor.style) {
          ancestor.removeAttribute("style");
        }

        if (mediaSource.style) {
          mediaSource.removeAttribute("style");
        }

        const mediaItem = ancestor.closest(
          ".MediaGalleryWidget__item"
        ) as HTMLElement | null;

        if (mediaItem && mediaItem.style) {
          mediaItem.removeAttribute("style");
        }
      }
    });
  }

  private setDisplayBlockForClosedStateDescendantsSupply1(): void {
    setTimeout(() => {
      const parentElements = this.document.querySelectorAll(
        ".r-1r5tugn"
      ) as NodeListOf<HTMLElement>;

      parentElements.forEach((parentElement) => {
        const closedElements = parentElement.querySelectorAll(
          '[data-state="closed"]'
        ) as NodeListOf<HTMLElement>;

        closedElements.forEach((element) => {
          element.style.setProperty("display", "block", "important");
        });
      });
    }, 2000);
  }
  private observeAndRemoveInlineOpacityNAALI(): void {
    const selectors: string[] = [
      ".jc-flex.jc-flex-row-reverse.jc-opacity-0.group-aria-expanded\\:jc-opacity-100.jc-pointer-events-none.group-aria-expanded\\:jc-pointer-events-auto.jc-absolute.jc-top-full.jc-left-0.jc-right-0.jc-bg-white.jc-transition-opacity.jc-duration-300",
      ".js-burger-menu.jc-bg-white.jc-max-h-\\[calc\\(100vh-var\\(--top-gap\\)\\)\\].jc-overflow-y-auto.jc-absolute.jc-top-full.jc-left-0.jc-right-0.jc-opacity-0.jc-pointer-events-none.peer-aria-expanded\\:jc-opacity-100.peer-aria-expanded\\:jc-pointer-events-auto.jc-transition-opacity.jc-duration-300",
      ".jc-shadow-md.jc-px-\\[28px\\].jc-py-5.jc-bg-white.jc-absolute.jc-top-\\[calc\\(100\\%\\+18px\\)\\].jc-left-0.jc-opacity-0.jc-transition-opacity.jc-duration-300.group-aria-expanded\\:jc-opacity-100.jc-pointer-events-none.group-aria-expanded\\:jc-pointer-events-auto",
    ];

    const observerCallback = (mutations: MutationRecord[]): void => {
      selectors.forEach((selector: string) => {
        const elements: NodeListOf<HTMLElement> =
          this.document.querySelectorAll(selector);

        elements.forEach((element: HTMLElement) => {
          element.style.removeProperty("opacity");
        });
      });
    };

    const observer = new MutationObserver(observerCallback);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });
    observerCallback([]);
  }

  private reloadLazyImagesSourplus(): void {
    const containers = this.document.querySelectorAll(
      ".content-for-layout.focus-none"
    );

    containers.forEach((container) => {
      const child = container.querySelector(
        ".shopify-section.gps-537860369318675452.gps.gpsil"
      );
      if (!child) return;

      container.querySelectorAll("img, source").forEach((el) => {
        const dataSrc = el.getAttribute("data-src");
        const dataSrcset = el.getAttribute("data-srcset");

        if (dataSrc) {
          (el as HTMLImageElement).src = dataSrc;
        } else if (dataSrcset) {
          (el as HTMLSourceElement).srcset = dataSrcset;
        } else if (el.tagName === "IMG") {
          (el as HTMLImageElement).src = (el as HTMLImageElement).src;
        }
      });
    });
  }

  private removeInlineHeightAndWidthSourplus(): void {
    const selectors = [
      ".gp-h-full.gp-max-w-full.gp-flex",
      ".pointer-events-auto.h-full.gp-flex",
    ];

    setTimeout(() => {
      selectors.forEach((selector) => {
        const elements = this.document.querySelectorAll<HTMLElement>(selector);
        elements.forEach((el) => {
          el.style.removeProperty("height");
          el.style.removeProperty("width");
        });
      });
    }, 2000);
  }

  private goToFirstSlideDRWOOLF(): void {
    const slider = this.document.querySelector(".Main--ProductPhotos") as any;
    if (slider && slider.slick) {
      slider.slick.slickGoTo(0);
    }
  }
  private removeMinHeightInlineStylesNAALI(): void {
    const classSelector: string =
      ".gem-slider.gp-h-full.gp-overflow-hidden.gp-select-none" +
      ".mobile\\:\\!gp-flex-nowrap.tablet\\:\\!gp-flex-nowrap" +
      ".\\!gp-flex-nowrap.mobile\\:\\!gp-min-h-full.tablet\\:\\!gp-min-h-full.\\!gp-min-h-full";

    const elements: NodeListOf<HTMLElement> =
      this.document.querySelectorAll(classSelector);

    elements.forEach((element: HTMLElement) => {
      element.style.removeProperty("min-height");
    });
  }
  private setDisplayToBlockForWidgetEarthFlow(): void {
    const parentElement = this.document.getElementById(
      "reeview-app-widget_671a4ad69c3cea00296e2880"
    ) as HTMLElement;

    if (parentElement) {
      parentElement.style.display = "block";
    }
  }
  private removeBeforeContentFromBannerCURATEDchrome(): void {
    const element = this.document.querySelector(
      ".collection-banner__body.color-background-4.overlay-enable.show_img"
    ) as HTMLElement;

    if (element) {
      const style = this.document.createElement("style");
      style.textContent = `
      .collection-banner__body.color-background-4.overlay-enable.show_img::before {
        content: none !important;
      }
    `;
      this.document.head.appendChild(style);
    }
  }

  private hideMobileHeaderSectionCuratedChrome(): void {
    const element = this.document.querySelector(
      "#shopify-section-sections--22768627777868__header_mobile"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("display", "none", "important");
    }
  }
  private setGradientDisplayToBlockFourth(): void {
    const elements = this.document.querySelectorAll(
      ".box.box-background.box-background-position-center_center.bg-lazy.bg-loaded"
    );

    elements.forEach((element) => {
      const child = element.querySelector(
        ".gradient.gradient-offwhite"
      ) as HTMLElement;

      if (child) {
        child.style.setProperty("display", "block", "important");
      }
    });
  }
  private adjustVerifiedBadgeWidthLittleCuriousMinds(): void {
    const element = this.document.querySelector(
      ".product__customer-review-verified-badge img"
    ) as HTMLElement | null;

    if (element) {
      element.style.setProperty("width", "11px", "important");
    }
  }
  private showCustomStickyAtcAerify(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector(
        "#shopify-section-template--24036272374104__sticky_atc_LUxL8b"
      ) as HTMLElement | null;

      if (parentElement) {
        const childElement = parentElement.querySelector(
          "#custom_sticky_atc.custom_sticky_atc"
        ) as HTMLElement | null;

        if (childElement) {
          childElement.style.removeProperty("display");
        }
      }
    }, 3000);
  }
  private removeInlineStylesKarambit(): void {
    const elements = this.document.querySelectorAll<HTMLElement>(
      ".kb-hero-slider__item.slick-slide"
    );

    elements.forEach((element) => {
      element.removeAttribute("style");
    });
  }
  private setSlickTrackWidthKarambit(): void {
    const parent = this.document.querySelector<HTMLElement>(
      ".kb-hero-slider.slick-initialized.slick-slider.slick-dotted"
    );

    if (parent) {
      const slickTrack = parent.querySelector<HTMLElement>(".slick-track");
      if (slickTrack) {
        slickTrack.style.setProperty("width", "1875px", "important");
      }
    }
  }
  private removeWidthFromObjfitKarambit(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll<HTMLElement>(
        ".image-container .objfit"
      );

      elements.forEach((element) => {
        if (element.style.width) {
          element.style.removeProperty("width");
        }
      });
    }, 2000);
  }

  private removeDisplayNoneFromSiteHeaderOffsetDryrobe(): void {
    setTimeout(() => {
        const parentElement = this.document.querySelector<HTMLElement>(
            "#shopify-section-template--15480873320538__site-header-offset"
        );

        if (parentElement) {
            const childElement = parentElement.querySelector<HTMLElement>(
                ".site-header-offset"
            );

            if (childElement && childElement.style.display === "none") {
                childElement.style.removeProperty("display");
            }
        }
    }, 2000);
}
private removeWidthFromImgFluidWithAncestorNutriseed(): void {
  setTimeout(() => {
      const elements = this.document.querySelectorAll<HTMLImageElement>('.img-fluid');

      elements.forEach((element) => {
          if (
              element.tagName.toLowerCase() === 'img' &&
              element.closest('.laptopImg.box') &&
              element.style.width
          ) {
              element.style.removeProperty('width');
          }
      });
  }, 2000);
}

private removeWidthFromImagesNUTRISEED(): void {
  setTimeout(() => {
      const parentElements = this.document.querySelectorAll(
          ".spd__flxiSlide.slideshow__slide.slider__slide"
      );

      parentElements.forEach((parentElement) => {
          const imgElements = parentElement.querySelectorAll<HTMLImageElement>(".img-fluid");

          imgElements.forEach((imgElement) => {
              imgElement.style.removeProperty("width");
          });
      });
  }, 2000);
}

private setMinHeightForElementBARLEYBUS(): void {
  const parentElement = this.document.querySelector<HTMLElement>(
      ".et_pb_module.et_pb_fullwidth_header.et_pb_fullwidth_header_2.et_pb_ab_subject.et_pb_ab_subject_id-902_1.et_pb_ab_goal.et_pb_ab_goal_id-902.et_hover_enabled.et_pb_section_parallax.et_pb_text_align_left.et_pb_bg_layout_dark.et_pb_fullscreen.et_had_animation"
  );

  if (parentElement) {
      const childElement = parentElement.querySelector<HTMLElement>(
          ".et_pb_fullwidth_header_container.left"
      );

      if (childElement) {
          childElement.style.setProperty("min-height", "852px", "important");
      }
  }
}
private setMinHeightForSpecificElementBARLEYBUS(): void {
  const element = this.document.querySelector<HTMLElement>(
      ".et_pb_module.et_pb_fullwidth_header.et_pb_fullwidth_header_2.et_pb_ab_subject.et_pb_ab_subject_id-902_1.et_pb_ab_goal.et_pb_ab_goal_id-902.et_hover_enabled.et_pb_section_parallax.et_pb_text_align_left.et_pb_bg_layout_dark.et_pb_fullscreen.et_had_animation"
  );

  if (element) {
      element.style.setProperty("min-height", "852px", "important");
  }
}
private removeInlineCSSFromOverlayWithParentBarleyBus(): void {
  const parentElement = this.document.querySelector<HTMLElement>(
      ".et_pb_module.et_pb_fullwidth_header.et_pb_fullwidth_header_2.et_pb_ab_subject.et_pb_ab_subject_id-902_1.et_pb_ab_goal.et_pb_ab_goal_id-902.et_hover_enabled.et_pb_section_parallax.et_pb_text_align_left.et_pb_bg_layout_dark.et_pb_fullscreen.et_had_animation"
  );

  if (parentElement) {
      const overlayElements = parentElement.querySelectorAll<HTMLElement>(".et_pb_fullwidth_header_overlay");

      overlayElements.forEach((overlayElement) => {
          overlayElement.removeAttribute("style");
      });
  }
}






}
