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
    this.applyResponsiveStyles()
  }

  private adjustBannerImageHeight() {
    console.log('running adjustBannerImageHeight()');
    
    if (this.document.body.clientWidth <= 430) return;

    const bannerImage = this.document.querySelector('.banner_image');
    if (!(bannerImage instanceof HTMLImageElement)) return;

    const parentElement = bannerImage.parentElement;
    if (!parentElement) return;

    const parentHeight = parentElement.offsetHeight;
    bannerImage.style.setProperty('min-height', `${parentHeight}px`);
  }

  private adjustImages(): void {
    console.log('running adjustImages()');
    this.adjustBannerImages();
    this.adjustHoverEffectImages();
  }

  private adjustBannerImages(): void {
    console.log('running adjustBannerImages()');
    const viewportWidth = this.document.body.clientWidth;
    this.document.querySelectorAll('.banner__media.media').forEach(bannerElement => {
      const bannerImage = bannerElement.querySelector('img');
      if (!(bannerImage instanceof HTMLImageElement)) return;

      if (viewportWidth > 749) {
        this.setImageDimensions(bannerImage, bannerElement);
      } else {
        this.removeImageDimensions(bannerImage);
      }
    });
  }

  private adjustHoverEffectImages(): void {
    console.log('running adjustHoverEffectImages()');
    this.document.querySelectorAll(".media.media--hover-effect").forEach(el => {
      const images = el.querySelectorAll('img');
      const targetImage = images.length >= 2 ? images[1] : images[0];
      if (targetImage instanceof HTMLImageElement) {
        targetImage.style.minHeight = '100%';
      }
    });
  }

  private adjustPromoGridImages(): void {
    console.log('running adjustPromoGridImages()');
    const viewportWidth = this.document.body.clientWidth;
    this.document.querySelectorAll('.promo-grid__bg').forEach(promoElement => {
      const promoImage = promoElement.querySelector('img');
      if (!(promoImage instanceof HTMLImageElement)) return;

      if (viewportWidth > 767) {
        this.setImageDimensions(promoImage, promoElement);
      } else {
        this.removeImageDimensions(promoImage);
      }
    });
  }

  private adjustProductGridAndStyles(): void {
    console.log('running adjustProductGridAndStyles()');
    this.addProductGridStyles();
    this.adjustProductGridImages();
  }

  private addProductGridStyles(): void {
    console.log('running addProductGridStyles()');
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
    console.log('running adjustProductGridImages()');
    const productGrid = this.document.querySelector('.grid.product-grid.grid--2-col-tablet-down.grid--4-col-desktop');
    if (!productGrid) return;

    const listItems = productGrid.querySelectorAll('li');
    listItems.forEach(li => {
      const mediaElement = li.querySelector('.media.media--hover-effect');
      if (!(mediaElement instanceof HTMLElement)) return;

      const images = mediaElement.querySelectorAll('img');
      const targetImage = images.length >= 2 ? images[1] : images[0];
      if (targetImage instanceof HTMLImageElement) {
        targetImage.style.minHeight = '100%';
      }
    });
  }




  private removeSectionInterstitialHeight(): void {
    console.log('running removeSectionInterstitialHeight()');
    const elements = this.document.querySelectorAll('.section-interstitial');
    elements.forEach(element => {
      if (!(element instanceof HTMLElement)) return;

      element.style.removeProperty('height');
      if (element.style.getPropertyPriority('height') === 'important') {
        element.style.setProperty('height', 'initial', 'important');
      }
    });
  }



  
  private adjustImageStyles(): void {
    console.log('running adjustImageStyles()');
    const targetDivs = this.document.querySelectorAll('.image-wrap, .text-spacing');

    targetDivs.forEach(div => {
      if (div instanceof HTMLElement) {
        div.style.removeProperty('height');
        div.style.setProperty('padding-bottom', '1px', 'important');

        const img = div.querySelector('img');
        if (img instanceof HTMLImageElement) {
          img.style.setProperty('height', 'auto', 'important');
        }
      }
    });
  }

  private removeDisplayNone(): void {
    console.log('running removeDisplayNone()');
    const classList = [
      'jdgm-widget',
      'jdgm-carousel',
      'jdgm-carousel--default-theme',
      'jdgm-carousel--done',
      'jdgm-carousel-wrapper',
      'jdgm-carousel__left-arrow',
      'jdgm-carousel__right-arrow'
    ];
    
    classList.forEach(className => {
      const elements = this.document.querySelectorAll(`.${className}`) as NodeListOf<HTMLElement>;
      elements.forEach(element => {
        element.style.removeProperty('display');
      });
    });
  }

  private removeProperties(): void {
    console.log('running removeProperties()');
    this.removeSectionHeight();
    this.removeImgFitDimensions();
  }

  private removeSectionHeight(): void {
    console.log('running removeSectionHeight()');
    const sectionElement = this.document.querySelector('.icons-with-text.section.section--full-width.section--padded-small.color-scheme.color-scheme--2');
    if (sectionElement instanceof HTMLElement) {
      sectionElement.style.removeProperty('height');
    }
  }

  private removeImgFitDimensions(): void {
    console.log('running removeImgFitDimensions()');
    const imgFitElements = this.document.querySelectorAll('.img-fit');
    imgFitElements.forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.removeProperty('height');
        element.style.removeProperty('width');
      }
    });
  }

  private applyResponsiveStyles(): void {
    console.log('running applyResponsiveStyles()');
    const viewportWidth = this.document.body.clientWidth;
    if (viewportWidth <= 749) {
      const productIngredientsElement = this.document.querySelector('.product-ingredients');
      if (productIngredientsElement instanceof HTMLElement) {
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
}