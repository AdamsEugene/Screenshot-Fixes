import { log } from "console";

export default class ForsonScreenshotFixes {
  private document: Document;

  /* constructor(dom: Document = document) {
    this.document = dom;
  } */

  constructor(dom: Document = document) {
    this.document = dom;
    this.setupLoadEventListener();
  }

  private setupLoadEventListener(): void {
    window.addEventListener("load", () => {
      this.init();
    });
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
    this.updateElements();
    this.setMinWidthForImages();
    this.setMinHeightForSection();
    this.updateStyles();
    this.DavocadoBgImage();
    this.setImageMinHeight();
    this.modifyAKTElements();
    this.setBackgroundTransparent();
    this.disableClicks();
    this.disableCartClicks();
    this.setChildDisplayBlock();
    this.deleteParentIfContainsChild();
    this.removeImportantStylesFromElement();
    this.updateFeaturedCollectionSection();
    this.hideEmptyMinicart();
    this.centerUlInCustomBlk();
    this.LogoxUpdatePageElements();
    this.overrideMaxWidthInProductSlider();
    this.RubioMonocoatUpdateMenuState()
  }

  // Upcircle EU
  private adjustBannerImageHeight() {
    if (this.document?.body?.clientWidth > 430) {
      const bannerImage = this.document.querySelector(
        ".banner_image"
      ) as HTMLElement;
      if (bannerImage) {
        const parentElement = bannerImage.parentElement;
        if (parentElement) {
          const parentHeight = parentElement.offsetHeight;
          bannerImage.style.setProperty("min-height", `${parentHeight}px`);
        }
      }
    }
    const collectionSidebar = this.document.querySelector(
      ".collection_sidebar"
    ) as HTMLElement;
    if (collectionSidebar) {
      collectionSidebar.style.setProperty("width", "30%");
    }
  }

