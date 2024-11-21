import Common from "./Common";

export default class RyanScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.LogoxUpdatePageElements();
      this.setElementDisplayToBlock();
      this.FeldluftUpdatePageElements();
      this.QuotidienUpdateElementHeight();
      this.GodzillaUpdateHeaderPadding();
      this.ArcticUpdateGalleryCells();
      this.CoThirtySixshowBarsInContainer();
      this.RhinoUsaremoveWidthFromMenuDrawer();
      this.PenguinDojoupdateElements();
      this.aktlondonUpdatePageElements();
      this.heyhairMobileToggleButton();
      this.springerupdatePageElements();
      this.OliviaPearlupdateHeader();
      this.hideSearchElementIfToggleExists();
      this.BraceAbilityupdateHeader();
      this.UpdateIframeSrc();
      this.PetsmontremoveExtraFooter();
      this.Mimibeltupdatefooter();
      this.HampshireupdateHeader();
      this.EdenboostUpdateThumbnailHeight();
      this.VIAIRremoveOpacityFromMegaMenu();
      this.observeOverlays();
      this.glowupdateElementsVisibility();
      this.Ministryofsupplyfixes();
      this.YaqeenupdateCurrencySwitcher();
      this.ReverseLifeUpdateImage();
      this.adjustHeaderPosition();
      this.WoojerUpdateMinHeightAndVisibility();
      this.YaqeenUpdateBackground();
      this.NubianceUpdateBackground();
      this.NuveremoveIsEmptyClass();
      this.NourishedhideSubmenuDrawers();
      this.beRootedUpdateBackground();
      this.muteAllMediaElements();
      this.KhaiteUpdateHeaderMargin();
      this.SmelUpdateHeight();
      this.SmelUpdateOpacity();
      this.disablePointerEventsOnAbsolutePseudoElements();
      this.GraymatterhideNextDivAfterIframe();
      this.hideShopifyHeaderGroup();
      this.KhaiteUpdateHeight();
      this.BenchmadeupdateImageSrcsetToHttps();
      this.modularclosetsaddAnimatedClass();
      this.bigkizzyFixSlideshowbox();
      this.canopyremoveOverflowFromProductMediaList();
      this.updateCartPopupHeight();
      this.NectaraddActiveClass();
      this.toggleMobileNavDataOpen();
      this.toggleHeatmapClassOnDrawer();
      this.FeelgroundssetNavButtonDisplay();
      this.ModelTrainupdateSlideoutDisplay();
      this.PuresportupdateProductCardMedia();
      this.BotaniqueParisupdateOrderHeading();
      this.TFSCaddClassToSplideChild();
      this.DenverCoUpdateResponsiveDialogAndCover();
      this.LiveLoveLocksupdateZoomContainerOpacity();
      this.MaxLilyupdateMinHeightForMainContent();
      this.NutrinicremoveHeightFromImageInSlider();
      this.UnderdogupdateLazyLoadImages();
      this.MysticBarrelsupdateProductImageHeight();
      this.UpcircleUSsetupFlipContentToggle();
      this.updateSecondaryImageOpacity();
      this.ThomsonCarterupdateViewportHeight();
      this.primalherbssetupMobileMenuToggle();
      this.SvelteChichideFormEmbed();
      this.NeathideAgeVerifier();
      this.AlphaLionhideVideoModal();
      this.WeekChallengeupdateGalleryStyles();
      this.McAfeeupdateDrawerHeight();
      this.PectivupdateSearchBarOpacity();
      this.VitalityupdateHeroBannerDisplay();
      this.BedsRUshideOwlClonedItems();
      this.FireDeptCoffeeupdateSubmenuDisplay();
      this.eSafetyupdateMegaMenuBackground();
      this.RinseBathBodyhideHeaderToolsLeft();
      // this.preventSidebarDisplayNone();
    };
    this.exec({ containerId, debugMode, func });
  }

  // theLogOx
  private LogoxUpdatePageElements() {
    const posts = this.dom.querySelectorAll(
      ".post_img.slick-slide"
    ) as NodeListOf<HTMLElement>;
    posts.forEach((post) => {
      const img = post.querySelector("img");
      if (img) {
        img.style.height = "";
      }
    });

    const elements = this.dom.querySelectorAll(
      ".featured-collection-section"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.classList.remove("pt-6", "pt-9", "pb-9");
      element.style.paddingTop = "";
      element.style.paddingBottom = "";
      element.style.height = "";
    });
  }

  //Feldluft
  private FeldluftUpdatePageElements() {
    const bulletPointsContainer = this.dom.querySelector(
      ".dbtfy-product-bullet-points-container"
    ) as HTMLElement;
    const bulletPointsUl = this.dom.querySelector(
      ".dbtfy-product-bullet-points ul"
    ) as HTMLElement;
    if (bulletPointsContainer && bulletPointsUl) {
      bulletPointsContainer.removeAttribute("hidden");
      bulletPointsUl.classList.add(
        ...Array.from(bulletPointsUl.parentElement?.classList || []),
        "justify-content-start",
        "text-start",
        "dbtfy-product-bullet-points--items-block"
      );
      bulletPointsUl.setAttribute(
        "data-section-settings",
        bulletPointsUl.parentElement?.getAttribute("data-section-settings") ||
          ""
      );
      bulletPointsUl
        .querySelectorAll("li")
        .forEach(
          (li) =>
            (li.style.display =
              JSON.parse(li.getAttribute("data-block-settings") || "{}")
                .collection === "bestseller"
                ? ""
                : "none")
        );
      bulletPointsContainer.appendChild(bulletPointsUl);
    }
  }

  //Quotidien
  private QuotidienUpdateElementHeight() {
    const elements = this.dom.querySelectorAll(
      ".custom-content.grid-masonary.grid-masonary-1598306753941"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      const actualHeight = element.getAttribute("actualheight");
      if (actualHeight) {
        element.style.height = actualHeight;
      }
    });
  }

  //Godzilla
  private GodzillaUpdateHeaderPadding() {
    const gridLayouts = this.dom.querySelectorAll(
      ".collection-grid__layout"
    ) as NodeListOf<HTMLElement>;
    gridLayouts.forEach((layout) => {
      const header = layout.querySelector(
        ".collection-grid__header"
      ) as HTMLElement;
      if (header) {
        header.style.paddingTop = "260px";
      }
    });
  }

  //Arctic Cool
  private ArcticUpdateGalleryCells() {
    const swiperWrapper = this.dom.querySelector(
      ".swiper-wrapper"
    ) as HTMLElement;
    if (swiperWrapper) {
      const galleryCells = swiperWrapper.querySelectorAll(
        ".gallery-cell"
      ) as NodeListOf<HTMLElement>;
      galleryCells.forEach((cell) => {
        cell.style.width = "249.2px";
        if (cell.style.display === "none") {
          cell.style.display = "";
        }
        cell.style.maxWidth = "";
        cell.style.minWidth = "";
      });
    }
  }

  private setElementDisplayToBlock() {
    const selectors = [
      ".dbtfy-color-swatches-container",
      ".dbtfy-color-swatches",
      ".dbtfy-faq",
      ".dbtfy-product-bullet-points-container",
      ".hamburger__line",
      ".swiper-button-next",
      ".swiper-button-prev",
    ];

    selectors.forEach((selector) => {
      if (selector.startsWith(".")) {
        this.allElements(selector)?.forEach((el: HTMLElement) =>
          this.displayBlock(el, true)
        );
      } else if (selector.startsWith("#")) {
        const el = document.querySelector(selector) as HTMLElement;
        if (el) {
          this.displayBlock(el, true);
        }
      }
    });
    const style = this.dom.createElement("style");
    style.innerHTML = `#fast-simon-serp-app { display: block !important; }`;
    this.dom.head.appendChild(style);
  }

  // CoThirty Six
  private CoThirtySixshowBarsInContainer() {
    const containers = this.dom.querySelectorAll(
      ".mb_container"
    ) as NodeListOf<HTMLElement>;
    containers.forEach((container) => {
      const bar1 = container.querySelector(".bar1") as HTMLElement;
      const bar2 = container.querySelector(".bar2") as HTMLElement;
      if (bar1 && bar2) {
        bar1.style.display = "";
        bar2.style.display = "";
      }
    });
  }

  //RhinoUsa
  private RhinoUsaremoveWidthFromMenuDrawer() {
    const menuDetails = this.dom.querySelectorAll(
      ".ms-menu-details"
    ) as NodeListOf<HTMLElement>;
    menuDetails.forEach((element) => {
      const menuDrawer = element.querySelector(
        ".ms-menu-drawer"
      ) as HTMLElement;
      if (menuDrawer) {
        if (menuDrawer.style.width === "100%") {
          menuDrawer.style.setProperty("width", "auto", "important");
          menuDrawer.style.setProperty("min-width", "max-content", "important");
        }
      }
    });
  }

  //Penguin Dojo
  private PenguinDojoupdateElements() {
    const drawerMenuElement = this.dom.getElementById(
      "DrawerMenu"
    ) as HTMLElement;
    if (drawerMenuElement) drawerMenuElement.style.removeProperty("height");

    const overlayElement = this.dom.getElementById(
      "GlobalLoadingOverlayBlank"
    ) as HTMLElement;
    if (overlayElement) overlayElement.classList.add("hidden");

    const toolbarElement = this.dom.getElementById(
      "enable-toolbar"
    ) as HTMLElement;
    if (toolbarElement) toolbarElement.remove();

    const hamburgerToggler = this.dom.getElementById(
      "DrawerMenuToggler"
    ) as HTMLElement;
    if (hamburgerToggler) {
      const hamburgerLines = hamburgerToggler.querySelectorAll(
        ".hamburger__line"
      ) as NodeListOf<HTMLElement>;
      hamburgerLines.forEach((line) => (line.style.display = "block"));
    }
  }

  //aktlondon
  private aktlondonUpdatePageElements() {
    (
      this.dom.querySelector("video.md\\:lp-block") as HTMLElement
    )?.style.setProperty("height", "auto", "important");
    (
      this.dom.querySelector("#widget_cont #widget-header") as HTMLElement
    )?.style.setProperty("overflow", "hidden", "important");
    (
      this.dom.querySelector("#widget_cont #widget-header") as HTMLElement
    )?.style.setProperty("height", "600px", "important");
  }

  //hey Hair
  private heyhairMobileToggleButton() {
    this.dom
      .querySelectorAll(".mobile-header.py-2.w3_bg.sticky--enabled")
      .forEach((mobileHeader: HTMLElement) => {
        const toggleButton = mobileHeader.querySelector(
          ".mobile-menu__toggle-button.mobile-toggle__position--left.w3_bg"
        ) as HTMLElement;

        if (toggleButton && toggleButton.style.display === "none") {
          toggleButton.style.setProperty("display", "", "important");
        }
      });
  }

  private updateCartPopupHeight() {
    this.dom.querySelectorAll("#UpcartPopup #CartPopup").forEach((childElement) => {
      const element = childElement as HTMLElement;
      element.style.removeProperty("height");
      element.style.setProperty("height", "auto", "important");
    });
  }

  //springerpets
  private springerupdatePageElements() {
    this.dom.querySelectorAll(".product-image-container").forEach((parent) => {
      const child = parent.querySelector("#product-hero-7") as HTMLElement;
      if (child) {
        child.style.removeProperty("opacity");
      }
    });

    this.dom.querySelectorAll(".spo-loaded").forEach((parent) => {
      const miniCart = parent.querySelector(
        "#shopify-section-global-minicart"
      ) as HTMLElement;
      if (miniCart) {
        miniCart.style.display = "none";
      }
    });
  }

  //Olivia Pearl
  private OliviaPearlupdateHeader() {
    if (window.location.href.includes("oliviaandpearl")) {
      this.dom
        .querySelectorAll("#shopify-section-header")
        .forEach((headerElement: HTMLElement) => {
          if (headerElement.style.position === "initial") {
            headerElement.style.setProperty("position", "fixed", "important");
          }
        });
    }
  }

  // persmount
  private hideSearchElementIfToggleExists() {
    const headerSearchElement = this.dom.querySelector(
      ".header-search"
    ) as HTMLElement;
    if (
      headerSearchElement &&
      headerSearchElement.querySelector(".header-search-toggle")
    ) {
      headerSearchElement.style.setProperty("display", "none");
    }
  }

  //BraceAbility
  private BraceAbilityupdateHeader() {
    const parentElement = this.dom.querySelector(
      ".transition-body"
    ) as HTMLElement;
    if (parentElement) {
      const headerElement = parentElement.querySelector(
        "#shopify-section-header"
      ) as HTMLElement;
      if (headerElement?.style.position === "fixed") {
        headerElement.style.setProperty("position", "relative", "important");
      }
      const mainContentElement = parentElement.querySelector(
        "#MainContent"
      ) as HTMLElement;
      if (mainContentElement) {
        mainContentElement.style.marginTop = "";
      }
    }
  }

  //Petsmont
  private PetsmontremoveExtraFooter() {
    const footerSections = this.dom.querySelectorAll<HTMLElement>(
      "#shopify-section-sections--18006968729850__footer.shopify-section.shopify-section-group-footer-group"
    );

    footerSections.forEach((section, index) => {
      if (index > 0) section.remove();
    });

    this.dom
      .querySelectorAll<HTMLElement>(".col-lg-3.col-md-3.col-sm-6.col-6")
      .forEach((parent) => {
        const ulElement = parent.querySelector<HTMLElement>(
          ".list-unstyled.li-space-lg.p-small"
        );
        ulElement?.querySelectorAll<HTMLElement>("li a").forEach((link) => {
          link.style.color = "#dfd8d2";
        });
      });
  }

  //Mimi Belt
  private Mimibeltupdatefooter() {
    const targetElement = document.querySelector(
      ".footer.color-scheme-sections--18119191265494__footer.color-accent-1.gradient.section-sections--18119191265494__footer-padding.animate-section.animate--hidden.animate--shown"
    ) as HTMLElement;
    if (targetElement) {
      const childrenWithOpacityZero = targetElement.querySelectorAll("*");
      childrenWithOpacityZero.forEach((child) => {
        const childElement = child as HTMLElement;
        const computedOpacity = window.getComputedStyle(childElement).opacity;
        if (computedOpacity === "0") {
          childElement.style.setProperty("opacity", "1", "important");
        }
      });
    }
  }

  //Hampshire
  private HampshireupdateHeader() {
    const parentElement = this.dom.querySelector(
      ".template-product-.bg-background"
    ) as HTMLElement;
    if (parentElement) {
      const headerElement = parentElement.querySelector(
        "#shopify-section-header"
      ) as HTMLElement;
      if (headerElement?.style.position === "fixed") {
        headerElement.style.setProperty("position", "relative", "important");
      }
    }
  }

  //Edenboost
  private EdenboostUpdateThumbnailHeight() {
    this.dom
      .querySelectorAll(
        ".text-link.product-single__thumbnail.product-single__thumbnail--product-alphacleanse-v4-template-radio"
      )
      .forEach((parentElement: HTMLElement) => {
        const childElement = parentElement.querySelector(
          ".product-single__thumbnail-image"
        ) as HTMLElement;

        if (childElement && childElement.style.height) {
          childElement.style.setProperty("height", "max-content", "important");
        }
      });
  }

  //Grow
  private GrowhideLightboxOverlays() {
    const overlays = this.dom.querySelectorAll<HTMLElement>(
      "body > .lightbox-overlay"
    );
    let hasVisibleOverlay = false;

    overlays.forEach((overlay) => {
      const opacity = getComputedStyle(overlay).opacity;
      if (opacity === "1") {
        hasVisibleOverlay = true;
      }
    });

    if (hasVisibleOverlay) {
      const style = this.dom.createElement("style");
      style.innerHTML = `
        body > .lightbox-overlay {
          opacity: 0 !important;
        }
        body > .lightbox-overlay * {
          opacity: 0 !important;
        }
      `;
      this.dom.head.appendChild(style);
    }
  }

  private observeOverlays() {
    if (this.dom && this.dom.body) {
      const observer = new MutationObserver(() => {
        this.GrowhideLightboxOverlays();
        this.ReduxupdateHeaderPosition();
        this.WarriorLabsupdateMenuHeight();
        this.Upcircleupdatemaincontent();
        this.NextAdventureSetSubmenuHeight();
        this.NitesightssetChildOpacities();
        this.ShieldEUsetChildOpacities();
        this.PulsioShowHiddenFAQAnswers();
        this.bigkizzyFixSlideshowbox();
        this.SerenityremoveMinHeightFromVcRow();
        this.DetoxMarketupdateSrcsetFromSrc();
        this.KvEssentialsresetImageHeight();
        this.DeuxupdateAllLSProductDisplays();
        this.RemiupdateLightboxWrapperOpacity();
        this.AndieupdateDisplayStyleInPortals();
      });

      observer.observe(this.dom.body, { childList: true, subtree: true });
    }
  }

  private glowupdateElementsVisibility() {
    const updateVisibility = (
      parentSelector: string,
      childSelector: string
    ) => {
      this.dom.querySelectorAll(parentSelector).forEach((parent) => {
        const children = parent.querySelectorAll(
          childSelector
        ) as NodeListOf<HTMLElement>;
        if (children.length > 0) {
          const style = this.dom.createElement("style");
          let styleContent = "";

          children.forEach((child, index) => {
            const uniqueClass = `child-visible-${index}`;
            child.classList.add(uniqueClass);
            child.setAttribute("data-visible", "true");
            styleContent += `.${uniqueClass} { opacity: 1 !important; } `;
          });

          style.innerHTML = styleContent;
          this.dom.head.appendChild(style);
        }
      });
    };

    updateVisibility(
      ".padding.background-light.text-align-center",
      ".img.hover-plus.margin-bottom-1250.soft-load"
    );
    updateVisibility(
      ".content.text-align-center",
      ".testimonial-carousel.soft-load"
    );
    updateVisibility(
      ".content.flex.flex-row.flex-center",
      ".img.half.left.soft-load"
    );
    updateVisibility(".content", ".soft-load");
    updateVisibility(".half.right", ".soft-load");
  }

  //VIAIR
  private VIAIRremoveOpacityFromMegaMenu() {
    const style = this.dom.createElement("style");
    style.innerHTML = `
      .viair-header-link-first-level .viair-header-mega-menu {
        opacity: 0 !important;
      }
      .viair-header-link-first-level:hover .viair-header-mega-menu {
        opacity: 1 !important;
      }
    `;
    this.dom.head.appendChild(style);
  }

  //Redux
  private ReduxupdateHeaderPosition() {
    this.dom
      .querySelectorAll(".shopify-section.index-section.index-section--flush")
      .forEach((section: HTMLElement) => {
        const contentWrapper = section.querySelector(
          ".content__wrapper.vertical-center.horizontal-left.mobile--content_overlay"
        ) as HTMLElement;

        contentWrapper?.style.setProperty("padding-top", "0", "important");
        contentWrapper?.style.setProperty("padding-bottom", "0", "important");
        contentWrapper?.style.removeProperty("height");
        const styleTag = document.createElement("style");
        styleTag.innerHTML = `
          .content__wrapper.vertical-center.horizontal-left.mobile--content_overlay {
            height: auto !important;
          }
        `;
        document.head.appendChild(styleTag);
      });
  }

  //Ministry of Supply
  private Ministryofsupplyfixes() {
    const updateHeight = (
      elements: NodeListOf<HTMLElement>,
      attr: string,
      divisor: number,
      cssProp: string
    ) => {
      elements.forEach((parent) => {
        const firstChildElement = parent.querySelector(
          ".flex.flex-col.relative"
        ) as HTMLElement | null;
        if (firstChildElement) {
          const value = parseFloat(firstChildElement.getAttribute(attr) || "0");
          if (!isNaN(value)) {
            const computedValue = Math.floor(value / divisor);
            const childElements = parent.querySelectorAll(
              ".flex.flex-col.relative"
            ) as NodeListOf<HTMLElement>;
            childElements.forEach((child) =>
              child.style.setProperty(cssProp, `${computedValue}px`)
            );
          }
        }
      });
    };

    const gridElements = this.dom.querySelectorAll(
      ".grid.h-full"
    ) as NodeListOf<HTMLElement>;
    updateHeight(gridElements, "elementscrollheight", 13, "--slider-height");

    const relativeElements = this.dom.querySelectorAll(
      ".relative.grid.overflow-x-auto.scrollbar-none.overflow-y-hidden.snap-mandatory.-mx-container-fullwidth.scroll-px-container-fullwidth.px-container-fullwidth.snap-x"
    ) as NodeListOf<HTMLElement>;
    relativeElements.forEach((parent) => {
      const childElements = parent.querySelectorAll(
        ".relative"
      ) as NodeListOf<HTMLElement>;
      childElements.forEach((child) => {
        const value = parseFloat(child.getAttribute("actualheight") || "0");
        if (!isNaN(value)) {
          const computedValue = Math.floor(value / 13);
          child.style.setProperty("min-height", `${computedValue}px`);
        }
      });
    });

    const styleElement = document.createElement("style");
    styleElement.textContent = `
      .shrink-0.max-w-full.w-full.h-full .product-card--product-card {
        display: block !important;
      }
    `;
    document.head.appendChild(styleElement);
  }

  //Warrior Labs
  private WarriorLabsupdateMenuHeight() {
    this.dom
      .querySelectorAll(".main-menu__disclosure.has-motion")
      .forEach((parent: HTMLElement) => {
        const childElement = parent.querySelector(
          ".main-menu__content.has-motion.justify-center"
        ) as HTMLElement;

        childElement?.style.removeProperty("height");

        const styleTag = document.createElement("style");
        styleTag.innerHTML = `
          .main-menu__content.has-motion.justify-center {
            height: auto !important;
          }
        `;
        document.head.appendChild(styleTag);
      });
  }

  //Yaqeen Books
  private YaqeenupdateCurrencySwitcher() {
    this.dom
      .querySelectorAll(".doubly-nice-select")
      .forEach((parent: HTMLElement) => {
        const childElement = parent.querySelector(".list") as HTMLElement;

        if (childElement?.style.opacity === "1") {
          childElement.style.opacity = "0";
        }

        const styleTag = document.createElement("style");
        styleTag.innerHTML = `
          .doubly-nice-select.open .list {
            opacity: 1 !important;
          }
        `;
        document.head.appendChild(styleTag);
      });
  }

  private YaqeenUpdateBackground() {
    this.dom
      .querySelectorAll("#Details-menu-drawer-container")
      .forEach((parentElement: HTMLElement) => {
        parentElement
          .querySelectorAll("#menu-drawer")
          .forEach((childElement: HTMLElement) => {
            childElement.style.setProperty(
              "background-color",
              "revert-layer",
              "important"
            );
          });
      });
  }

  //Denver Headshot Company
  private DenverCoUpdateResponsiveDialogAndCover() {
    setTimeout(() => {
      this.dom.querySelector(".wp-block-navigation__responsive-container #modal-1-content")?.setAttribute("style", "margin-top: 0px !important");
      this.dom.querySelectorAll('.wp-block-cover .wp-block-cover__background').forEach((backgroundElement) => {
        (backgroundElement as HTMLElement).style.setProperty('opacity', '0', 'important');
      });
    }, 2000);
  }

  //Upcircle
  private Upcircleupdatemaincontent() {
    this.dom
      .querySelectorAll(".index")
      .forEach((parentElement: HTMLElement) => {
        const childElement = parentElement.querySelector(
          "#template-index"
        ) as HTMLElement;
        if (childElement) {
          childElement.style.removeProperty("height");

          const styleElement = document.createElement("style");
          styleElement.textContent = `
          #template-index {
            height: max-content !important;
          }
        `;
          document.head.appendChild(styleElement);
        }
      });
  }

  //Reverse Life
  private ReverseLifeUpdateImage() {
    this.dom
      .querySelectorAll(".footer-middle-container")
      .forEach((parentElement: HTMLElement) => {
        parentElement
          .querySelectorAll(".social-icon img, .designed-by img")
          .forEach((imgElement: HTMLImageElement) => {
            if (imgElement.src.includes("_430x")) {
              imgElement.src = imgElement.src.replace("_430x", "_300x");
            }
          });
      });
  }

  // Woojer
  private WoojerUpdateMinHeightAndVisibility() {
    this.dom
      .querySelectorAll(".sc-kqGpvY")
      .forEach((parentElement: HTMLElement) => {
        parentElement
          .querySelectorAll(
            ".sc-dhKdPU.hjOBND.pf-7_.pf-r.pf-c-cm.pf-r-eh, .sc-dhKdPU.hjOBND.pf-58_.fortnitehero.pf-r.pf-c-cm.pf-r-eh"
          )
          .forEach((childElement: HTMLElement) => {
            childElement.style.setProperty("min-height", "auto", "important");
          });
      });

    if (!document.querySelector('#visibilityStyle')) {
        const style = document.createElement('style');
        style.id = 'visibilityStyle';  
        style.innerHTML = '.pf-c .sc-iapVNj.iUcVvL { visibility: visible !important; }';
        document.head.appendChild(style);
    }
}

  //Nubiance
  private NubianceUpdateBackground() {
    this.dom
      .querySelectorAll(".menu__item.grandparent.kids-2.no-images")
      .forEach((parentElement: HTMLElement) => {
        parentElement
          .querySelectorAll(".header__dropdown")
          .forEach((childElement: HTMLElement) => {
            childElement.style.setProperty("background", "white", "important");
          });
      });
  }

  //Nuve
  private NuveremoveIsEmptyClass() {
    this.dom
      .querySelectorAll("cart-items.page-width.is-empty")
      .forEach((cartItemElement: HTMLElement) => {
        cartItemElement.classList.remove("is-empty");
      });
  }

  //Nourished
  private NourishedhideSubmenuDrawers() {
    this.dom
      .querySelectorAll(".mobile-nav__link")
      .forEach((parentElement: HTMLElement) => {
        const submenuDrawer = parentElement.querySelector(
          ".mobile-nav__submenu-drawer"
        );
        if (submenuDrawer) {
          (submenuDrawer as HTMLElement).style.visibility = "hidden";
        }
      });
  }

  //Next Adventure
  private NextAdventureSetSubmenuHeight() {
    this.dom
      .querySelectorAll(".navmenu-item")
      .forEach((parentElement: HTMLElement) => {
        const submenu = parentElement.querySelector(
          ".navmenu-submenu"
        ) as HTMLElement | null;
        if (submenu) submenu.style.removeProperty("height");
      });
  
    if (!document.getElementById("next-adventure-submenu-style")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "next-adventure-submenu-style";
      styleSheet.innerHTML = `
          .navmenu-item .navmenu-submenu {
              height: revert-layer !important;
          }
      `;
      document.head.appendChild(styleSheet);
    }
  }

  //be Rooted
  private beRootedUpdateBackground() {
    this.dom
      .querySelectorAll(".menu-drawer-container")
      .forEach((parentElement: HTMLElement) => {
        parentElement
          .querySelectorAll("#menu-drawer")
          .forEach((childElement: HTMLElement) => {
            childElement.style.setProperty(
              "background-color",
              "revert-layer",
              "important"
            );
          });
      });
  }

  //Smel
  private SmelUpdateOpacity() {
    const style = this.dom.createElement("style");
    style.innerHTML = `
        .product-item__image-link .product-item__image--two {
            opacity: 0 !important;
        }
    `;
    this.dom.head.appendChild(style);
  }

  private SmelUpdateHeight() {
    this.dom.querySelectorAll(".drawer-menu__panel").forEach((panel) => {
      ["bottom", "all-links", "contents"].forEach((cls) => {
        const el = panel.querySelector(`.drawer-menu__${cls}`) as HTMLElement;
        if (el) el.style.setProperty("height", "revert-layer", "important");
      });
    });
  }

  //Graymatter Labs
  private GraymatterhideNextDivAfterIframe() {
    this.dom
      .querySelectorAll("iframe.alia-iframe.left")
      .forEach((iframeElement: HTMLIFrameElement) => {
        const nextDiv =
          iframeElement.nextElementSibling?.tagName === "DIV"
            ? (iframeElement.nextElementSibling as HTMLElement)
            : null;
        nextDiv?.style.setProperty("display", "none", "important");
      });
  }

  //muteMediaElements
  private muteAllMediaElements() {
    const self = this;

    const muteMedia = () => {
      self.dom
        .querySelectorAll("audio, video")
        .forEach((mediaElement: HTMLMediaElement) => {
          mediaElement.muted = true;
        });
    };

    muteMedia();
    window.addEventListener("load", muteMedia);
    const interval = setInterval(muteMedia, 1000);
    setTimeout(() => clearInterval(interval), 5000);
  }

  //Khaite
  private KhaiteUpdateHeaderMargin() {
    const self = this;

    function updateHeaderMargin() {
      const parentElements = self.dom.querySelectorAll("class-controller");
      parentElements.forEach((parentElement: HTMLElement) => {
        const childElements = parentElement.querySelectorAll(
          "#shopify-section-header"
        );
        childElements.forEach((childElement: HTMLElement) => {
          childElement.style.removeProperty("margin-top");
          childElement.style.setProperty("margin-top", "auto", "important");
        });
      });
    }

    updateHeaderMargin();
    window.addEventListener("load", updateHeaderMargin);
    const interval = setInterval(updateHeaderMargin, 1000);
    setTimeout(() => clearInterval(interval), 5000);
  }

  private KhaiteUpdateHeight() {
    this.dom.querySelectorAll(".menu-item").forEach((parent) => {
      const submenu = parent.querySelector(
        ".menu-item__submenu"
      ) as HTMLElement;
      if (submenu) {
        submenu.style.removeProperty("height");
        submenu.style.removeProperty("min-height");
        submenu.style.setProperty("min-height", "max-content", "important");
        submenu.style.setProperty("height", "max-content", "important");
      }
    });
  }

  //Nitesights
  private NitesightssetChildOpacities() {
    this.dom.querySelectorAll(".comparison-slider").forEach((parent) => {
      const child = parent.querySelector(
        ".comparison-slider__input"
      ) as HTMLElement;
      if (child) {
        child.style.setProperty("opacity", "revert-layer", "important");
      }
    });

    this.dom.querySelectorAll(".hotspot").forEach((parent) => {
      const child = parent.querySelector(".hotspot__content") as HTMLElement;
      if (child) {
        child.style.setProperty("opacity", "revert-layer", "important");
      }
    });
  }

  //Shield EU
  private ShieldEUsetChildOpacities() {
    this.dom
      .querySelectorAll(".elementor-location-header")
      .forEach((parent) => {
        const child = parent.querySelector(
          ".elementor-element.elementor-element-941829d"
        ) as HTMLElement;
        if (child) {
          child.style.removeProperty("opacity");
          child.style.setProperty("opacity", "revert-layer", "important");
        }
      });
  }

  //Benchmade
  private BenchmadeupdateImageSrcsetToHttps() {
    this.dom.querySelectorAll(".relative.h-0").forEach((parent) => {
      const childImage = parent.querySelector(".image.absolute");
      if (childImage) {
        ["src", "srcset"].forEach((attr) => {
          if (childImage.hasAttribute(attr)) {
            childImage.setAttribute(
              attr,
              childImage.getAttribute(attr).replace(/http:\/\//g, "https://")
            );
          }
        });
      }
    });
  }

  //modular closets
  private modularclosetsaddAnimatedClass() {
    this.dom.querySelectorAll(".wowo").forEach((element) => {
      if (element) {
        element.classList.add("animated");
      }
    });
  }

  //Pulsio AIR
  private PulsioShowHiddenFAQAnswers() {
    this.dom.querySelectorAll('[classification^="FAQ Question"]').forEach((parent) => {
      const hiddenChild = Array.from(parent.children).find(
        (child) => window.getComputedStyle(child).display === 'none'
      ) as HTMLElement;
  
      if (hiddenChild) {
        hiddenChild.style.setProperty('display', 'block', 'important');
      }
    });
  }  

  //big kizzy hair
  private bigkizzyFixSlideshowbox() {
    setTimeout(() => {
        const elements = this.dom.querySelectorAll('.slideshow__box .slideshow__card') as NodeListOf<HTMLElement>;

        if (elements.length > 0) {
            elements.forEach((element) => {
                element.style.setProperty('opacity', 'revert-layer', 'important');
            });
        }
    }, 2000);
  }

  //canopy
  private canopyremoveOverflowFromProductMediaList() {
    setTimeout(() => {
        const elements = this.dom.querySelectorAll('.product__media-list .slick-list.draggable') as NodeListOf<HTMLElement>;

        if (elements.length > 0) {
            elements.forEach((element) => {
                element.style.setProperty('overflow', 'revert-layer', 'important');
            });
        }
    }, 2000);
  }

  //Serenity
  private SerenityremoveMinHeightFromVcRow() {
    this.dom
        .querySelectorAll('.vc_container')
        .forEach((container) => {
            const child = container.querySelector('.vc_row-o-columns-middle');
            if (child) {
                (child as HTMLElement).style.removeProperty('min-height');
                (child as HTMLElement).style.setProperty('min-height', 'auto', 'important');
            }
        });
  }

  //Nectar
  private NectaraddActiveClass() {
    this.dom.querySelectorAll('#shopify-section-sections--15554716860475__header .bottom_sticky').forEach((element) => {
      if (element) {
        element.classList.add('active');
        console.log('Added "active" class to the bottom_sticky element.');
      }
    });
  }

  //Next Adventure
  private toggleMobileNavDataOpen() {
    this.dom.querySelectorAll('.mobile-nav-close').forEach((element) => {
      if (element) {
        element.addEventListener('click', () => {
          const headerElement = element.closest('.site-header');
          const mobileNav = headerElement ? headerElement.querySelector('.site-mobile-nav') : null;
          if (mobileNav) {
            const isOpen = mobileNav.getAttribute('data-open') === 'true';
            mobileNav.setAttribute('data-open', isOpen ? 'false' : 'true');
          }
        });
      }
    });
  }

  //Detox Market
  private DetoxMarketupdateSrcsetFromSrc() {
    this.dom.querySelectorAll('.rimage__image').forEach((image) => {
      const imgElement = image as HTMLImageElement;
      if (imgElement && imgElement.hasAttribute('src')) {
        imgElement.srcset = imgElement.src;
      }
    });
  }

  //Kv Essentials
  private KvEssentialsresetImageHeight() {
    setTimeout(() => {
      this.dom.querySelectorAll('.look').forEach((parentElement) => {
        const imageElement = parentElement.querySelector('.look__image');
        if (imageElement) {
          const imgElement = imageElement as HTMLElement;
          imgElement.style.removeProperty('height');
          imgElement.offsetHeight;
          imgElement.style.setProperty('height', 'auto', 'important');
        }
      });
    }, 2000); 
  }

  //Feelgrounds EU
  private FeelgroundssetNavButtonDisplay() {
    setTimeout(() => {
      this.dom.querySelectorAll('.menu-button-stripes').forEach((parentElement) => {
        const childElements = parentElement.querySelectorAll('.nav-mobile-button-stripe');
        childElements.forEach((stripeElement) => {
          const element = stripeElement as HTMLElement;
          element.style.setProperty('display', 'block', 'important');
        });
      });
    }, 2000);
  }

  //Model Train Stuff
  private ModelTrainupdateSlideoutDisplay() {
    setTimeout(() => {
      this.dom.querySelectorAll('.subcat-listing-header').forEach((parentElement) => {
        const childElements = parentElement.querySelectorAll('.ss__slideout');
        childElements.forEach((slideoutElement) => {
          const element = slideoutElement as HTMLElement;
          element.style.removeProperty('display');
          element.style.setProperty('display', 'revert-layer', 'important');
        });
      });
    }, 2000);
  }

  //Puresport
  private PuresportupdateProductCardMedia() {
    setTimeout(() => {
      this.dom.querySelectorAll('.product-card__media').forEach((mediaElement) => {
        const pictureElements = mediaElement.querySelectorAll('picture');
        
        if (pictureElements.length >= 2) {
          const secondPicture = pictureElements[1] as HTMLElement;
          secondPicture.style.removeProperty('opacity');
          secondPicture.style.setProperty('opacity', '0', 'important');
        }
      });
    }, 2000);
  }

  //Botanique Paris
  private BotaniqueParisupdateOrderHeading() {
    setTimeout(() => {
        const parentElement = this.dom.querySelector('#shopify-section-template--17790039654565__track_your_order_heading');

        if (parentElement) {
            const childElement = parentElement.querySelector('#WS--template--17790039654565__track_your_order_heading') as HTMLElement;

            if (childElement) {
                childElement.style.setProperty('display', 'block', 'important');
            }
        }
    }, 2000);
  }

  //TFSC
  private TFSCaddClassToSplideChild() {
    setTimeout(() => {
      const parentElements = this.dom.querySelectorAll('.rebuy-widget-content');
      parentElements.forEach(parentElement => {
        const childElement = parentElement.querySelector('[id^="splide"]');
        if (childElement) {
          childElement.classList.add('splide');
        }
      });
    }, 2000);
  }

  //Deux Par Deux
  private DeuxupdateAllLSProductDisplays() {
    setTimeout(() => {
      this.dom.querySelectorAll('.LS-section').forEach(parent => {
        parent.querySelectorAll('.LS-products-flex').forEach(child => {
          (child as HTMLElement).style.cssText = 'display: flex !important';
        });
      });
  
      this.dom.querySelectorAll('a').forEach(anchor => {
        const hover = anchor.querySelector('.LS-product-img-hover');
        if (hover) (hover as HTMLElement).style.cssText = 'opacity: 0 !important';
      });
    }, 2000);
  }

  //Live Love Locks
  private LiveLoveLocksupdateZoomContainerOpacity() {
    const styleId = 'zoom-container-opacity-styles';
    if (!this.dom.getElementById(styleId)) {
      const style = this.dom.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .zoom-container .zoomImg {
          opacity: 0 !important;
        }
      `;
      this.dom.head.appendChild(style);
    }
  }

  //Remi
  private RemiupdateLightboxWrapperOpacity() {
    setTimeout(() => {
      this.dom.querySelectorAll('#shopify-section-template--18360970215637__main').forEach((parentElement) => {
        const childElement = parentElement.querySelector('.lightbox-wrapper');
        
        if (childElement) {
          const childHTMLElement = childElement as HTMLElement;
          childHTMLElement.style.removeProperty('opacity');
          childHTMLElement.style.setProperty('opacity', '0', 'important');
        }
      });
    }, 2000);
  }

  //Andie Swim
  private AndieupdateDisplayStyleInPortals() {
    setTimeout(() => {
        const portalRoot = this.dom.querySelectorAll('#headlessui-portal-root');
        portalRoot.forEach((parentElement) => {
            const portalElements = parentElement.querySelectorAll('div[data-headlessui-portal]');
            portalElements.forEach((portal) => {
                const firstInnerElement = portal.querySelector('div');
                if (firstInnerElement) {
                    const elementHTMLElement = firstInnerElement as HTMLElement;
                    elementHTMLElement.style.removeProperty('display');
                    elementHTMLElement.style.setProperty('display', 'block', 'important');
                }
            });
        });
    }, 2000);
  }

  //Max Lily 
  private MaxLilyupdateMinHeightForMainContent() {
    this.dom.querySelectorAll('#kids-bunk-beds-amp-loft-beds-slide-beds-amp-mattresses-max-amp-lily').forEach((parentElement) => {
        const parentEl = parentElement as HTMLElement;
        if (parentEl) {
            const childElement = parentEl.querySelector('#MainContent') as HTMLElement;
            if (childElement) {
                childElement.style.minHeight = 'auto';
            }
        }
    });
  }

  //Kollagen Nutrinic
  private NutrinicremoveHeightFromImageInSlider() {
    if (!this.dom.querySelector('#slider-height-style')) {
        const styleElement = this.dom.createElement('style');
        styleElement.id = 'slider-height-style';
        styleElement.textContent = '.brxe-block.befo-slider__slide-inner { height: auto !important; }';
        this.dom.head.appendChild(styleElement);
    }

    this.dom.querySelectorAll('.brxe-block.befo-slider__slide-inner').forEach(parent => {
        const imageElement = parent.querySelector('.befo-slider__image.tag img');
        if (imageElement) {
            (imageElement as HTMLElement).style.setProperty('height', 'auto', 'important');
        }
    });
  }

  //Underdog
  private UnderdogupdateLazyLoadImages() {
    this.dom.querySelectorAll('.dib-post-featured-image img').forEach(img => {
        const lazyLoadSrc = img.getAttribute('data-lazy-load');
        if (lazyLoadSrc) {
            (img as HTMLImageElement).src = lazyLoadSrc;
        }
    });
  }

  //Upcircle US
  private UpcircleUSsetupFlipContentToggle() {
    const existingElements = this.dom.querySelectorAll('.link_group_flip');
    existingElements.forEach(el => {
        el.removeEventListener('click', () => {});
    });

    this.dom.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const flipElement = target.closest('.link_group_flip');
        
        if (flipElement) {
            e.preventDefault();
            const contentElement = flipElement.nextElementSibling;
            
            if (contentElement?.classList.contains('upcircle_content_mob')) {
                const currentDisplay = (contentElement as HTMLElement).style.display;
                (contentElement as HTMLElement).style.display = currentDisplay === 'block' ? 'none' : 'block';
            }
        }
    });
  }

  //Mystic Barrels
  private MysticBarrelsupdateProductImageHeight() {
    const parent = this.dom.querySelector('#ProductInfo-template--15883225563249__mb14-main-product');
    if (parent) {
        const imageElement = parent.querySelector('.product-image-blocks img');
        if (imageElement) {
            (imageElement as HTMLElement).style.removeProperty('height');
            (imageElement as HTMLElement).style.setProperty('height', 'auto', 'important');
        }
    }
  }

  //Reach International Outfitters
  private updateSecondaryImageOpacity() {
    setTimeout(() => {
        // Check if style already exists
        if (!this.dom.querySelector('#secondary-image-style')) {
            const styleElement = this.dom.createElement('style');
            styleElement.id = 'secondary-image-style';
            styleElement.textContent = `
                .grid-product__image-mask .grid-product__secondary-image {
                    opacity: 0 !important;
                }
                .grid-product__image-mask:hover .grid-product__secondary-image {
                    opacity: 1 !important;
                }
            `;
            this.dom.head.appendChild(styleElement);
        }
    }, 2000);
  }

  //Thomson Carter
  private ThomsonCarterupdateViewportHeight() {
    this.dom.querySelectorAll('.product-single__media-slider .flickity-viewport').forEach(element => {
        const actualHeight = element.getAttribute('actualheight');
        if (actualHeight) {
            (element as HTMLElement).style.removeProperty('height');
            (element as HTMLElement).style.setProperty('height', `${actualHeight}`, 'important');
        }
    });
    if (!this.dom.querySelector('#product-media-style')) {
        const styleElement = this.dom.createElement('style');
        styleElement.id = 'product-media-style';
        styleElement.textContent = `
            .product-single__media .product-single__media--image-height {
                display: block !important;
            }
        `;
        this.dom.head.appendChild(styleElement);
    }
  }

  private primalherbssetupMobileMenuToggle() {
    const menuHolder = this.dom.querySelector('.mobile_menu_holder');
    
    this.dom.querySelector('.header header-drawer')?.addEventListener('click', () => 
        menuHolder?.classList.add('open'));
        
    this.dom.querySelector('.mobile_menu_holder .close_button')?.addEventListener('click', () => 
        menuHolder?.classList.remove('open'));
  }

  //Svelte Chic
  private SvelteChichideFormEmbed() {
    if (!this.dom.querySelector('#form-embed-style')) {
        const styleElement = this.dom.createElement('style');
        styleElement.id = 'form-embed-style';
        styleElement.textContent = `
            .template-index #app-embed-container-246292 {
                display: none !important;
            }
        `;
        this.dom.head.appendChild(styleElement);
    }
  }

  //Neat SweatProof Apparel
  private NeathideAgeVerifier() {
    if (!this.dom.querySelector('#age-verifier-style')) {
        const styleElement = this.dom.createElement('style');
        styleElement.id = 'age-verifier-style';
        styleElement.textContent = `
            #shopify-section-sections--15894718775357__age-verifier-popup #sections--15894718775357__age-verifier-popup {
                display: none !important;
            }
        `;
        this.dom.head.appendChild(styleElement);
    }
  }

  //Alpha Lion
  private AlphaLionhideVideoModal() {
    if (!this.dom.querySelector('#video-modal-style')) {
        const styleElement = this.dom.createElement('style');
        styleElement.id = 'video-modal-style';
        styleElement.textContent = `
            .main-wrapper [data-action="close-video"].video-modal {
                opacity: 0 !important;
            }
        `;
        this.dom.head.appendChild(styleElement);
    }
  }

  //6 Week Challenge
  private WeekChallengeupdateGalleryStyles() {
    if (!this.dom.querySelector('#gallery-image-style')) {
        const styleElement = this.dom.createElement('style');
        styleElement.id = 'gallery-image-style';
        styleElement.textContent = `
            .e-gallery-item .e-gallery-image {
                display: block !important;
            }
        `;
        this.dom.head.appendChild(styleElement);
    }
  }

  //McAfee Institute Intelligence
  private McAfeeupdateDrawerHeight() {
    setTimeout(() => {
        this.dom.querySelectorAll('#MenuDrawer.menu-drawer').forEach((parentElement) => {
            const drawerInner = parentElement.querySelector('.drawer__inner.z-10');
            if (drawerInner) {
                const drawerElement = drawerInner as HTMLElement;
                drawerElement.style.removeProperty('height');
                drawerElement.offsetHeight;
                drawerElement.style.setProperty('height', 'revert-layer', 'important');
            }
        });
    }, 2000);
  }

  //Pectiv
  private PectivupdateSearchBarOpacity() {
    setTimeout(() => {
        this.dom.querySelectorAll('#SearchBar').forEach((parentElement) => {
            const searchWrapper = parentElement.querySelector('.search-bar-wrapper');
            if (searchWrapper) {
                const wrapperElement = searchWrapper as HTMLElement;
                wrapperElement.style.removeProperty('opacity');
                wrapperElement.offsetHeight;
                wrapperElement.style.setProperty('opacity', '0', 'important');
            }
        });
    }, 2000);
  }

  //Vitality
  private VitalityupdateHeroBannerDisplay() {
    setTimeout(() => {
        this.dom.querySelectorAll('.container-max .hero-banner__cover').forEach(element => {
            (element as HTMLElement).style.removeProperty('display');
            (element as HTMLElement).style.setProperty('display', 'block', 'important');
        });
    }, 2000);
  }

  //Beds R Us Australia
  private BedsRUshideOwlClonedItems() {
    setTimeout(() => {
        this.dom.querySelectorAll('.owl-stage .owl-item.cloned').forEach(item => {
            (item as HTMLElement).style.setProperty('display', 'none', 'important');
        });
    }, 2000);
  }

  //Fire Dept Coffee
  private FireDeptCoffeeupdateSubmenuDisplay() {
    setTimeout(() => {
        this.dom.querySelectorAll('.header__nav-item.sub-menu').forEach(item => {
            const submenu = item.querySelector('.cc-submenu-outer') as HTMLElement;
            if (submenu) {
                item.addEventListener('auenter', () => submenu.style.setProperty('display', 'block', 'important'));
                item.addEventListener('mouseleave', () => submenu.style.setProperty('display', 'none', 'important'));
            }
        });
    }, 2000);
  }

  //eSafety Supplies
  private eSafetyupdateMegaMenuBackground() {
    !this.dom.querySelector('#mega-menu-style') && this.dom.head.appendChild(
        Object.assign(this.dom.createElement('style'), {
            id: 'mega-menu-style',
            textContent: '.m-menu__item.m-menu__item--parent.m-menu__item--has-submenu.m-menu__item--mega .m-mega-menu { background-color: #fff !important; }'
        })
    );

    setTimeout(() => {
        (this.dom.querySelector('#m-theme #MainContent[role="main"]') as HTMLElement)?.style
            .setProperty('margin-top', 'auto', 'important');
    }, 2000);
  }

  //Rinse Bath Body
  private RinseBathBodyhideHeaderToolsLeft() {
    setTimeout(() => {
        this.dom.querySelectorAll('.main-header--tools-group .main-header--tools-left').forEach(element => {
            (element as HTMLElement).style.setProperty('display', 'none', 'important');
        });
    }, 2000);
  }

  //Latico Leather
  // private preventSidebarDisplayNone() {
  //   const selectors = [
  //       '#sidebar-menu.SidebarMenu.Drawer.Drawer--small.Drawer--fromLeft',
  //       '.mob-drawer',
  //       '.mobile-menu'
  //   ];

  //   const observer = new MutationObserver(() => {
  //       selectors.forEach(selector => {
  //           const elements = this.dom.querySelectorAll(selector);
  //           elements.forEach(element => {
  //               if (element && (element as HTMLElement).style.display === 'none') {
  //                   (element as HTMLElement).style.removeProperty('display');
  //               }
  //           });
  //       });
  //   });

  //   selectors.forEach(selector => {
  //       const targetElement = this.dom.querySelector(selector);
  //       if (targetElement) {
  //           observer.observe(targetElement, { 
  //               attributeFilter: ['style']
  //           });
  //       }
  //   });
  // }

  //toggleHeatmapClassOnDrawer
  private toggleHeatmapClassOnDrawer() {
    this.dom.querySelectorAll('#mobile-menu-drawer[data-role="drawer"]').forEach((drawerElement) => {
      if (drawerElement.classList.contains('mobile-nav-drawer') && drawerElement.classList.contains('opened-drawer')) {
        const drawerBody = drawerElement.querySelector('.drawer-body');
        if (drawerBody) {
          drawerBody.classList.remove('heatmap-com__hidden-element');
        }
      } else {
        const drawerBody = drawerElement.querySelector('.drawer-body');
        if (drawerBody) {
          drawerBody.classList.add('heatmap-com__hidden-element');
        }
      }
    });
  }

  //disable pointer events
  private disablePointerEventsOnAbsolutePseudoElements() {
    this.dom
      .querySelectorAll(".card__link")
      .forEach((parentElement: HTMLElement) => {
        const beforeStyle = window.getComputedStyle(parentElement, "::before");
        const afterStyle = window.getComputedStyle(parentElement, "::after");

        const isBeforeAbsolute = beforeStyle.position === "absolute";
        const isAfterAbsolute = afterStyle.position === "absolute";

        if (isBeforeAbsolute || isAfterAbsolute) {
          parentElement.style.setProperty(
            "pointer-events",
            "none",
            "important"
          );
        }
      });
  }

  //Hide Header group
  private hideShopifyHeaderGroup() {
    this.dom
      .querySelectorAll(
        ".shopify-section.shopify-section-group-header-group.section-main-page-landing"
      )
      .forEach((headerGroupElement: HTMLElement) => {
        headerGroupElement.style.setProperty("display", "none", "important");
      });
  }

  private UpdateIframeSrc() {
    const iframes = this.dom.querySelectorAll("iframe") as NodeListOf<HTMLIFrameElement>;
    if (iframes.length === 0) return;

    const proxyUrl1 = "https://dashboard.heatmap.com/proxy/spa-only/getUrl?url=";
    const proxyUrl2 = "https://dashboard.heatmap.com/proxy/getUrl?url=";

    const removeProxyUrl = (url: string, proxyUrl: string) => {
        if (url.startsWith(proxyUrl)) {
            try {
                return decodeURIComponent(url.replace(proxyUrl, ""));
            } catch (e) {
                return url.replace(proxyUrl, "");
            }
        }
        return url;
    };

    iframes.forEach((iframe) => {
        try {
            let iframeSrc = iframe.getAttribute("src");
            if (!iframeSrc) return;

            try {
                iframeSrc = decodeURIComponent(iframeSrc);
            } catch (e) {}

            iframeSrc = removeProxyUrl(iframeSrc, proxyUrl1);
            iframeSrc = removeProxyUrl(iframeSrc, proxyUrl2);

            // Check if iframe is from loox.io
            if (iframeSrc.includes('loox.io')) {
                iframe.setAttribute("src", proxyUrl1 + encodeURIComponent(iframeSrc));
            } else {
                iframe.setAttribute("src", iframeSrc);
            }

            if (iframe.getAttribute("src-changed") === "true") {
                const retryWithProxy = (proxyUrl: string) => {
                    try {
                        iframe.setAttribute("src", proxyUrl + encodeURIComponent(iframeSrc));
                    } catch (e) {}
                };
                iframe.onerror = () => retryWithProxy(proxyUrl1);
            }
        } catch (e) {}
    });
  }

  private adjustHeaderPosition() {
    const header = this.dom.getElementById(
      "shopify-section-header"
    ) as HTMLElement;

    if (
      header &&
      header.classList.contains("shopify-section") &&
      header.classList.contains("header-section") &&
      header.classList.contains("header--ontop")
    ) {
      header.style.removeProperty("position");
    }
  }
}
