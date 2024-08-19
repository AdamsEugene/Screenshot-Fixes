export default class ForsonScreenshotFixes {
    private document: Document;
  
    constructor(dom: Document = document) {
      this.document = dom;
    }

    public init (){
      this.adjustBannerImageHeight();
      this.adjustImages();
      this.adjustPromoGridImages();
    }

    private adjustBannerImageHeight() {
      if (this.document.body.clientWidth > 430) {
          const bannerImage = this.document.querySelector('.banner_image') as HTMLElement;
  
          if (bannerImage) {
              const parentElement = bannerImage.parentElement;
  
              if (parentElement) {
                  const parentHeight = parentElement.offsetHeight;
                  bannerImage.style.setProperty('min-height', `${parentHeight}px`);
              } 
          } 
      }
  }

  private adjustImages() {
    var viewportWidth = this.document.body.clientWidth;
    // First part: Adjust all banner images
    this.document.querySelectorAll('.banner__media.media').forEach(bannerElement => {
        var bannerImage = bannerElement.querySelector('img') as HTMLElement;
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
    this.document.querySelectorAll(".media.media--hover-effect").forEach(el => {
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
// window.addEventListener('resize', adjustImages);


private adjustPromoGridImages() {
  var viewportWidth = this.document.body.clientWidth;

  this.document.querySelectorAll('.promo-grid__bg').forEach(promoElement => {
      var promoImage = promoElement.querySelector('img') as HTMLElement;
      if (promoImage) {
          if (viewportWidth > 767) {
              var parentStyle = window.getComputedStyle(promoElement);
              var parentWidth = parentStyle.getPropertyValue('width');
              var parentHeight = parentStyle.getPropertyValue('height');
              promoImage.style.setProperty('min-width', parentWidth);
              promoImage.style.setProperty('min-height', parentHeight);
          } else {
              promoImage.style.removeProperty('min-width');
              promoImage.style.removeProperty('min-height');
          }
      }
  });
}
// window.addEventListener('resize', adjustPromoGridImages);
  }
  