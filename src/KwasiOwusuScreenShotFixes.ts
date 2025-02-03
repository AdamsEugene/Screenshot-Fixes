import Common from "./Common";

export default class KwasiOwusuScreenshotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.applyBackgroundGradientAndAddButton();
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


  private applyBackgroundGradientAndAddButton() {
    setInterval(() => {
      try {
        
        const targetDiv: HTMLElement | null = this.dom.querySelector('#shopify-section-template--21070610825549__hp-nurosym');
        if (targetDiv) {
          targetDiv.style.background = 'linear-gradient(180deg, #fff, #edf2f2)';
        }
       
        const buttonContainer: HTMLElement | null = this.dom.querySelector('.tamix-ecommerce-buttons-flex');
        if (buttonContainer && !buttonContainer.querySelector('.tamix-ecommerce-buttons-item')) {
          const externalLinkButton: string = `
                    <div
                        data-nation="VN,AF,AX,AL,DZ,AS,AD,AO,AI,AQ,AG,AR,AM,AW,AT,AZ,BH,BS,BD,BB,BY,BE,BZ,BJ,BM,BT,BO,BQ,BA,BW,BV,BR,IO,BN,BG,BF,BI,KH,CM,CV,KY,CF,TD,CL,CN,CX,CC,CO,KM,CG,CD,CK,CR,CI,HR,CU,CW,CY,CZ,DK,DJ,DM,DO,EC,EG,SV,GQ,ER,EE,ET,FK,FO,FJ,FI,FR,GF,PF,TF,GA,GM,GE,DE,GH,GI,GR,GL,GD,GP,GU,GT,GG,GN,GW,GY,HT,HM,VA,HN,HK,HU,IS,IN,IR,IQ,IE,IM,IL,IT,JM,JE,JO,KZ,KE,KI,KP,KR,KW,KG,LA,LV,LB,LS,LR,LY,LI,LT,LU,MO,MK,MG,MW,MY,MV,ML,MT,MH,MQ,MR,MU,YT,MX,FM,MD,MC,MN,ME,MS,MA,MZ,MM,NA,NR,NP,NL,NC,NI,NE,NG,NU,NF,MP,NO,OM,PK,PW,PS,PA,PG,PY,PE,PN,PL,PT,PR,QA,RE,RU,RW,BL,SH,KN,LC,MF,PM,VC,WS,SM,ST,SN,RS,SC,SL,SX,SK,SI,SB,SO,ZA,GS,SS,ES,LK,SD,SR,SJ,SZ,SE,SG"
                        data-replace_addtocart_button_block="false"
                        class="tamix-ecommerce-buttons-item flex-onlyone display_on"
                    >
                        <a
                            class="tamix-ecommerce-button US"
                            id="tamix-ecommerce-button-Buttoniherb_8529474355485"
                            data-link=""
                            href="#"
                            title="Buy on iHerb Store"
                            style="background-color: #6c9630; color: #ffffff"
                            rel="noopener noreferrer"
                            aria-describedby="a11y-new-window-external-message"
                        >
                            <span class="buyon display_on">Buy on</span>
                            <span style="width: 57px">
                                <div
                                    class="t4s_ratio t4s-bg-11 t4s-child-lazyloaded"
                                    style="
                                        display: inline-block;
                                        max-width: 57px;
                                        --t4s-aspect-ratio: calc(100% / 1.6285714285714286);
                                    "
                                    data-cacl-slide=""
                                >
                                    <img
                                        loading="lazy"
                                        class="t4s-lz--fadeIn t4s-obj-eff lazyautosizes lazyloadt4sed"
                                        data-widths="[100,200,400,600,700,800,900,1000,1200,1400,1600]"
                                        data-optimumx="2"
                                        data-sizes="auto"
                                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                        width="57"
                                        height="35"
                                        alt="NuBest"
                                        data-srcset="//www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=100 100w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=200 200w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=400 400w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=600 600w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=700 700w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=800 800w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=900 900w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1000 1000w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1200 1200w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1400 1400w, //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1600 1600w"
                                        sizes="57px"
                                        srcset="
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=100   100w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=200   200w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=400   400w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=600   600w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=700   700w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=800   800w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=900   900w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1000 1000w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1200 1200w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1400 1400w,
                                            //www.nubest.com/cdn/shop/files/icon-cta-iherb_d1fadfa0-e344-4685-8f87-9b6210c90ce7.svg?v=1714730531&amp;width=1600 1600w
                                        "
                                    />
                                </div>
                            </span>
                        </a>
                    </div>
                `;
          buttonContainer.innerHTML = externalLinkButton;

          
          const button: HTMLAnchorElement | null = buttonContainer.querySelector('.tamix-ecommerce-button');
          if (button) {
            button.addEventListener('click', (e: MouseEvent) => {
              e.preventDefault(); 
              window.open('https://www.iherb.com/pr/nubest-tall-10-teens-powerful-growth-60-capsules/122226?rcode=LUI5678', '_blank');
            });
          }
        }
      } catch (error) {
        return;
      }
    }, 500);
  }

}

