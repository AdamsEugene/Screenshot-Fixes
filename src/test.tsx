export default class ForsonScreenshotFixes {
    private document: Document;
  
    constructor(dom: Document = document) {
      this.document = dom;
    }

    public init (){
      this.adjustBannerImageHeight();
      this.adjustImages();
      this.adjustPromoGridImages();
      this.adjustProductGridAndStyles();
      this.removeSectionInterstitialHeight() 
    }

    // Upcircle EU
    private adjustBannerImageHeight(){
      if (this.document.body.clientWidth > 430) {
        const bannerImage = this.document.querySelector('.banner_image');
    
        if (bannerImage instanceof HTMLImageElement) {
          const parentElement = bannerImage.parentElement;
    
          if (parentElement) {
            const parentHeight = parentElement.offsetHeight;
            bannerImage.style.setProperty('min-height', `${parentHeight}px`);
          }
        }
      }
    }

  // Craftklaris
  private adjustImages() {
    const viewportWidth = this.document.body.clientWidth;
    // First part: Adjust all banner images
    this.document.querySelectorAll('.banner__media.media').forEach(bannerElement => {
      const bannerImage = bannerElement.querySelector('img');
      if (bannerImage instanceof HTMLImageElement) {
        if (viewportWidth > 749) {
          const parentStyle = window.getComputedStyle(bannerElement);
          const parentWidth = parentStyle.getPropertyValue('width');
          const parentHeight = parentStyle.getPropertyValue('height');
          bannerImage.style.setProperty('min-width', parentWidth);
          bannerImage.style.setProperty('min-height', parentHeight);
        } else {
          bannerImage.style.removeProperty('min-width');
          bannerImage.style.removeProperty('min-height');
        }
      }
    });
    // Second part: Adjust hover effect images
    this.document.querySelectorAll(".media.media--hover-effect").forEach(el => {
      const images = el.querySelectorAll('img');
      if (images.length >= 2) {
        const secondImage = images[1];
        if (secondImage instanceof HTMLImageElement) {
          secondImage.style.minHeight = '100%';
        }
      } else if (images.length >= 1) {
        const firstImage = images[0];
        if (firstImage instanceof HTMLImageElement) {
          firstImage.style.minHeight = '100%';
        }
      }
    });
  }

// MEXICO IN MY POCKET
private adjustPromoGridImages(): void {
  const viewportWidth = this.document.body.clientWidth;

  this.document.querySelectorAll('.promo-grid__bg').forEach(promoElement => {
    const promoImage = promoElement.querySelector('img');
    if (promoImage instanceof HTMLImageElement) {
      if (viewportWidth > 767) {
        const parentStyle = window.getComputedStyle(promoElement);
        const parentWidth = parentStyle.getPropertyValue('width');
        const parentHeight = parentStyle.getPropertyValue('height');
        promoImage.style.setProperty('min-width', parentWidth);
        promoImage.style.setProperty('min-height', parentHeight);
      } else {
        promoImage.style.removeProperty('min-width');
        promoImage.style.removeProperty('min-height');
      }
    }
  });
}

// Mirai Clinical
private adjustProductGridAndStyles() {
  // Part 1: Remove width auto
  const style = this.document.createElement('style');
  style.textContent = `
      .multicolumn-list__item.center .media--adapt,
      .multicolumn-list__item .media--adapt .multicolumn-card__image {
          width: 100% !important;
      }
  `;
  document.head.appendChild(style);

  // Part 2: Adjust product grid images
  const productGrid = this.document.querySelector('.grid.product-grid.grid--2-col-tablet-down.grid--4-col-desktop');
  if (productGrid) {
    const listItems = productGrid.querySelectorAll('li');
    listItems.forEach(li => {
      const mediaElement = li.querySelector('.media.media--hover-effect');
      if (mediaElement instanceof HTMLElement) {
        const images = mediaElement.querySelectorAll('img');
        if (images.length >= 2) {
          const secondImage = images[1];
          if (secondImage instanceof HTMLImageElement) {
            secondImage.style.minHeight = '100%';
          }
        } else if (images.length >= 1) {
          const firstImage = images[0];
          if (firstImage instanceof HTMLImageElement) {
            firstImage.style.minHeight = '100%';
          }
        }
      }
    });
  }
}

// DAVOCADOGUY
private removeSectionInterstitialHeight(): void {
  const elements = this.document.querySelectorAll('.section-interstitial');
  
  elements.forEach(element => {
    if (element instanceof HTMLElement) {
      element.style.removeProperty('height');
      if (element.style.getPropertyPriority('height') === 'important') {
        element.style.setProperty('height', 'initial', 'important');
      }
    }
  });
}


  }
  