import Common from "./Common";

export default class KwasiOwusuScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.updateSliderOverflow();
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
        const parentWrapper = this.dom.querySelector<HTMLDivElement>('.style-c.wrapper');
        if (!parentWrapper) return;

        const clearDiv = parentWrapper.querySelector<HTMLDivElement>('div[style*="clear: both; display: none"]');
        if (!clearDiv) return;
        clearDiv.style.removeProperty('display');
      } catch (error) {
        return;
      }
    }, 500);
  }

  private fixMissingImagesForBlackLEDLight() {
    setInterval(() => {
      try {
        const lazyImageSpans = this.dom.querySelectorAll<HTMLSpanElement>('.lazy-image');

        if (!lazyImageSpans.length) return;

        lazyImageSpans.forEach((span) => {
          const hasImage = span.querySelector<HTMLImageElement>('img');
          if (hasImage) return;

          const imageUrl = span.getAttribute('data-image');
          const altText = span.getAttribute('data-alt') || 'Image';

          if (!imageUrl) return;


          const imgElement = this.dom.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = altText;
          imgElement.style.maxWidth = '150px';
          imgElement.style.width = '100%';
          imgElement.style.height = 'auto';

          span.appendChild(imgElement);
        });
      } catch (error) {
        return;
      }
    }, 500);
  }


  private hideNgrAppModal() {
    setInterval(() => {
      try {

        const ngrApp: HTMLElement | null = this.dom.querySelector('ngr-app');
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

        const anchorsWithoutHref: NodeListOf<HTMLAnchorElement> = this.dom.querySelectorAll('a:not([href])');
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
        const logoItems = this.dom.querySelectorAll<HTMLLIElement>('li.hp-logos__logos-item');
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
          const targetDiv = this.dom.querySelector<HTMLDivElement>('#shopify-section-template--21070610825549__hp-nurosym');
          if (!targetDiv) return;
          targetDiv.style.background = 'linear-gradient(180deg, #fff, #edf2f2)';
        } catch (error) {
          return;
        }
      }, 500);
    } catch (error) {
      return;
    }
  }

  private updateSliderOverflow() {
    setInterval(() => {
      try {
        const slider = this.dom.querySelector<HTMLElement>('#SliderGallery-template--23167624413498__featured-product');
        if (!slider) return;

        slider.style.overflow = 'hidden';
      } catch (error) {
        return;
      }
    }, 500);
  }


}

