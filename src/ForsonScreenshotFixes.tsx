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
    this.applyCustomStyles();
  }

  // Upcircle EU
  private adjustBannerImageHeight() {
    if (document.body.clientWidth > 430) {
        const bannerImage = document.querySelector('.banner_image') as HTMLElement;
        if (bannerImage) {
            const parentElement = bannerImage.parentElement;
            if (parentElement) {
                const parentHeight = parentElement.offsetHeight;
                bannerImage.style.setProperty('min-height', `${parentHeight}px`);
            } 
        } 
    }
    const collectionSidebar = document.querySelector('.collection_sidebar') as HTMLElement;
    if (collectionSidebar) {
        collectionSidebar.style.setProperty('width', '30%');
    }
}

// homepage craftklaris
  private adjustImages() {
    var viewportWidth = document.body.clientWidth;
    document.querySelectorAll('.banner__media.media').forEach(bannerElement => {
        var bannerImage = bannerElement.querySelector('img');
        if (bannerImage) {
            if (viewportWidth > 749) {
                var parentStyle = window.getComputedStyle(bannerElement);
                var parentWidth = parentStyle.getPropertyValue('width');
                var parentHeight = parentStyle.getPropertyValue('height');
                bannerImage.style.setProperty('min-width', parentWidth);
                bannerImage.style.setProperty('min-height', parentHeight);
            } else {
                bannerImage.style.removeProperty('min-width');
                bannerImage.style.removeProperty('min-height');
            }
        }
    });
    // Second part: Adjust hover effect images
    document.querySelectorAll(".media.media--hover-effect").forEach(el => {
        const images = el.querySelectorAll('img');
        if (images.length >= 2) {
            const secondImage = images[1];
            secondImage.style.minHeight = '100%';
        }else if(images.length >= 1) {
            const secondImage = images[0];
            secondImage.style.minHeight = '100%';
        }
    });
}
//MEXICO IN MY POCKET
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

  // Mirai Clinical
  private adjustProductGridAndStyles() {
    // Part 1: Remove width auto
    const style = document.createElement('style');
    style.textContent = `
        .multicolumn-list__item.center .media--adapt,
        .multicolumn-list__item .media--adapt .multicolumn-card__image {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);

    // Part 2: Adjust product grid images
    const productGrid = document.querySelector('.grid.product-grid.grid--2-col-tablet-down.grid--4-col-desktop');
    if (productGrid) {
        const listItems = productGrid.querySelectorAll('li');
        listItems.forEach(li => {
            const mediaElement = li.querySelector('.media.media--hover-effect');
            if (mediaElement) {
                const images = mediaElement.querySelectorAll('img');
                if (images.length >= 2) {
                    const secondImage = images[1];
                    secondImage.style.minHeight = '100%';
                } else if (images.length >= 1) {
                    const firstImage = images[0];
                    firstImage.style.minHeight = '100%';
                }
            }
        });
    }
}

// DAVOCADOGUY
  private removeSectionInterstitialHeight() {
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

  // FLAKON
  private adjustImageStyles(){
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

  // JELLYBEE
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

  // Rubio Monocoat
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

  private applyCustomStyles() {
    const sectionElement = document.querySelector('.elementor-section.elementor-top-section.elementor-element.elementor-element-36d57aa4.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default') as HTMLElement;
    if (sectionElement) {
        sectionElement.style.setProperty('background-image', 'linear-gradient(60deg, var(--e-global-color-9043077) 0%, #2783F3AD 100%)');
    }

    const imgElements = document.querySelectorAll('.elementor-widget-container img') as NodeListOf<HTMLImageElement>;
    imgElements.forEach(element => {
        element.style.setProperty('-webkit-mask-image', 'none');
    });
}


}