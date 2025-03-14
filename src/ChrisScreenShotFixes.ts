interface ElementConfig {
  selector: string;
  styles?: Partial<CSSStyleDeclaration>;
  innerSelector?: string;
  innerStyles?: Partial<CSSStyleDeclaration>;
  removeClasses?: string[];
  removeElement?: boolean;
}

interface FormConfig {
  elements: ElementConfig[];
}

interface ToggleConfig {
  triggerSelector: string;
  targetSelectors: string[];
  classes: string[];
  callback?: (context?: any) => void;
  context?: any;
}



export default class ChrisScreenShotFixes {
  private elements: HTMLElement[] = [];
  private document: Document;

  constructor(dom: Document = document) {
    this.document = dom;
  }

  public init(): void {
    this.setupToggleListeners([
      {
        triggerSelector: "button.mobile-nav-trigger",
        targetSelectors: [
          ".site-header__drawer.site-header__mobile-nav.medium-up--hide",
          ":root",
        ],
        classes: ["is-active", "mobile-nav-open"],
      },
    ]);

    this.setupCartButtons();
    this.KahootAdjustSvgIconSize();
    this.oberfieldssetCircleBackgrounds();
    this.skinnyskinRemoveSwiperArrows();
    //unforgettable gadgets
    this.cleanUrlsInDocument(3017, 'proxy', undefined, false);
    //posterprintshop
    this.adjustElementorWidths();
    this.adjustQuikreteImageUrls();
    this.tsbLivinremoveLazySizePadding();
    this.fleetRunTruckfixTableBackgroundColor();
    this.posterstyleEconGridContainer();

  }

