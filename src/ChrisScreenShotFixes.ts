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

  public getElements(): HTMLElement[] {
    return this.elements;
  }
}
