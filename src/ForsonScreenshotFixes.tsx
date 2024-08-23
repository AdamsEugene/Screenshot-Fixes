export default class ForsonScreenshotFixes {
  private document: Document;

  constructor(dom: Document = document) {
    this.document = dom;
  }

  public init(): void {
    this.adjustBannerImageHeight();
    this.adjustImages();
    this.adjustPromoGridImages();
    this.adjustProductGridAndStyles();
    this.removeSectionInterstitialHeight();
    this.adjustImageStyles();
    this.removeDisplayNone();
    this.removeProperties();
    this.applyResponsiveStyles();
  }

  private adjustBannerImageHeight(): void {
    if (this.isDesktopView()) {
      const bannerImage = this.getElement<HTMLImageElement>('.banner_image');
      if (bannerImage && bannerImage.parentElement) {
        bannerImage.style.setProperty('min-height', `${bannerImage.parentElement.offsetHeight}px`);
      }
    }
  }

  private adjustImages(): void {
    this.adjustElementImages('.banner__media.media', 749);
    this.adjustHoverEffectImages();
  }

  private adjustPromoGridImages(): void {
    this.adjustElementImages('.promo-grid__bg', 767);
  }

  private adjustElementImages(selector: string, breakpoint: number): void {
    const viewportWidth = this.document.body.clientWidth;
    this.getElements(selector).forEach(element => {
      const image = element.querySelector('img');
      if (image instanceof HTMLImageElement) {
        if (viewportWidth > breakpoint) {
          this.setImageDimensions(image, element);
        } else {
          this.removeImageDimensions(image);
        }
      }
    });
  }

  private adjustHoverEffectImages(): void {
    this.getElements(".media.media--hover-effect").forEach(el => {
      const images = el.querySelectorAll('img');
      const targetImage = images.length >= 2 ? images[1] : images[0];
      if (targetImage instanceof HTMLImageElement) {
        targetImage.style.minHeight = '100%';
      }
    });
  }

  private adjustProductGridAndStyles(): void {
    this.addProductGridStyles();
    this.adjustProductGridImages();
  }

  private addProductGridStyles(): void {
    const style = this.document.createElement('style');
    style.textContent = `
      .multicolumn-list__item.center .media--adapt,
      .multicolumn-list__item .media--adapt .multicolumn-card__image {
        width: 100% !important;
      }
    `;
    this.document.head.appendChild(style);
  }

  private adjustProductGridImages(): void {
    const productGrid = this.getElement('.grid.product-grid.grid--2-col-tablet-down.grid--4-col-desktop');
    if (productGrid) {
      this.getElements('li', productGrid).forEach(li => {
        const mediaElement = li.querySelector('.media.media--hover-effect');
        if (mediaElement instanceof HTMLElement) {
          const images = mediaElement.querySelectorAll('img');
          const targetImage = images.length >= 2 ? images[1] : images[0];
          if (targetImage instanceof HTMLImageElement) {
            targetImage.style.minHeight = '100%';
          }
        }
      });
    }
  }

  private removeSectionInterstitialHeight(): void {
    this.getElements<HTMLElement>('.section-interstitial').forEach(element => {
      element.style.removeProperty('height');
      if (element.style.getPropertyPriority('height') === 'important') {
        element.style.setProperty('height', 'initial', 'important');
      }
    });
  }

  private adjustImageStyles(): void {
    this.getElements<HTMLElement>('.image-wrap, .text-spacing').forEach(div => {
      div.style.removeProperty('height');
      div.style.setProperty('padding-bottom', '1px', 'important');

      const img = div.querySelector('img');
      if (img instanceof HTMLImageElement) {
        img.style.setProperty('height', 'auto', 'important');
      }
    });
  }

  private removeDisplayNone(): void {
    const classList = [
      'jdgm-widget', 'jdgm-carousel', 'jdgm-carousel--default-theme',
      'jdgm-carousel--done', 'jdgm-carousel-wrapper',
      'jdgm-carousel__left-arrow', 'jdgm-carousel__right-arrow'
    ];
    
    classList.forEach(className => {
      this.getElements<HTMLElement>(`.${className}`).forEach(element => {
        element.style.removeProperty('display');
      });
    });
  }

  private removeProperties(): void {
    this.removeSectionHeight();
    this.removeImgFitDimensions();
  }

  private removeSectionHeight(): void {
    const sectionElement = this.getElement<HTMLElement>('.icons-with-text.section.section--full-width.section--padded-small.color-scheme.color-scheme--2');
    if (sectionElement) {
      sectionElement.style.removeProperty('height');
    }
  }

  private removeImgFitDimensions(): void {
    this.getElements<HTMLElement>('.img-fit').forEach(element => {
      element.style.removeProperty('height');
      element.style.removeProperty('width');
    });
  }

  private applyResponsiveStyles(): void {
    if (!this.isDesktopView()) {
      const productIngredientsElement = this.getElement<HTMLElement>('.product-ingredients');
      if (productIngredientsElement) {
        productIngredientsElement.style.setProperty('--carousel-edge', 'max(calc(var(--spacing-edge) * 0), 0rem)');
      }
    }
  }

  private setImageDimensions(image: HTMLImageElement, parent: Element): void {
    const parentStyle = window.getComputedStyle(parent);
    image.style.setProperty('min-width', parentStyle.getPropertyValue('width'));
    image.style.setProperty('min-height', parentStyle.getPropertyValue('height'));
  }

  private removeImageDimensions(image: HTMLImageElement): void {
    image.style.removeProperty('min-width');
    image.style.removeProperty('min-height');
  }

  private isDesktopView(): boolean {
    return this.document.body.clientWidth > 749;
  }

  private getElement<T extends Element>(selector: string, parent: Element | Document = this.document): T | null {
    return parent.querySelector(selector) as T | null;
  }

  private getElements<T extends Element>(selector: string, parent: Element | Document = this.document): NodeListOf<T> {
    return parent.querySelectorAll(selector) as NodeListOf<T>;
  }
}