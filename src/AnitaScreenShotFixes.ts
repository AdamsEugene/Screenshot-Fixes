import Common from "./Common";

export default class AnitaScreenShotFixes {
  private document: Document;

  constructor(dom: Document = document) {
    this.document = dom;
    this.setupLoadEventListener();
  }

  private setupLoadEventListener(): void {
    window.addEventListener("load", () => {
      this.init();
    });
  }
  public init(): void {
    this.updateFloatingAddToCartStylesKAHOOT();
    this.removeHeightProperty();
    this.setTransparentBackground();
    this.setMobileMenuZIndexAndPosition();
    this.hideSearchForm();
    this.disableFlexOnMobileMenuBody();
    this.showGlobalOverlay();
    this.removeFixedPositionFromHeader();
    this.makeBackdropTransparent();
    // this.removeMainContentMargin();
    this.setDisplayToBlock();
    this.setOpacityToHeroSideBySide();
    this.removeFixedPositionFromHeaderBedsite();
    this.removeMinHeightAndOverflow();
    this.removeDisplayNone();
    this.setStyleToRecommendationModal();
    this.rdImasetOpacityToProductCages();
    this.setDisplayToBlockFulton();
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
    this.updateBannerHeightBREEO();
    this.hideAllScalapayModals();
    this.updateDrawerMenuDisplayNuBest();
    this.hideJstIframeElementNuBest();
    this.updateDescendantsDisplayAmie();
    this.updateHeaderSectionChildrenDisplayEXCISION();
    this.updateMenuDrawerAndInnerHeightEXCISION();
    this.updateFloatingAddToCartDisplaykahoot();
  }

  private removeHeightProperty() {
    const mobileNav = this.document.querySelector(
      "mobile-navigation"
    ) as HTMLElement;

    if (
      mobileNav?.classList.contains("drawer") &&
      mobileNav.classList.contains("drawer--from-left") &&
      mobileNav.id === "mobile-menu-drawer"
    ) {
      mobileNav.style.setProperty("height", "", "important");
    }
  }