  // homepage craftklaris
  private adjustImages() {
    var viewportWidth = this.document?.body?.clientWidth;
    this.document
      .querySelectorAll(".banner__media.media")
      .forEach((bannerElement) => {
        var bannerImage = bannerElement.querySelector("img");
        if (bannerImage) {
          if (viewportWidth > 749) {
            var parentStyle = window.getComputedStyle(bannerElement);
            var parentWidth = parentStyle.getPropertyValue("width");
            var parentHeight = parentStyle.getPropertyValue("height");
            bannerImage.style.setProperty("min-width", parentWidth);
            bannerImage.style.setProperty("min-height", parentHeight);
          } else {
            bannerImage.style.removeProperty("min-width");
            bannerImage.style.removeProperty("min-height");
          }
        }
      });
    this.document
      .querySelectorAll(".media.media--hover-effect")
      .forEach((el) => {
        const images = el.querySelectorAll("img");
        if (images.length >= 2) {
          const secondImage = images[1];
          secondImage.style.minHeight = "100%";
        } else if (images.length >= 1) {
          const secondImage = images[0];
          secondImage.style.minHeight = "100%";
        }
      });
  }
  //MEXICO IN MY POCKET
  private adjustPromoGridImages(): void {
    const viewportWidth = this.document?.body?.clientWidth;
    this.document
      .querySelectorAll(".promo-grid__bg")
      .forEach((promoElement) => {
        const promoImage = promoElement.querySelector("img");
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
    const style = this.document.createElement("style");
    style.textContent = `
        .multicolumn-list__item.center .media--adapt,
        .multicolumn-list__item .media--adapt .multicolumn-card__image {
            width: 100% !important;
        }
    `;
    this.document.head.appendChild(style);
    const productGrid = this.document.querySelector(
      ".grid.product-grid.grid--2-col-tablet-down.grid--4-col-desktop"
    );
    if (productGrid) {
      const listItems = productGrid.querySelectorAll("li");
      listItems.forEach((li) => {
        const mediaElement = li.querySelector(".media.media--hover-effect");
        if (mediaElement) {
          const images = mediaElement.querySelectorAll("img");
          if (images.length >= 2) {
            const secondImage = images[1];
            secondImage.style.minHeight = "100%";
          } else if (images.length >= 1) {
            const firstImage = images[0];
            firstImage.style.minHeight = "100%";
          }
        }
      });
    }
  }


  private removeSectionInterstitialHeight() {
    const elements = this.document.querySelectorAll(".section-interstitial");
    elements.forEach((element) => {
      if (!(element instanceof HTMLElement)) return;

      element.style.removeProperty("height");
      if (element.style.getPropertyPriority("height") === "important") {
        element.style.setProperty("height", "initial", "important");
      }
    });
  }

    // DAVOCADOGUY
    private setMinHeightForSection() {
      const element = this.document.querySelector('.section-interstitial') as HTMLElement;
      if (element) {
          element.style.setProperty('min-height', '100%', 'important');
      }
  }
  private DavocadoBgImage() {
    const imgElement = this.document.querySelector('.section-interstitial__img img') as HTMLElement;
    if (imgElement) {
        imgElement.style.setProperty('min-height', '100vh');
    }
}

  // FLAKON
  private adjustImageStyles() {
    const targetDivs = this.document.querySelectorAll(
      ".image-wrap, .text-spacing"
    );

    targetDivs.forEach((div) => {
      if (div instanceof HTMLElement) {
        div.style.removeProperty("height");
        div.style.setProperty("padding-bottom", "1px", "important");

        const img = div.querySelector("img");
        if (img instanceof HTMLImageElement) {
          img.style.setProperty("height", "auto", "important");
        }
      }
    });
  }

  // JELLYBEE
  private removeDisplayNone(): void {
    const classList = [
      "jdgm-widget",
      "jdgm-carousel",
      "jdgm-carousel--default-theme",
      "jdgm-carousel--done",
      "jdgm-carousel-wrapper",
      "jdgm-carousel__left-arrow",
      "jdgm-carousel__right-arrow",
    ];

    classList.forEach((className) => {
      const elements = this.document.querySelectorAll(
        `.${className}`
      ) as NodeListOf<HTMLElement>;
      elements.forEach((element) => {
        element.style.removeProperty("display");
      });
    });
  }

  // Rubio Monocoat
  private removeProperties(): void {
    this.removeSectionHeight();
    this.removeImgFitDimensions();
  }

  private removeSectionHeight(): void {
    const sectionElement = this.document.querySelector(
      ".icons-with-text.section.section--full-width.section--padded-small.color-scheme.color-scheme--2"
    );
    if (sectionElement instanceof HTMLElement) {
      sectionElement.style.removeProperty("height");
    }
  }

  private removeImgFitDimensions(): void {
    const imgFitElements = this.document.querySelectorAll(".img-fit");
    imgFitElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.style.removeProperty("height");
        element.style.removeProperty("width");
      }
    });
  }

  private applyResponsiveStyles(): void {
    const viewportWidth = this.document?.body?.clientWidth;
    if (viewportWidth <= 749) {
      const productIngredientsElement = this.document.querySelector(
        ".product-ingredients"
      );
      if (productIngredientsElement instanceof HTMLElement) {
        productIngredientsElement.style.setProperty(
          "--carousel-edge",
          "max(calc(var(--spacing-edge) * 0), 0rem)"
        );
      }
    }
  }

  private setImageDimensions(image: HTMLImageElement, parent: Element): void {
    const parentStyle = window.getComputedStyle(parent);
    image.style.setProperty("min-width", parentStyle.getPropertyValue("width"));
    image.style.setProperty(
      "min-height",
      parentStyle.getPropertyValue("height")
    );
  }

  private removeImageDimensions(image: HTMLImageElement): void {
    image.style.removeProperty("min-width");
    image.style.removeProperty("min-height");
  }

  private applyCustomStyles() {
    const sectionElement = this.document.querySelector(
      ".elementor-section.elementor-top-section.elementor-element.elementor-element-36d57aa4.elementor-section-content-middle.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default"
    ) as HTMLElement;
    if (sectionElement) {
      sectionElement.style.setProperty(
        "background-image",
        "linear-gradient(60deg, var(--e-global-color-9043077) 0%, #2783F3AD 100%)"
      );
    }
    const imgElements = this.document.querySelectorAll(
      ".elementor-widget-container img"
    ) as NodeListOf<HTMLImageElement>;
    imgElements.forEach((element) => {
      element.style.setProperty("-webkit-mask-image", "none");
    });
  }

  //rubi
  private updateElements() {
    const wrapperElements = this.document.querySelectorAll(
      ".rimage-wrapper.lazyload--placeholder"
    ) as NodeListOf<HTMLImageElement>;
    wrapperElements.forEach((element) => {
      element.style.background = "none";
    });

    const imageElements = this.document.querySelectorAll(
      ".rimage__image"
    ) as NodeListOf<HTMLImageElement>;
    imageElements.forEach((element) => {
      element.style.height = "";
      element.style.width = "";
    });
    const cartPopupElement = this.document.getElementById("CartPopup");
    if (cartPopupElement) {
      cartPopupElement.style.width = "";
    }
  }

  // RA optics
    private setMinWidthForImages() {
      const images = this.document.querySelectorAll('.rimage__image, .okeReviews-reviewsCarousel-review-product-image');
      images.forEach(image => {
          (image as HTMLElement).style.setProperty('min-width', '100%');
      });
  }
    
  // ELEAT
  private updateStyles() {
    const benefitImage = this.document.querySelector('.benefit-sticky-image') as HTMLElement;
    if (benefitImage) {
        benefitImage.style.setProperty('transform', 'translate(0px, 580px)', 'important');
    }
    const reviewSection = this.document.querySelector('.review-section.bg-natural.py-4.desktop\\:py-14') as HTMLElement;
    if (reviewSection) {
        reviewSection.style.setProperty('position', 'relative', 'important');
    }
    const absoluteElement = this.document.querySelector('.absolute.-bottom-60.left-0.z-0.w-144') as HTMLElement;
    if (absoluteElement) {
        absoluteElement.style.setProperty('display', 'none', 'important');
    }
}

