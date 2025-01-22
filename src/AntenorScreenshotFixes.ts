import Common from "./Common";

export default class AntenorScreenShotFixes extends Common {
  public init(containerId: string, debugMode: boolean): void {
    const func = () => {
      this.setInactiveSlickSlideInititalOpacity();
    };
    this.exec({ containerId, debugMode, func });
  }

  //A pup above
  //Set  inactive slick-slide intial opacity to 0
  private setInactiveSlickSlideInititalOpacity(): void {
    try {
      const nutrientSlickSlides = this.dom.querySelectorAll(
        ".nutrients__slide.slick-slide"
      ) as NodeListOf<HTMLElement>;

      nutrientSlickSlides.forEach((slide) => {
        const activeClasses = ["slick-current", "slick-active"];

        const isSlideActive = activeClasses.every((className) =>
          slide.classList.contains(className)
        );

        if (!isSlideActive) {
          slide.style.setProperty("opacity", "0");
        }
      });
    } catch (error) {}
  }
}