  private getIdSiteFromURL(): number | null {
    try {
      const url: URL = new URL(window.location.href);
      const idSiteParam: string | null = url.searchParams.get("idSite");
      const idSiteNumber: number | null = idSiteParam ? parseInt(idSiteParam, 10) : null;
      return Number.isNaN(idSiteNumber) ? null : idSiteNumber;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error parsing URL:', error.message);
      } else {
        console.error('Unknown error parsing URL');
      }
      return null;
    }
  }
  private toggleCart(open: boolean): void {
    const cartContent = this.document.querySelector(
      ".cart-container > div"
    ) as HTMLElement;
    if (cartContent) {
      cartContent.style.visibility = open ? "visible" : "hidden";
      cartContent.style.transform = open ? "" : "matrix(1, 0, 0, 1, 0, 0)";
      cartContent.style.transition = open
        ? "transform 0.3s ease, visibility 0.3s ease"
        : "";
    }
  }

  private setupCartButtons(): void {
    const closeButton = this.document.querySelector(
      ".cart-container header > button"
    ) as HTMLElement;

    if (closeButton) {
      closeButton.addEventListener("click", () => this.toggleCart(false));
      closeButton.style.display = "block";
    }

    const cartButton = this.document.querySelector(
      ".cart-container > a"
    ) as HTMLElement;

    if (cartButton) {
      cartButton.addEventListener("click", () => this.toggleCart(true));
    }
  }

  private toggleClasses(config: ToggleConfig): void {
    const { targetSelectors, classes, callback, context } = config;
    targetSelectors.forEach((selector) => {
      const element = this.document.querySelector(selector) as HTMLElement;
      if (element) {
        classes.forEach((className) => {
          element.classList.toggle(className);
        });
      }
    });

    if (callback && context) {
      callback(context);
    } else if (callback) {
      callback();
    }
  }

  private setupToggleListeners(toggleConfigs: ToggleConfig[]): void {
    toggleConfigs.forEach((config) => {
      const triggerElement = this.document.querySelector(
        config?.triggerSelector || ".no-this-is-heat-map-app"
      ) as HTMLElement;

      if (triggerElement) {
        triggerElement.addEventListener("click", () => {
          this.toggleClasses(config);
        });
      }
    });
  }

  private KahootAdjustSvgIconSize() {
    try {
      this.document.querySelectorAll(".emphatic").forEach((emphaticEl) => {
        try {
          const svgIconEl = emphaticEl.querySelector(".svgicon") as HTMLElement;
          if (!svgIconEl) return;
          const svgEl = svgIconEl.querySelector("svg");
          if (!svgEl?.hasAttribute("actualHeight")) return;
          const heightValue = svgEl.getAttribute("actualHeight")?.replace("px", "");
          if (!heightValue) return;
          svgIconEl.style.height = svgIconEl.style.width = `${heightValue}px`;
        } catch (innerError) { }
      });
      this.document.querySelectorAll(".store-icons").forEach((storeIconsEl) => {
        try {
          const serviceIcons = storeIconsEl.querySelectorAll(".service-icon") as NodeListOf<HTMLElement>;
          serviceIcons.forEach((serviceIcon) => {
            try {
              if (!serviceIcon.hasAttribute("actualHeight")) return;
              const heightValue = serviceIcon.getAttribute("actualHeight")?.replace("px", "");
              if (!heightValue) return;
              serviceIcon.style.height = serviceIcon.style.width = `${heightValue}px`;
            } catch (serviceIconError) { }
          });
        } catch (storeIconsError) { }
      });
    } catch (error) { }
  }


  private oberfieldssetCircleBackgrounds(): void {
    try {
      const backgroundMap: Record<string, { default: string; hover: string }> = {
        pavers_circle: {
          default: 'https://oberfields.com/assets/img/section_circles_pavers.jpg',
          hover: 'https://oberfields.com/assets/img/section_circles_pavers_over.jpg'
        },
        retaining_circle: {
          default: 'https://oberfields.com/assets/img/section_circles_retaining.jpg',
          hover: 'https://oberfields.com/assets/img/section_circles_retaining_over.jpg'
        },
        masonry_circle: {
          default: 'https://oberfields.com/assets/img/section_circles_masonry_.jpg',
          hover: 'https://oberfields.com/assets/img/section_circles_masonry_over.jpg'
        }
      };

      Object.values(backgroundMap).forEach(({ default: d, hover: h }) => {
        new Image().src = d;
        new Image().src = h;
      });

      this.document.querySelectorAll<HTMLAnchorElement>('.section_circle.col-s-4 a').forEach(link => {
        const matchingClass = Object.keys(backgroundMap).find(c => link.classList.contains(c));

        if (matchingClass) {
          link.style.backgroundImage = `url("${backgroundMap[matchingClass].default}")`;
          link.style.color = '#000000';

          link.addEventListener('mouseenter', () =>
            requestAnimationFrame(() => {
              link.style.backgroundImage = `url("${backgroundMap[matchingClass].hover}")`;
              link.style.color = '#54B6CF';
            })
          );

          link.addEventListener('mouseleave', () =>
            requestAnimationFrame(() => {
              link.style.backgroundImage = `url("${backgroundMap[matchingClass].default}")`;
              link.style.color = '#000000';
            })
          );
        }
      });
    } catch (_) { }
  }

  private skinnyskinRemoveSwiperArrows(): void {
    try {
      // Try with parent selector first
      const parentPrev: HTMLElement | null = this.document.querySelector('.logos-row-inner .swiper-button-prev');
      const parentNext: HTMLElement | null = document.querySelector('.logos-row-inner .swiper-button-next');

      // Only proceed to general removal if parent removal was successful
      if (parentPrev && parentNext) {
        parentPrev.remove();
        parentNext.remove();

        // Check for remaining arrows
        const remainingPrev: HTMLElement | null = this.document.querySelector('.swiper-button-prev');
        const remainingNext: HTMLElement | null = this.document.querySelector('.swiper-button-next');

        if (remainingPrev) remainingPrev.remove();
        if (remainingNext) remainingNext.remove();
      }
    } catch (_) { }
  }

  private cleanUrlsInDocument(
    targetSiteId: number,
    termToRemove: string,
    regexPattern: RegExp = new RegExp(`${termToRemove}/?`, 'gi'),
    debug: boolean = false
  ): void {
    const log = (message: string, ...args: unknown[]): void => {
      if (debug) console.debug(message, ...args);
    };

    log('Starting URL cleaning process');
    // Check if we're on the correct site
    const currentSiteId: number | null = this.getIdSiteFromURL();
    log('Current site ID:', currentSiteId);

    if (currentSiteId !== targetSiteId) {
      log('Exiting: Not target site ID');
      return;
    }

    try {
      // Process images
      const images: HTMLCollectionOf<HTMLImageElement> = this.document.getElementsByTagName('img');
      log('Found images:', images.length);

      Array.from(images).forEach((img: HTMLImageElement, index: number): void => {
        log(`Processing image ${index}:`, img.src);
        if (img.src?.includes(termToRemove)) {
          log(`Found ${termToRemove} in image ${index}`);
          const cleanUrl: string = img.src.replace(regexPattern, '');
          log(`Cleaned URL: ${cleanUrl}`);
          img.src = cleanUrl;
        }
      });

      // Process background images
      const elementsWithBgImage: NodeListOf<HTMLElement> = this.document.querySelectorAll('[style*="background-image"]');
      log('Found background images:', elementsWithBgImage.length);

      elementsWithBgImage.forEach((element: HTMLElement, index: number): void => {
        const style: string | null = element.getAttribute('style');
        log(`Processing background ${index}:`, style);
        if (style?.includes(termToRemove)) {
          log(`Found ${termToRemove} in background ${index}`);
          const cleanStyle: string = style.replace(regexPattern, '');
          log(`Cleaned style: ${cleanStyle}`);
          element.setAttribute('style', cleanStyle);
        }
      });

    } catch (error) {
      log('Error in URL cleaning process:', error);
    }

    log('Finished URL cleaning process');
  }

  private adjustElementorWidths() {
    setInterval(() => {
      try {
        const parentElement = this.document.querySelector('.elementor-location-header');

        if (parentElement) {
          const childElements = parentElement.querySelectorAll([
            '.elementor-element-0e45695',
            '.elementor-element-8d37659'
          ].join(','));

          childElements.forEach(element => {
            if (element instanceof HTMLElement) {
              console.log('Removing width from element:', element);
              element.style.removeProperty('width');
              element.style.setProperty('width', 'auto', 'important');
            }
          });
        }
      } catch (_) { }
    }, 50);
  }

  private adjustQuikreteImageUrls() {

    try {
      const currentSiteId: number | null = this.getIdSiteFromURL();
      if (currentSiteId !== 2973) {
        return;
      }
      const images = this.document.querySelectorAll('img');
      images.forEach(image => {
        const currentSrc = image.getAttribute('src');
        if (currentSrc?.includes('proxy/spa-only')) {
          const newSrc = currentSrc.replace('proxy/spa-only', 'athome');
          image.setAttribute('src', newSrc);
        }
        const backgroundImage = image.style.backgroundImage;
        if (backgroundImage?.includes('proxy/spa-only')) {
          const newBackgroundImage = backgroundImage.replace('proxy/spa-only', 'athome');
          image.style.backgroundImage = newBackgroundImage;
        }
      });
    } catch { }
  }

  private tsbLivinremoveLazySizePadding(): void {
    try {
      const lazyImages: NodeListOf<HTMLElement> = this.document.querySelectorAll('.image-lazysize');
      if (lazyImages.length > 0) {
        lazyImages.forEach((image: HTMLElement) => {
          const paddingTopStyle = image.style.paddingTop;
          if (paddingTopStyle?.endsWith('%')) {
            const paddingValue = parseFloat(paddingTopStyle);
            if (paddingValue > 10) {
              image.style.removeProperty('padding-top');
            }
          }
        });
      }
    } catch (_) {
    }
  }


  private fleetRunTruckfixTableBackgroundColor() {
    setInterval(() => {
      try {

        const element = this.document.querySelector('div.table-cell.middle');
        if (element instanceof HTMLElement) {
          element.style.setProperty('background-color', '#E32E00', 'important');
        }
      } catch (_) { }
    }, 50);
  }

  private posterstyleEconGridContainer(): void {
    try {
      const targetElement = this.document.querySelector('.e-con-inner > .e-grid.e-con-full.e-con.e-child');
      if (targetElement instanceof HTMLElement) {
        targetElement.style.display = 'flex';
        targetElement.style.flexDirection = 'column';
      }
    } catch (_) { }
  }
  


  public getElements(): HTMLElement[] {
    return this.elements;
  }
}