// Infinity Laser Spa
private setImageMinHeight(): void {
  const className = '.image-wrap';
  const elements = this.document.querySelectorAll(className) as NodeListOf<HTMLElement>;
  elements.forEach(element => {
    const parentHeight = element.offsetHeight;
    const images = element.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      img.style.minHeight = `${parentHeight}px`;
    });
  });
}

// AKT London
private modifyAKTElements() {
  const swiperElement = this.document.querySelector('.z-0.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events') as HTMLElement;
  if (swiperElement) {
    swiperElement.style.setProperty('overflow', 'hidden', 'important');
  }
  const flexElement = this.document.querySelector('.flex.flex-col.min-h-screen.font-primary') as HTMLElement;
  if (flexElement) {
    flexElement.style.setProperty('min-height', 'auto', 'important');
  }
}


// Eleganza
private setBackgroundTransparent() {
  const elements = this.document.querySelectorAll('.logos__link-overlay') as NodeListOf<HTMLImageElement>;
  elements.forEach(element => {
    element.style.setProperty('background', 'transparent', 'important');
  });
}

// voluspa
private disableClicks() {
  console.log('voluspa');
  
  this.document.querySelectorAll<HTMLElement>(".icon-bag.mini_cart.dropdown_link.active_link")
    .forEach(el => el.style.pointerEvents = 'none');
}

private disableCartClicks() {
  this.document.querySelectorAll<HTMLElement>(".icon-bag.mini_cart.dropdown_link.active_link")
    .forEach(el => {
      el.style.setProperty('pointer-events', 'none', 'important');
      el.style.setProperty('cursor', 'not-allowed', 'important');
    });
}


// Grace de Monaco
private setChildDisplayBlock() {
  console.log("Grace de Monaco");
  this.document.querySelectorAll<HTMLElement>(".CollectionItem__ImageWrapper")
    .forEach(el => Array.from(el.children).forEach(child => (child as HTMLElement).style.setProperty('display', 'block', 'important')));
}


