import Common from "./Common";

export default class RyanScreenshotFixes extends Common {

  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.LogoxUpdatePageElements();
      this.setElementDisplayToBlock();
      this.FeldluftUpdatePageElements();
      this.QuotidienUpdateElementHeight();
      this.GodzillaUpdateHeaderPadding();
      this.ArcticUpdateGalleryCells();
      this.CoThirtySixshowBarsInContainer();
      this.RhinoUsaremoveWidthFromMenuDrawer();
      this.BreeoupdateBannerMinHeight();
      this.PenguinDojoupdateElements();
      this.aktlondonUpdatePageElements();
      this.heyhairMobileToggleButton();
      this.springerupdatePageElements();
      this.OliviaPearlupdateHeader();
      this.hideSearchElementIfToggleExists();
      this.BraceAbilityupdateHeader();
      this.UpdateIframeSrc();
      this.PetsmontremoveExtraFooter();
      this.Mimibeltupdatefooter();
    };
    this.exec({ containerId, debugMode, func });
  }

  // theLogOx
private LogoxUpdatePageElements() {
    const posts = this.dom.querySelectorAll('.post_img.slick-slide') as NodeListOf<HTMLElement>;
    posts.forEach((post) => {
        const img = post.querySelector('img');
        if (img) {
            img.style.height = '';
            console.log(`Reset height for image in post:`, img);
        }
    });
    const elements = this.dom.querySelectorAll('.featured-collection-section') as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
        console.log('Before update:', element, 'Classes:', element.classList.value, 'Styles:', element.style.cssText);
        element.classList.remove('pt-6', 'pt-9', 'pb-9');
        element.style.paddingTop = '';
        element.style.paddingBottom = '';
        element.style.height = '';
        console.log('After update:', element, 'Classes:', element.classList.value, 'Styles:', element.style.cssText);
    });
}

//Feldluft
    private FeldluftUpdatePageElements() {
      const bulletPointsContainer = this.dom.querySelector('.dbtfy-product-bullet-points-container') as HTMLElement;
      const bulletPointsUl = this.dom.querySelector('.dbtfy-product-bullet-points ul') as HTMLElement;
      if (bulletPointsContainer && bulletPointsUl) {
          bulletPointsContainer.removeAttribute('hidden');
          bulletPointsUl.classList.add(...Array.from(bulletPointsUl.parentElement?.classList || []), 'justify-content-start', 'text-start', 'dbtfy-product-bullet-points--items-block');
          bulletPointsUl.setAttribute('data-section-settings', bulletPointsUl.parentElement?.getAttribute('data-section-settings') || '');
          bulletPointsUl.querySelectorAll('li').forEach(li => li.style.display = JSON.parse(li.getAttribute('data-block-settings') || '{}').collection === "bestseller" ? '' : 'none');
          bulletPointsContainer.appendChild(bulletPointsUl);
      }
  }

//Quotidien
private QuotidienUpdateElementHeight() {
  const elements = this.dom.querySelectorAll('.custom-content.grid-masonary.grid-masonary-1598306753941') as NodeListOf<HTMLElement>;
  elements.forEach((element) => {
    const actualHeight = element.getAttribute('actualheight');
    if (actualHeight) {
      element.style.height = actualHeight;
    }
  });
}

//Godzilla
private GodzillaUpdateHeaderPadding() {
  const gridLayouts = this.dom.querySelectorAll('.collection-grid__layout') as NodeListOf<HTMLElement>;
  gridLayouts.forEach((layout) => {
    const header = layout.querySelector('.collection-grid__header') as HTMLElement;
    if (header) {
      header.style.paddingTop = '260px';
    }
  });
}

//Arctic Cool
private ArcticUpdateGalleryCells() {
  const swiperWrapper = this.dom.querySelector('.swiper-wrapper') as HTMLElement;
  if (swiperWrapper) {
    const galleryCells = swiperWrapper.querySelectorAll('.gallery-cell') as NodeListOf<HTMLElement>;
    galleryCells.forEach((cell) => {
      cell.style.width = '249.2px';
      if (cell.style.display === 'none') {
        cell.style.display = '';
      }
      cell.style.maxWidth = '';
      cell.style.minWidth = '';
    });
  }
}

