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
          // Check if the span already contains an <img> element
          const hasImage = span.querySelector<HTMLImageElement>('img');
          if (hasImage) return;

          // Get the image URL and alt text from data attributes
          const imageUrl = span.getAttribute('data-image');
          const altText = span.getAttribute('data-alt') || 'Image';

          // Validate that the required data attributes exist
          if (!imageUrl) return;

          // Create the <img> element
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = altText;
          imgElement.style.maxWidth = '150px';
          imgElement.style.width = '100%';
          imgElement.style.height = 'auto';

          // Append the <img> element into the <span>
          span.appendChild(imgElement);
        });
      } catch (error) {
        console.error('Error while fixing missing images:', error);
      }
    }, 5000);
  }
}
