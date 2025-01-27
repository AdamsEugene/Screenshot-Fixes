import Common from "./Common";

export default class KwasiOwusuScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.adjustClearDivForBlackLEDLight();
      this.fixMissingImagesForBlackLEDLight();
    };
    this.exec({ containerId, debugMode, func });
  }
  
  // fix for black LED Light image issues
  private adjustClearDivForBlackLEDLight() {
    setInterval(() => {
      try {
        // Select the parent wrapper with the specified class
        const parentWrapper = document.querySelector<HTMLDivElement>('.style-c.wrapper');
        if (!parentWrapper) return;

        // Select the child div with the specific style
        const clearDiv = parentWrapper.querySelector<HTMLDivElement>('div[style*="clear: both; display: none"]');
        if (!clearDiv) return;

        // Remove "display" from the inline style of the div
        clearDiv.style.removeProperty('display');
      } catch (error) {
        console.error('Error adjusting clear div:', error);
      }
    }, 500);
  }

  private fixMissingImagesForBlackLEDLight() {
    setInterval(() => {
      try {
        // Select all spans with the class `lazy-image` and missing <img> tag
        const lazyImageSpans = document.querySelectorAll<HTMLSpanElement>('.lazy-image');

        if (!lazyImageSpans.length) return;

        lazyImageSpans.forEach((span) => {
          const hasImage = span.querySelector<HTMLImageElement>('img');
          if (hasImage) return;
          
          const imageUrl = span.getAttribute('data-image');
          const altText = span.getAttribute('data-alt') || 'Image';
          
          if (!imageUrl) return;

         
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = altText;
          imgElement.style.maxWidth = '150px';
          imgElement.style.width = '100%';
          imgElement.style.height = 'auto';
         
          span.appendChild(imgElement);
        });
      } catch (error) {
        
      }
    }, 5000);
  }
}
