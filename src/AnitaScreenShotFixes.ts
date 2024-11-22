export default class AnitaScreenShotFixes {
  private document: Document;
  private prodMode: boolean;

  constructor(dom: Document = document) {
    this.document = dom;
    this.prodMode = this.getRedirectType() === "dashboard";
    this.setupLoadEventListener();
  }

  private setupLoadEventListener(): void {
    window.addEventListener("load", () => this.init());
  }

  public init(): void {
    this.log("Initializing AnitaScreenShotFixes...");
    this.log(
      `Running in ${this.prodMode ? "production" : "non-production"} mode`
    );

    // Grouped logic into arrays for maintainability
    this.executeStyleUpdates([
      this.updateFloatingAddToCartStyles,
      this.removeHeightProperty,
      this.setTransparentBackground,
      this.setMobileMenuZIndexAndPosition,
      this.hideSearchForm,
      this.disableFlexOnMobileMenuBody,
      this.showGlobalOverlay,
      this.removeFixedPositionFromHeader,
      this.makeBackdropTransparent,
      this.setDisplayToBlock,
      this.setOpacityToHeroSideBySide,
      this.removeFixedPositionFromHeaderWithDelay,
      this.removeMinHeightAndOverflowWithDelay,
      this.removeDisplayNoneWithDelay,
      this.setStyleToRecommendationModal,
      this.setOpacityToProductCagesWithDelay,
      this.setDisplayToBlockForKachingBundlesWithDelay,
      this.removeAllInlineStylesWithDelay,
      this.updateSpecificElementHeightWithDelay,
      this.removeMarginTopFromContent,
      this.setPositionRelativeToSlideshowSlideTanitco,
      this.updateChildPosition,
      this.removeInlineStylesFromCurrencySwitcherChildWUNutrition,
      // this.updateFloatingAddToCartStyleskahoot,
      this.removeInlineStylesFromCurrencySwitcherChildWUNutrition,
      // this.updateElementtoDisplayKahoot,
    ]);
  }

  private executeStyleUpdates(updates: (() => void)[]): void {
    updates.forEach((update) => {
      const result = update.call(this);
      if (!result) {
        // console.error("Error during update method", update);
      }
    });
  }

  private log(message: string, ...optionalParams: any[]): void {
    if (!this.prodMode) {
      // console.log(`[DEBUG]: ${message}`, ...optionalParams);
    }
  }

  private getRedirectType(): "dashboard" | "locala" | "deves" | "dever" {
    const { hostname } = new URL(window.location.href);
    if (hostname.includes("localhost")) return "locala";
    if (hostname.includes("dashboard")) return "dashboard";
    if (hostname.includes("early-release")) return "dever";
    if (hostname.includes("earlystage")) return "deves";
    return "dashboard";
  }

  // Reusable helper to remove inline styles
  private removeInlineStyles(selector: string): void {
    const elements = this.document.querySelectorAll(
      selector
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => element.removeAttribute("style"));
  }

  private updateFloatingAddToCartStyles(): void {
    const element = this.document.getElementById(
      "floating-addToCart-container"
    ) as HTMLElement;
    if (element?.classList.contains("floating-addToCart-container")) {
      element.style.setProperty("display", "block", "important");
      element.style.setProperty("bottom", "0", "important");
      this.log("Updated floating add-to-cart styles");
    }
  }

  private removeHeightProperty(): void {
    const element = this.document.querySelector(
      "mobile-navigation.drawer.drawer--from-left#mobile-menu-drawer"
    ) as HTMLElement;
    if (element) {
      element.style.setProperty("height", "", "important");
      this.log("Removed height property from mobile navigation.");
    }
  }

  private setTransparentBackground(): void {
    const element = this.document.querySelector(
      "#product-hero-7.comp-lightbox.is-video.product-image"
    ) as HTMLElement;
    if (element) {
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
    const childElement = parentElement?.querySelector(
      ".global-header__mobile-menu__body"
    ) as HTMLElement;
    if (childElement) {
      childElement.style.setProperty("flex", "none", "important");
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
    const element = this.document.getElementById(
      "shopify-section-header"
    ) as HTMLElement;
    if (element?.classList.contains("shopify-section")) {
      element.style.removeProperty("position");
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
    const elements = [
      this.document.getElementById(
        "shopify-block-jebbit_product_quiz_builder_jebbit_campaign_url_7xczVR"
      ),
      this.document.querySelector("iframe.jebbit-iframe"),
    ];
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.setProperty("display", "block", "important");
      }
    });
  }

  private setOpacityToHeroSideBySide(): void {
    const parentElement = this.document.querySelector(
      ".slideshow__slide.is-selected"
    ) as HTMLElement;
    const childElement = parentElement?.querySelector(
      ".hero__sidebyside-text--left"
    ) as HTMLElement;
    if (childElement) {
      childElement.style.opacity = "1";
    }
  }

  private removeFixedPositionFromHeaderWithDelay(): void {
    setTimeout(() => this.removeFixedPositionFromHeader(), 100);
  }

  private removeMinHeightAndOverflowWithDelay(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "gp-carousel-ft-gp-carousel-gKJd-U6nmQ-template--17982265458943__gp_section_523067330180154432-7635732070655-template--17982265458943__gp_section_523067330180154432"
      ) as HTMLElement;
      if (element?.classList.contains("gp-h-full")) {
        element.style.removeProperty("min-height");
        element.style.removeProperty("overflow");
      }
    }, 100);
  }

  private removeDisplayNoneWithDelay(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".gp-carousel-dot-container"
      ) as NodeListOf<HTMLElement>;
      elements.forEach((element) => element.style.removeProperty("display"));
    }, 100);
  }

  private setStyleToRecommendationModal(): void {
    const containerElement = this.document.querySelector(
      ".recommendation-modal__container"
    ) as HTMLElement;
    if (containerElement) {
      containerElement.style.setProperty("display", "block", "important");
    }
  }

  private setOpacityToProductCagesWithDelay(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".product-card__image--secondary"
      ) as NodeListOf<HTMLElement>;
      elements.forEach((element) =>
        element.style.setProperty("opacity", "0", "important")
      );
    }, 100);
  }

  private setDisplayToBlockForKachingBundlesWithDelay(): void {
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

  private removeAllInlineStylesWithDelay(): void {
    setTimeout(() => {
      const elements = this.document.querySelectorAll(
        ".viair-header-mega-menu"
      ) as NodeListOf<HTMLElement>;
      elements.forEach((element) => element.removeAttribute("style"));
    }, 1000);
  }

  private updateSpecificElementHeightWithDelay(): void {
    setTimeout(() => {
      const element = this.document.querySelector(
        '[data-rid="0623162f-5f5e-4f4c-9c7e-f50d1df9f84b"]'
      ) as HTMLElement;
      if (element) {
        element.style.setProperty("height", "12vh", "important");
      }
    }, 1000);
  }

  private removeMarginTopFromContent(): void {
    const element = this.document.querySelector(
      ".content-for-layout.focus-none"
    ) as HTMLElement;
    element?.style.removeProperty("margin-top");
  }
  private setPositionRelativeToSlideshowSlideTanitco(): void {
    const element = this.document.querySelector(
      ".slideshow__slide.slideshow__slide--template--16650453188833__730c5010-4eb1-4723-8b3d-06970325ab13-1666466508afdc26e1-0.d-flex.justify-content-center.align-items-center"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("position", "relative", "important");
    }
  }

  private updateChildPosition(): void {
    const sectionElement = this.document.getElementById(
      "shopify-section-template--18622508073185__659ca9df-371f-4701-bb4c-92dd5f2b0c43"
    ) as HTMLElement;

    if (sectionElement) {
      const flickitySlider = sectionElement.querySelector(
        ".flickity-slider"
      ) as HTMLElement;

      if (flickitySlider) {
        const children = Array.from(flickitySlider.children) as HTMLElement[];
        children.forEach((child: HTMLElement) => {
          child.style.setProperty("position", "relative", "important");
        });
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
 /*  private updateFloatingAddToCartStyleskahoot(): void {
    const element = this.document.getElementById(
      "floating-addToCart-container"
    ) as HTMLElement;

    if (element) {
      element.style.setProperty("transform", "none", "important");
      element.style.setProperty("left", "auto", "important");
    }
  } */

/*   private updateElementtoDisplayKahoot(): void {
    setTimeout(() => {
      const element = this.document.getElementById(
        "floating-addToCart-container"
      ) as HTMLElement;
      if (element) {
        element.style.setProperty("display", "block", "important");
      }
      this.log("Updated floating add-to-cart display for Kahoot");
    }, 5000);
  } */
}
