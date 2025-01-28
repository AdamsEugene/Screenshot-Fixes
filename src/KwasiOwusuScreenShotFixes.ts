import Common from "./Common";

export default class KwasiOwusuScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.applyBackgroundGradient();
      this.adjustImageStyles();
      this.allowCursorForAnchorsWithoutHref();
      this.hideNgrAppModal();
      this.adjustClearDivForBlackLEDLight();
      this.fixMissingImagesForBlackLEDLight();
    };
    this.exec({ containerId, debugMode, func });
  }

  // fix for black LED Light image issues
  private adjustClearDivForBlackLEDLight() {
    setInterval(() => {
      try {
        const parentWrapper = document.querySelector<HTMLDivElement>('.style-c.wrapper');
        if (!parentWrapper) return;

        const clearDiv = parentWrapper.querySelector<HTMLDivElement>('div[style*="clear: both; display: none"]');
        if (!clearDiv) return;
        clearDiv.style.removeProperty('display');
      } catch (error) {
        console.error('Error adjusting clear div:', error);
      }
    }, 500);
  }

  private fixMissingImagesForBlackLEDLight() {
    setInterval(() => {
      try {
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
    }, 500);
  }


  private hideNgrAppModal() {
    setInterval(() => {
      try {

        const ngrApp: HTMLElement | null = document.querySelector('ngr-app');
        if (!ngrApp) return;

        ngrApp.style.display = 'none';
      } catch (error) {
        return;
      }
    }, 500);
  }

  private allowCursorForAnchorsWithoutHref() {
    setInterval(() => {
      try {

        const anchorsWithoutHref: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a:not([href])');
        if (anchorsWithoutHref.length === 0) return;

        anchorsWithoutHref.forEach((anchor: HTMLAnchorElement) => {
          anchor.style.cursor = 'pointer';
        });
      } catch (error) {
        return;
      }
    }, 500);
  }

  private adjustImageStyles() {
    setInterval(() => {
      try {
        const logoItems = document.querySelectorAll<HTMLLIElement>('li.hp-logos__logos-item');
        if (!logoItems.length) return;


        logoItems.forEach((item) => {
          const image = item.querySelector<HTMLImageElement>('a img');
          if (!image) return;

          image.style.maxWidth = '100%';
          image.style.maxHeight = '100%';
          image.style.width = 'auto';
          image.style.height = 'auto';
          image.style.display = 'block';
          image.style.webkitUserSelect = 'none';
          image.style.userSelect = 'none';
        });
      } catch (error) {
        return;
      }
    }, 500);
  }

  private applyBackgroundGradient() {
    try {
        setInterval(() => {
            try {
                const targetDiv = document.querySelector<HTMLDivElement>('#shopify-section-template--21070610825549__hp-nurosym');
                if (!targetDiv) return;
                targetDiv.style.background = 'linear-gradient(180deg, #fff, #edf2f2)';
            } catch (error) {
                console.error('Error applying background gradient within interval:', error);
            }
        }, 50);
    } catch (error) {
        return;
    }
}

}

