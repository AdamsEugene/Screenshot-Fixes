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
    this.fixElementsNavbarAndHeaderElementor();

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
        } catch (innerError) {}
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
            } catch (serviceIconError) {}
          });
        } catch (storeIconsError) {}
      });
    } catch (error) {}
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

        Object.values(backgroundMap).forEach(({default: d, hover: h}) => {
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
    } catch (_) {}
}

private  skinnyskinRemoveSwiperArrows(): void {
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
  } catch (_) {}
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


private fixElementsNavbarAndHeaderElementor(customConfig: Partial<{
  elements: Array<{
      selector: string;
      styles: Partial<CSSStyleDeclaration>;
      innerSelector?: string;
      innerStyles?: Partial<CSSStyleDeclaration>;
      removeClasses?: string[];
  }>;
}> = {}): void {
  try {
      const defaultConfig = {
          elements: [
              {
                  selector: '.elementor-hidden-desktop.e-con-boxed:not(.header-tag)',
                  styles: {
                      position: 'fixed',
                      top: '0',
                      left: '0',
                      width: '100%',
                      zIndex: '999'
                  },
                  innerSelector: '.e-con-inner',
                  innerStyles: {
                      width: '100%',
                      maxWidth: '100%',
                      padding: '10px 20px'
                  },
                  removeClasses: ['elementor-sticky--effects', 'elementor-sticky--active']
              },
              {
                  selector: '.header-tag.elementor-hidden-desktop',
                  styles: {
                      position: 'fixed',
                      top: '51px',
                      left: '0',
                      width: '100%',
                      maxWidth: '100%',
                      zIndex: '998',
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  },
                  innerSelector: '.e-con-inner',
                  innerStyles: {
                      width: '100%',
                      maxWidth: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 20px',
                      margin: '0',
                      minHeight: '53px'
                  }
              }
          ]
      };

      // Merge custom config with default
      const finalConfig = {
          ...defaultConfig,
          ...customConfig
      };

      finalConfig.elements.forEach((element): void => {
          const targetElement: HTMLElement | null = document.querySelector(element.selector);
          if (!targetElement) return;

          // Apply main element styles
          Object.assign(targetElement.style, element.styles);

          // Remove classes if specified
          if (element.removeClasses) {
              element.removeClasses.forEach((className: string): void => {
                  targetElement.classList.remove(className);
              });
          }

          // Apply inner element styles if specified
          if (element.innerSelector && element.innerStyles) {
              const innerElement: HTMLElement | null = targetElement.querySelector(element.innerSelector);
              if (innerElement) {
                  Object.assign(innerElement.style, element.innerStyles);
              }
          }
      });
  } catch (_) {
      // Silent error handling
  }
}

  public getElements(): HTMLElement[] {
    return this.elements;
  }
}
