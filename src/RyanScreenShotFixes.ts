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
    const classes = [".dbtfy-color-swatches-container", ".dbtfy-color-swatches", ".dbtfy-faq", ".dbtfy-product-bullet-points-container"];
    classes.forEach((cls) => {
      this.allElements(cls)?.forEach((m: HTMLElement) => this.displayBlock(m));
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

  const overlayElement = this.dom.querySelector("#GlobalLoadingOverlayBlank.loading-overlay.loading-overlay--global-initial") as HTMLElement;
  if (overlayElement) overlayElement.classList.add("hidden");

  const toolbarElement = this.dom.getElementById("enable-toolbar") as HTMLElement;
  if (toolbarElement) toolbarElement.remove();

  const hamburgerLines = this.dom.querySelectorAll("#DrawerMenuToggler .hamburger__line") as NodeListOf<HTMLElement>;
  hamburgerLines.forEach(line => line.style.display = 'block');
}

}