//  NuroJit
private deleteParentIfContainsChild() {
  const parentElements = this.document.querySelectorAll('.shopify-section.shopify-section-group-header-group.section') as NodeListOf<HTMLImageElement>;
  parentElements.forEach(parent => {
      const child = parent.querySelector('.color-background-1.gradient');
      if (child) {
          parent.remove();
      } 
  });
}

// arctic cool
private removeImportantStylesFromElement() {
  const parentElement = this.document.querySelector('.gallery-cell.thumbnail.quick-shop-style--popup.swiper-slide-active.swiper-slide') as HTMLElement;
  if (parentElement) {
      const childElement = parentElement.querySelector('.gallery-cell__wrap') as HTMLElement;
      if (childElement) {
          parentElement.style.setProperty('width', 'auto', 'important');
          parentElement.style.setProperty('max-width', 'none', 'important');
          parentElement.style.setProperty('min-width', '0', 'important');
      }
  }
  const headerElement = this.document.getElementById('header');
  if (headerElement && headerElement.classList.contains('mobile_nav-fixed--true')) {
      headerElement.style.setProperty('top', '0px', 'important');
  } 
}

private updateFeaturedCollectionSection() {
  const parentElements = this.document.querySelectorAll('.featured-collection-section') as NodeListOf<HTMLElement>;
  parentElements.forEach(parent => {
    parent.classList.remove('pt-6', 'pt-9', 'pb-9');
    parent.style.paddingTop = '';
    parent.style.paddingBottom = '';
  });
}

// pet gently
private hideEmptyMinicart() {
  var minicartWrapper = this.document.querySelector('.mnc') as HTMLElement;
  if (minicartWrapper && minicartWrapper.querySelector('.minicart_wrapper')) {
      minicartWrapper.style.setProperty('display', 'none', 'important');
  }
}

// addison ross uk
private centerUlInCustomBlk() {
  const customBlkElements = this.document.querySelectorAll('.custom-blk') as NodeListOf<HTMLElement>;
  customBlkElements.forEach(function(element) {
      const ulElement = element.querySelector('ul') as HTMLElement;
      if (ulElement) {
          ulElement.style.justifyContent = 'space-evenly';
      }
  });
}

// logOx (ryan)
private LogoxUpdatePageElements() {
  var posts = this.document.querySelectorAll('.post_img.slick-slide') as NodeListOf<HTMLElement>;
  posts.forEach(function(post) {
      var img = post.querySelector('img');
      if (img) {
          img.style.height = '';
      }
  });
  var elements = this.document.querySelectorAll('.featured-collection-section') as NodeListOf<HTMLElement>;
  elements.forEach(function(element) {
      element.classList.remove('pt-6', 'pt-9', 'pb-9');
      element.style.paddingTop = '';
      element.style.paddingBottom = '';
      element.style.height = '';
  });
}

private overrideMaxWidthInProductSlider() {
  const productSlider = document.querySelector('.product-slider.swiper-container.swiper-container-initialized.swiper-container-horizontal') as HTMLElement;
  if (productSlider) {
    const swiperWrapper = productSlider.querySelector('.swiper-wrapper') as HTMLElement; 
    if (swiperWrapper) {
      const childElements = Array.from(swiperWrapper.children) as HTMLElement[];    
      childElements.forEach((childElement) => {
        childElement.style.setProperty('max-width', 'none', 'important');
      });
    }
  }
}

  //RubioMonocoat
  private RubioMonocoatUpdateMenuState() {
    const parentElement1 = this.document.querySelector('.main-menu') as HTMLElement;
    if (parentElement1) {
      const childElement1 = parentElement1.querySelector('.main-menu__disclosure.has-motion') as HTMLElement;
      if (childElement1) {
        childElement1.classList.add('is-open');
        childElement1.setAttribute('open', '');
      }
    }

    const parentElements2 = this.document.querySelectorAll('.js-mega-nav') as NodeListOf<HTMLElement>;
    parentElements2.forEach(parentElement2 => {
      const detailsElements = parentElement2.querySelectorAll('details') as NodeListOf<HTMLDetailsElement>;
      detailsElements.forEach(detailsElement => {
        detailsElement.setAttribute('open', ''); 
      });
    });
  }


}

