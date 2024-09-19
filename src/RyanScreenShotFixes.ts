import Common from "./Common";

export default class RyanScreenshotFixes extends Common {

  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.LogoxUpdatePageElements();
      this.setElementDisplayToBlock();
      this.FeldluftUpdatePageElements();
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
    // Select the container for the bullet points
    const bulletPointsContainer = this.dom.querySelector('.dbtfy-product-bullet-points-container') as HTMLElement;
    
    if (bulletPointsContainer) {
        // Remove 'hidden' attribute from the container
        bulletPointsContainer.removeAttribute('hidden');
        console.log('Removed hidden attribute from:', bulletPointsContainer);

        // Select the div with class "dbtfy-product-bullet-points" that contains a child ul
        const bulletPointsDiv = this.dom.querySelector('.dbtfy-product-bullet-points') as HTMLElement;

        if (bulletPointsDiv) {
            const bulletPointsUl = bulletPointsDiv.querySelector('ul') as HTMLElement;

            if (bulletPointsUl) {
                // Log the bulletPointsDiv and bulletPointsUl before changes
                console.log('Before update:', bulletPointsDiv, 'Classes:', bulletPointsDiv.classList.value, 'Data-section-settings:', bulletPointsDiv.getAttribute('data-section-settings'));

                // Convert DOMTokenList to array and copy the class attribute from the div to the ul
                const classListArray = Array.from(bulletPointsDiv.classList);
                bulletPointsUl.classList.add(...classListArray);

                // Add the data-section-settings attribute from the div to the ul
                const dataSectionSettings = bulletPointsDiv.getAttribute('data-section-settings');
                if (dataSectionSettings) {
                    bulletPointsUl.setAttribute('data-section-settings', dataSectionSettings);
                }

                // Add additional classes to the ul
                bulletPointsUl.classList.add('justify-content-start', 'text-start', 'dbtfy-product-bullet-points--items-block');
                
                // Filter the li elements to only show those with data-block-settings "collection" set to "bestseller"
                const listItems = bulletPointsUl.querySelectorAll('li') as NodeListOf<HTMLElement>;
                listItems.forEach(li => {
                    const blockSettings = li.getAttribute('data-block-settings');
                    if (blockSettings) {
                        const settings = JSON.parse(blockSettings);
                        if (settings.collection !== "bestseller") {
                            li.style.display = 'none';  // Hide li elements that don't match the condition
                            console.log('Hid item:', li, 'Collection:', settings.collection);
                        }
                    } else {
                        li.style.display = 'none';  // Hide li elements without the data-block-settings attribute
                        console.log('Hid item without data-block-settings:', li);
                    }
                });

                // Remove the original div and move the ul to the container div
                bulletPointsDiv.remove();
                bulletPointsContainer.appendChild(bulletPointsUl);

                console.log('Updated the ul, filtered list items, and moved it to the container.');

                // Log the bulletPointsUl after changes
                console.log('After update:', bulletPointsUl, 'Classes:', bulletPointsUl.classList.value, 'Data-section-settings:', bulletPointsUl.getAttribute('data-section-settings'));
            }
        }
    }
}




private setElementDisplayToBlock() {
    const classes = [".dbtfy-color-swatches-container", ".dbtfy-color-swatches", ".dbtfy-faq", ".dbtfy-product-bullet-points-container"];
    classes.forEach((cls) => {
      this.allElements(cls)?.forEach((m: HTMLElement) => this.displayBlock(m));
    });
  }

}