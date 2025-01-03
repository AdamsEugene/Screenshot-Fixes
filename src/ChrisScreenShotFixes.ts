interface ToggleConfig {
  triggerSelector: string;
  targetSelectors: string[];
  classes: string[];
  callback?: (context?: any) => void;
  context?: any;
}

export default class ChrisScreenShotFixes {
  private elements: HTMLElement[] = []; // Initialize the elements array
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
  }

  private toggleCart(open: boolean): void {
    // Select the cart container
    const cartContent = this.document.querySelector(
      ".cart-container > div"
    ) as HTMLElement;

    // Check if the cart content exists before applying changes
    if (cartContent) {
      cartContent.style.visibility = open ? "visible" : "hidden"; // Toggle visibility
      cartContent.style.transform = open ? "" : "matrix(1, 0, 0, 1, 0, 0)"; // Toggle transformation
      cartContent.style.transition = open
        ? "transform 0.3s ease, visibility 0.3s ease"
        : "";
    }
  }

  private setupCartButtons(): void {
    // Setup the close button
    const closeButton = this.document.querySelector(
      ".cart-container header > button"
    ) as HTMLElement;

    if (closeButton) {
      closeButton.addEventListener("click", () => this.toggleCart(false));
      closeButton.style.display = "block";
    }

    // Setup the open button
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

  public getElements(): HTMLElement[] {
    return this.elements;
  }
}