private setElementDisplayToBlock() {
    const classes = [".dbtfy-color-swatches-container", ".dbtfy-color-swatches", ".dbtfy-faq", ".dbtfy-product-bullet-points-container", ".hamburger__line", ".swiper-button-next", ".swiper-button-prev"];
    classes.forEach((cls) => {
      this.allElements(cls)?.forEach((m: HTMLElement) => this.displayBlock(m, true));
    });
  }

  // CoThirty Six
  private  CoThirtySixshowBarsInContainer() {
  const containers = this.dom.querySelectorAll('.mb_container') as NodeListOf<HTMLElement>;
  containers.forEach((container) => {
    const bar1 = container.querySelector('.bar1') as HTMLElement;
    const bar2 = container.querySelector('.bar2') as HTMLElement;
    if (bar1 && bar2) {
      bar1.style.display = '';
      bar2.style.display = '';
    }
  });
}

//RhinoUsa
private RhinoUsaremoveWidthFromMenuDrawer() {
  const menuDetails = this.dom.querySelectorAll('.ms-menu-details') as NodeListOf<HTMLElement>;
  menuDetails.forEach((element) => {
      const menuDrawer = element.querySelector('.ms-menu-drawer') as HTMLElement;
      if (menuDrawer) {
          if (menuDrawer.style.width === '100%') {
              menuDrawer.style.setProperty('width', 'auto', 'important');  
              menuDrawer.style.setProperty('min-width', 'max-content', 'important');  
          }
      }
  });
}

// Breeo
private BreeoupdateBannerMinHeight() {
  this.dom.querySelectorAll('.shopify-section.section.image-banner-section').forEach((section: HTMLElement) => {
    const banner = section.querySelector('.banner.banner-medium.theme-dark') as HTMLElement;
    const bannerContent = banner?.querySelector('.banner-content.banner-content-bottom-left.banner-content-mobile-top.container') as HTMLElement;
    banner?.style.setProperty('min-height', 'auto', 'important');
    bannerContent?.style.setProperty('margin-top', '125px', 'important');
  });
}

//Penguin Dojo
private PenguinDojoupdateElements() {
  const drawerMenuElement = this.dom.getElementById("DrawerMenu") as HTMLElement;
  if (drawerMenuElement) drawerMenuElement.style.removeProperty('height');

  const overlayElement = this.dom.getElementById("GlobalLoadingOverlayBlank") as HTMLElement;
  if (overlayElement) overlayElement.classList.add("hidden");

  const toolbarElement = this.dom.getElementById("enable-toolbar") as HTMLElement;
  if (toolbarElement) toolbarElement.remove();

  const hamburgerToggler = this.dom.getElementById("DrawerMenuToggler") as HTMLElement;
  if (hamburgerToggler) {
    const hamburgerLines = hamburgerToggler.querySelectorAll(".hamburger__line") as NodeListOf<HTMLElement>;
    hamburgerLines.forEach(line => line.style.display = 'block');
  }
}

//aktlondon
private aktlondonUpdatePageElements() {
  (this.dom.querySelector("video.md\\:lp-block") as HTMLElement)?.style.setProperty("height", "auto", "important");
  (this.dom.querySelector("#widget_cont #widget-header") as HTMLElement)?.style.setProperty("overflow", "hidden", "important");
  (this.dom.querySelector("#widget_cont #widget-header") as HTMLElement)?.style.setProperty("height", "600px", "important");
}

//hey Hair
private heyhairMobileToggleButton() {
  this.dom.querySelectorAll('.mobile-header.py-2.w3_bg.sticky--enabled').forEach((mobileHeader: HTMLElement) => {
      const toggleButton = mobileHeader.querySelector('.mobile-menu__toggle-button.mobile-toggle__position--left.w3_bg') as HTMLElement;

      if (toggleButton && toggleButton.style.display === 'none') {
          toggleButton.style.setProperty('display', '', 'important');
      }
  });
}