  private setTransparentBackground(): void {
    const element = this.document.querySelector(
      "#product-hero-7"
    ) as HTMLElement;

    if (
      element &&
      element.classList.contains("comp-lightbox") &&
      element.classList.contains("is-video") &&
      element.classList.contains("product-image")
    ) {
      element.style.setProperty("background", "transparent", "important");
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
  private setDisplayToBlockFulton(): void {
    setTimeout(() => {
      const parentElement = this.document.getElementById(
        "shopify-section-layout-header"
      ) as HTMLElement;

      if (parentElement) {
        const targetElement = parentElement.children[1] as HTMLElement;

        if (targetElement) {
          targetElement.style.setProperty("display", "block", "important");
        }
      }
    }, 100);
  }

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

  private removeHeightFromImageHeroContainerSMEL(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".image-hero__image-container"
      ) as NodeListOf<HTMLElement>;

      if (elements.length > 0) {
        elements.forEach((element) => {
          element.style.removeProperty("height");
        });
      }
    }, 2000);
  }

  private setHeightAutoForAllImageInnerSMEL(): void {
    setTimeout(() => {
      const parentElements = this.document.querySelectorAll(
        ".image.image-hero__image.image--animate.animation--lazy-load.loaded"
      ) as NodeListOf<HTMLElement>;

      if (parentElements.length > 0) {
        parentElements.forEach((parentElement) => {
          const childElements = parentElement.querySelectorAll(
            ".image__img"
          ) as NodeListOf<HTMLElement>;

          if (childElements.length > 0) {
            childElements.forEach((childElement) => {
              childElement.style.setProperty("height", "auto", "important");
            });
          }
        });
      }
    }, 3000);
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

    parentElements.forEach((parent: HTMLElement, parentIndex: number) => {
      // Find child elements within each parent that have style "display: none" and viewportwidth="100vw"
      const matchingElements = parent.querySelectorAll(
        'div[style*="display: none;"][viewportwidth="100vw"]'
      ) as NodeListOf<HTMLElement>;

      if (matchingElements.length > 0) {
        console.log(
          `Found ${
            matchingElements.length
          } matching element(s) inside parent #${
            parentIndex + 1
          } with class 'layout layout--collection'.`
        );

        // Remove display: none from each matching element
        matchingElements.forEach((element: HTMLElement, index: number) => {
          element.style.removeProperty("display");
          console.log(
            `Removed display: none from element #${index + 1} within parent #${
              parentIndex + 1
            }:`,
            element
          );
        });
      } else {
        console.log(
          `No matching elements found in parent #${
            parentIndex + 1
          } with class 'layout layout--collection'.`
        );
      }
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
  private updateBannerHeightBREEO(): void {
    const bannerElement = this.document.getElementById(
      'Banner-template--16295038844973__image_banner_DYeApg'
    ) as HTMLElement;
  
    if (bannerElement) {
      bannerElement.setAttribute('style', '');
      bannerElement.style.setProperty('height', '720px', 'important');
    }
  }

  private hideAllScalapayModals(): void {
    const modalElements = this.document.querySelectorAll('scalapay-modal-core') as NodeListOf<HTMLElement>;
  
    if (modalElements.length > 0) {
      modalElements.forEach((modalElement) => {
        modalElement.style.setProperty('display', 'none', 'important');
      });
    }
  }
  private updateDrawerMenuDisplayNuBest(): void {
    const element = this.document.querySelector(
      '.t4s-drawer-menu__close.t4s-pe-none.t4s-op-0.t4s-pf'
    ) as HTMLElement;
  
    if (element) {
      element.style.setProperty('display', 'none', 'important');
    }
  }
  
  
  private hideJstIframeElementNuBest(): void {
    const element = this.document.getElementById(
      '_jst-iframe-ff0f878ae2aa44168b3e310ce8eef2b6-92b9e5301c2811ee8c7cb55495ba6c2c-c5e2bdb1a4cf432c8e005e64d49f9368'
    ) as HTMLElement;
  
    if (element) {
      element.style.setProperty('display', 'none', 'important');
    }
  }
  private updateDescendantsDisplayAmie(): void {
    setTimeout(() => {
      const parentElement = this.document.querySelector('.r-1v6j6db') as HTMLElement;
  
      if (parentElement) {
        const descendants = parentElement.querySelectorAll('*') as NodeListOf<HTMLElement>;
  
        descendants.forEach((descendant) => {
          if (descendant.style.display === 'none') {
            descendant.style.setProperty('display', 'block', 'important');
          }
        });
      }
    }, 2000);
  }
  private updateHeaderSectionChildrenDisplayEXCISION(): void {
    const parentElement = this.document.querySelector(
      '.shopify-section.shopify-section-group-header-group.header-section.header-sticky'
    ) as HTMLElement;
  
    if (parentElement) {
      const children = parentElement.children;
      Array.from(children).forEach((child) => {
        const childElement = child as HTMLElement;
        if (childElement.style.display === 'none') {
          childElement.style.display = '';
          childElement.style.setProperty('display', 'block', 'important');
        }
      });
    }
  }
  
  
  
  
  private updateMenuDrawerAndInnerHeightEXCISION(): void {
    const drawerElement = this.document.querySelector(
      'menu-drawer#MenuDrawer.menu-drawer.drawer.drawer--start.z-30.fixed.bottom-0.left-0.h-full.w-full.pointer-events-none'
    ) as HTMLElement;
  
    if (drawerElement) {
      const drawerInnerElement = drawerElement.querySelector(
        '.drawer__inner.z-10.absolute.top-0.flex.flex-col.w-full.h-full.overflow-hidden'
      ) as HTMLElement;
  
      if (drawerInnerElement) {
        drawerInnerElement.style.setProperty('max-height', 'calc(100% - 60px)', 'important');
      }
    }
  }
  private updateFloatingAddToCartStylesKAHOOT(): void {
    setTimeout(() => {
      const addToCartElement = this.document.getElementById('floating-addToCart-container') as HTMLElement;
  
      if (addToCartElement && addToCartElement.classList.contains('floating-addToCart-container')) {
        addToCartElement.style.setProperty('display', 'block', 'important');
        addToCartElement.style.setProperty('left', 'auto', 'important');
        addToCartElement.style.setProperty('bottom', '0', 'important');
        addToCartElement.style.setProperty('transform', 'none', 'important');
      }
    }, 2000);
  }
  private updateFloatingAddToCartDisplaykahoot(): void {
    setTimeout(() => {
      const mainProductElement = this.document.getElementById(
        'MainProduct-template--15217807163474__main'
      ) as HTMLElement;
  
      if (mainProductElement) {
        const floatingAddToCartElement = mainProductElement.querySelector(
          '.floating-addToCart-container'
        ) as HTMLElement;
  
        if (floatingAddToCartElement) {
          const currentDisplay = window.getComputedStyle(floatingAddToCartElement).getPropertyValue('display');
          if (currentDisplay === 'none') {
            floatingAddToCartElement.style.removeProperty('display');
            floatingAddToCartElement.style.setProperty('display', 'block', 'important');
          }
        }
      }
    }, 5000);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

