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
    };
    this.exec({ containerId, debugMode, func });
  }

  // theLogOx
private LogoxUpdatePageElements() {
    // Select post images and reset their heights
    const posts = this.dom.querySelectorAll('.post_img.slick-slide') as NodeListOf<HTMLElement>;
    
    posts.forEach((post) => {
        const img = post.querySelector('img');
        if (img) {
            img.style.height = '';
            console.log(`Reset height for image in post:`, img);
        }
    });

    // Select featured collection elements and update their styles
    const elements = this.dom.querySelectorAll('.featured-collection-section') as NodeListOf<HTMLElement>;

    elements.forEach((element) => {
        // Log the element and its classes before changes
        console.log('Before update:', element, 'Classes:', element.classList.value, 'Styles:', element.style.cssText);
        
        // Remove classes and reset styles
        element.classList.remove('pt-6', 'pt-9', 'pb-9');
        element.style.paddingTop = '';
        element.style.paddingBottom = '';
        element.style.height = '';
        
        // Log the element after changes
        console.log('After update:', element, 'Classes:', element.classList.value, 'Styles:', element.style.cssText);
    });
}

//Feldluft
private FeldluftUpdatePageElements() {
    const bulletPointsContainer = this.dom.querySelector('.dbtfy-product-bullet-points-container') as HTMLElement;
    
    if (bulletPointsContainer) {
        bulletPointsContainer.removeAttribute('hidden');
        const bulletPointsDiv = this.dom.querySelector('.dbtfy-product-bullet-points') as HTMLElement;

        if (bulletPointsDiv) {
            const bulletPointsUl = bulletPointsDiv.querySelector('ul') as HTMLElement;

            if (bulletPointsUl) {
                const classListArray = Array.from(bulletPointsDiv.classList);
                bulletPointsUl.classList.add(...classListArray);
                const dataSectionSettings = bulletPointsDiv.getAttribute('data-section-settings');
                if (dataSectionSettings) {
                    bulletPointsUl.setAttribute('data-section-settings', dataSectionSettings);
                }
                bulletPointsUl.classList.add('justify-content-start', 'text-start', 'dbtfy-product-bullet-points--items-block');
                const listItems = bulletPointsUl.querySelectorAll('li') as NodeListOf<HTMLElement>;
                listItems.forEach(li => {
                    const blockSettings = li.getAttribute('data-block-settings');
                    if (blockSettings) {
                        const settings = JSON.parse(blockSettings);
                        if (settings.collection !== "bestseller") {
                            li.style.display = 'none';
                        }
                    } else {
                        li.style.display = 'none';
                    }
                });
                bulletPointsDiv.remove();
                bulletPointsContainer.appendChild(bulletPointsUl);
            }
        }
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

}