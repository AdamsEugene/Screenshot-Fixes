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


  public getElements(): HTMLElement[] {
    return this.elements;
  }
}
