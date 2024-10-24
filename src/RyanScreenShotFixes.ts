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
      this.DenverCoUpdateResponsiveDialog();
      this.adjustHeaderPosition();
      this.WoojerupdateMinHeight()
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
        console.log(`Reset height for image in post:`, img);
      }
    });
    const elements = this.dom.querySelectorAll(
      ".featured-collection-section"
    ) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      console.log(
        "Before update:",
        element,
        "Classes:",
        element.classList.value,
        "Styles:",
        element.style.cssText
      );
      element.classList.remove("pt-6", "pt-9", "pb-9");
      element.style.paddingTop = "";
      element.style.paddingBottom = "";
      element.style.height = "";
      console.log(
        "After update:",
        element,
        "Classes:",
        element.classList.value,
        "Styles:",
        element.style.cssText
      );
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
      ".swiper-button-prev", // Example of an ID selector
    ];
  
    selectors.forEach((selector) => {
      // Check if it's a class or an ID
      if (selector.startsWith('.')) {
        // Handle class selectors
        this.allElements(selector)?.forEach((el: HTMLElement) =>
          this.displayBlock(el, true)
        );
      } else if (selector.startsWith('#')) {
        // Handle ID selectors
        const el = document.querySelector(selector) as HTMLElement;
        if (el) {
          this.displayBlock(el, true);
        }
      }
    });
    const style = this.dom.createElement('style');
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
      '.footer.color-scheme-sections--18119191265494__footer.color-accent-1.gradient.section-sections--18119191265494__footer-padding.animate-section.animate--hidden.animate--shown'
    ) as HTMLElement;
    if (targetElement) {
      const childrenWithOpacityZero = targetElement.querySelectorAll('*');
      childrenWithOpacityZero.forEach((child) => {
        const childElement = child as HTMLElement;
        const computedOpacity = window.getComputedStyle(childElement).opacity;
        if (computedOpacity === '0') {
          childElement.style.setProperty('opacity', '1', 'important');
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
      .querySelectorAll(".text-link.product-single__thumbnail.product-single__thumbnail--product-alphacleanse-v4-template-radio")
      .forEach((parentElement: HTMLElement) => {
        const childElement = parentElement.querySelector(".product-single__thumbnail-image") as HTMLElement;
        
        if (childElement && childElement.style.height) {
          childElement.style.setProperty("height", "max-content", "important");
        }
      });
  }

  //Grow
  private GrowhideLightboxOverlays() {
    const overlays = this.dom.querySelectorAll<HTMLElement>("body > .lightbox-overlay");
    let hasVisibleOverlay = false;
  
    overlays.forEach(overlay => {
      const opacity = getComputedStyle(overlay).opacity;
      if (opacity === "1") {
        hasVisibleOverlay = true;
      }
    });
  
    if (hasVisibleOverlay) {
      const style = this.dom.createElement('style');
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
      });
  
      observer.observe(this.dom.body, { childList: true, subtree: true });
    } 
  }

  private glowupdateElementsVisibility() {
    const updateVisibility = (parentSelector: string, childSelector: string) => {
        this.dom.querySelectorAll(parentSelector).forEach(parent => {
            const children = parent.querySelectorAll(childSelector) as NodeListOf<HTMLElement>;
            if (children.length > 0) {
                const style = this.dom.createElement('style');
                let styleContent = '';

                children.forEach((child, index) => {
                    const uniqueClass = `child-visible-${index}`;
                    child.classList.add(uniqueClass);
                    child.setAttribute('data-visible', 'true');
                    styleContent += `.${uniqueClass} { opacity: 1 !important; } `;
                });

                style.innerHTML = styleContent;
                this.dom.head.appendChild(style);
            }
        });
    };

    updateVisibility('.padding.background-light.text-align-center', '.img.hover-plus.margin-bottom-1250.soft-load');
    updateVisibility('.content.text-align-center', '.testimonial-carousel.soft-load');
    updateVisibility('.content.flex.flex-row.flex-center', '.img.half.left.soft-load');
    updateVisibility('.content', '.soft-load');
    updateVisibility('.half.right', '.soft-load');
  }
  
  //VIAIR
  private VIAIRremoveOpacityFromMegaMenu() {
    const style = this.dom.createElement('style');
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
        contentWrapper?.style.removeProperty('height');
        const styleTag = document.createElement('style');
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
    const updateHeight = (elements: NodeListOf<HTMLElement>, attr: string, divisor: number, cssProp: string) => {
      elements.forEach(parent => {
        const firstChildElement = parent.querySelector('.flex.flex-col.relative') as HTMLElement | null;
        if (firstChildElement) {
          const value = parseFloat(firstChildElement.getAttribute(attr) || '0');
          if (!isNaN(value)) {
            const computedValue = Math.floor(value / divisor);
            const childElements = parent.querySelectorAll('.flex.flex-col.relative') as NodeListOf<HTMLElement>;
            childElements.forEach(child => child.style.setProperty(cssProp, `${computedValue}px`));
          }
        }
      });
    };
  
    const gridElements = this.dom.querySelectorAll('.grid.h-full') as NodeListOf<HTMLElement>;
    updateHeight(gridElements, 'elementscrollheight', 13, '--slider-height');
  
    const relativeElements = this.dom.querySelectorAll('.relative.grid.overflow-x-auto.scrollbar-none.overflow-y-hidden.snap-mandatory.-mx-container-fullwidth.scroll-px-container-fullwidth.px-container-fullwidth.snap-x') as NodeListOf<HTMLElement>;
    relativeElements.forEach(parent => {
      const childElements = parent.querySelectorAll('.relative') as NodeListOf<HTMLElement>;
      childElements.forEach(child => {
        const value = parseFloat(child.getAttribute('actualheight') || '0');
        if (!isNaN(value)) {
          const computedValue = Math.floor(value / 13);
          child.style.setProperty('min-height', `${computedValue}px`);
        }
      });
    });
  
    const styleElement = document.createElement('style');
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
  
        childElement?.style.removeProperty('height');
  
        const styleTag = document.createElement('style');
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
        const childElement = parent.querySelector(
          ".list"
        ) as HTMLElement;
  
        if (childElement?.style.opacity === '1') {
          childElement.style.opacity = '0';
        }
  
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
          .doubly-nice-select.open .list {
            opacity: 1 !important;
          }
        `;
        document.head.appendChild(styleTag);
      });
  }  

  //Denver Headshot Company
  private DenverCoUpdateResponsiveDialog() {
    const parentContainer = this.dom.querySelector('.wp-block-navigation__responsive-container');
    if (parentContainer) {
      const container = parentContainer.querySelector('#modal-1-content') as HTMLElement;
      if (container) {
        container.style.setProperty('margin-top', '0px', 'important');
      }
    }
  }  

  //Upcircle
  private Upcircleupdatemaincontent() {
    this.dom.querySelectorAll(".index").forEach((parentElement: HTMLElement) => {
      const childElement = parentElement.querySelector("#template-index") as HTMLElement;
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
    this.dom.querySelectorAll(".footer-middle-container").forEach((parentElement: HTMLElement) => {
      parentElement.querySelectorAll(".social-icon img, .designed-by img").forEach((imgElement: HTMLImageElement) => {
        if (imgElement.src.includes("_430x")) {
          imgElement.src = imgElement.src.replace("_430x", "_300x");
        }
      });
    });
  }

  // Woojer
  private WoojerupdateMinHeight() {
    this.dom.querySelectorAll('.sc-kqGpvY').forEach((parentElement: HTMLElement) => {
      parentElement.querySelectorAll('.sc-dhKdPU.hjOBND.pf-7_.pf-r.pf-c-cm.pf-r-eh, .sc-dhKdPU.hjOBND.pf-58_.fortnitehero.pf-r.pf-c-cm.pf-r-eh').forEach((childElement: HTMLElement) => {
        childElement.style.minHeight = '';
        childElement.style.setProperty('min-height', 'auto', 'important');
      });
    });
  }
  
  //Iframe Update
  private UpdateIframeSrc() {
    const iframe = this.dom.querySelector("iframe") as HTMLIFrameElement;
    if (iframe) {
      let iframeSrc = iframe.getAttribute("src");
      if (iframeSrc) {
        const proxyUrl1 =
          "https://dashboard.heatmap.com/proxy/spa-only/getUrl?url=";
        const proxyUrl2 = "https://dashboard.heatmap.com/proxy/getUrl?url=";

        const removeProxyUrl = (url: string, proxyUrl: string): string => {
          if (url.startsWith(proxyUrl)) {
            return decodeURIComponent(url.replace(proxyUrl, ""));
          }
          return url;
        };

        iframeSrc = removeProxyUrl(iframeSrc, proxyUrl1);
        iframeSrc = removeProxyUrl(iframeSrc, proxyUrl2);

        iframe.setAttribute("src", iframeSrc);
        iframe.onload = () => {};
        iframe.onerror = () => {
          iframe.setAttribute("src", proxyUrl1 + encodeURIComponent(iframeSrc));
          iframe.onload = () => {};
          iframe.onerror = () => {
            iframe.setAttribute(
              "src",
              proxyUrl2 + encodeURIComponent(iframeSrc)
            );
            iframe.onload = () => {};
            iframe.onerror = () => {};
          };
        };
      }
    }
  }

  private adjustHeaderPosition() {
    const header = this.dom.getElementById('shopify-section-header') as HTMLElement;
  
    if (header && header.classList.contains('shopify-section') && 
        header.classList.contains('header-section') && 
        header.classList.contains('header--ontop')) {
        header.style.removeProperty('position');
    }
  }
  
}
