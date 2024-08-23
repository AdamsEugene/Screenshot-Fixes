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
    // this.removeImageWrapStyles();
    this.adjustImageStyles()
  }

  private adjustBannerImageHeight(): void {
    if (this.document.body.clientWidth <= 430) return;

    const bannerImage = this.document.querySelector('.banner_image');
    if (!(bannerImage instanceof HTMLImageElement)) return;

    const parentElement = bannerImage.parentElement;
    if (!parentElement) return;

    const parentHeight = parentElement.offsetHeight;
    bannerImage.style.setProperty('min-height', `${parentHeight}px`);
  }

  private adjustImages(): void {
    this.adjustBannerImages();
    this.adjustHoverEffectImages();
  }

  private adjustBannerImages(): void {
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
    this.document.querySelectorAll(".media.media--hover-effect").forEach(el => {
      const images = el.querySelectorAll('img');
      const targetImage = images.length >= 2 ? images[1] : images[0];
      if (targetImage instanceof HTMLImageElement) {
        targetImage.style.minHeight = '100%';
      }
    });
  }

  private adjustPromoGridImages(): void {
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
    const elements = this.document.querySelectorAll('.section-interstitial');
    elements.forEach(element => {
      if (!(element instanceof HTMLElement)) return;

      element.style.removeProperty('height');
      if (element.style.getPropertyPriority('height') === 'important') {
        element.style.setProperty('height', 'initial', 'important');
      }
    });
  }
    private adjustImageStyles() {
      const targetDivs = document.querySelectorAll('.image-wrap, .text-spacing');
  
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