
interface ToggleConfig {
  triggerSelector: string;
  targetSelectors: string[];
  classes: string[];
  callback?: (context?: any) => void;
  context?: any;
}

export default class ChrisScreenShotFixes {
  private elements: HTMLElement[];
  private document: Document;

  constructor(dom: Document = document) {
    this.document = dom;
  }

  public init(): void {
    this.setupToggleListeners([
      {
        triggerSelector: 'button.mobile-nav-trigger',
        targetSelectors: ['.site-header__drawer.site-header__mobile-nav.medium-up--hide', ':root'],
        classes: ['is-active', 'mobile-nav-open']
      }
    ]);
  }

  private toggleClasses(config: ToggleConfig) {
    const { targetSelectors, classes, callback, context } = config;
    targetSelectors.forEach(selector => {
      const element = this.document.querySelector(selector);
      if (element) {
        classes.forEach(className => {
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

  private setupToggleListeners(toggleConfigs: ToggleConfig[]) {
    toggleConfigs.forEach(config => {
      const { triggerSelector } = config;
      const triggerElement = this.document.querySelector(triggerSelector);

      if (triggerElement) {
        triggerElement.addEventListener('click', () => {
          this.toggleClasses(config);
        });
      }
    });
  }

  getElements(): HTMLElement[] {
    return this.elements;
  }
}