//springerpets
private springerupdatePageElements() {
  this.dom.querySelectorAll('.product-image-container').forEach((parent) => {
    const child = parent.querySelector('#product-hero-7') as HTMLElement;
    if (child) {
      child.style.removeProperty('opacity');
    }
  });

  this.dom.querySelectorAll('.spo-loaded').forEach((parent) => {
      const miniCart = parent.querySelector('#shopify-section-global-minicart') as HTMLElement;
      if (miniCart) {
          miniCart.style.display = "none";
      }
  });
}

//Olivia Pearl
private OliviaPearlupdateHeader() {
  this.dom.querySelectorAll('#shopify-section-header').forEach((headerElement: HTMLElement) => {
    if (headerElement.style.position === 'initial') {
      headerElement.style.setProperty('position', 'fixed', 'important');
    }
  });
}

// persmount
private hideSearchElementIfToggleExists() {
  const headerSearchElement = this.dom.querySelector('.header-search') as HTMLElement;
  if (headerSearchElement && headerSearchElement.querySelector('.header-search-toggle')) {
      headerSearchElement.style.setProperty('display', 'none');
  }
}

//BraceAbility 
private BraceAbilityupdateHeader() {
  const parentElement = this.dom.querySelector('.transition-body') as HTMLElement;
  if (parentElement) {
    const headerElement = parentElement.querySelector('#shopify-section-header') as HTMLElement;
    if (headerElement?.style.position === 'fixed') {
      headerElement.style.setProperty('position', 'relative', 'important');
    } 
    const mainContentElement = parentElement.querySelector('#MainContent') as HTMLElement;
    if (mainContentElement) {
      mainContentElement.style.marginTop = '';
    }
  }
}

//Petsmont
private PetsmontremoveExtraFooter() {
  const footerSections = this.dom.querySelectorAll<HTMLElement>('#shopify-section-sections--18006968729850__footer.shopify-section.shopify-section-group-footer-group');
  
  footerSections.forEach((section, index) => {
    if (index > 0) section.remove();
  });

  this.dom.querySelectorAll<HTMLElement>('.col-lg-3.col-md-3.col-sm-6.col-6').forEach(parent => {
    const ulElement = parent.querySelector<HTMLElement>('.list-unstyled.li-space-lg.p-small');
    ulElement?.querySelectorAll<HTMLElement>('li a').forEach(link => {
      link.style.color = '#dfd8d2';
    });
  });
}

//Mimi Belt
private Mimibeltupdatefooter() {
  this.dom.querySelectorAll('.footer.color-scheme-sections--18119191265494__footer.color-accent-1.gradient.section-sections--18119191265494__footer-padding.animate-section.animate--hidden.animate--shown')
      .forEach(footer => {
          const childElement = footer.querySelector('.footer__content-bottom.animate-item.animate-item--child') as HTMLElement;
          if (childElement) childElement.style.opacity = '1';
      });
  
  this.dom.querySelectorAll('.footer__blocks-wrapper.grid .footer-block.grid__item')
      .forEach(childBlock => (childBlock as HTMLElement).style.opacity = '1');
}

//Iframe Update
private UpdateIframeSrc() {
   const iframe = this.dom.querySelector('iframe') as HTMLIFrameElement;
    if (iframe) {
      let iframeSrc = iframe.getAttribute('src');
      if (iframeSrc) {
        const proxyUrl1 = 'https://dashboard.heatmap.com/proxy/spa-only/getUrl?url=';
        const proxyUrl2 = 'https://dashboard.heatmap.com/proxy/getUrl?url=';

        const removeProxyUrl = (url: string, proxyUrl: string): string => {
          if (url.startsWith(proxyUrl)) {
            return decodeURIComponent(url.replace(proxyUrl, ''));
          }
          return url;
        };

        iframeSrc = removeProxyUrl(iframeSrc, proxyUrl1);
        iframeSrc = removeProxyUrl(iframeSrc, proxyUrl2);

        iframe.setAttribute('src', iframeSrc);
        iframe.onload = () => {};
        iframe.onerror = () => {
          iframe.setAttribute('src', proxyUrl1 + encodeURIComponent(iframeSrc));
          iframe.onload = () => {};
          iframe.onerror = () => {
            iframe.setAttribute('src', proxyUrl2 + encodeURIComponent(iframeSrc));
            iframe.onload = () => {};
            iframe.onerror = () => {};
          };
        };
      }
    }
}


}