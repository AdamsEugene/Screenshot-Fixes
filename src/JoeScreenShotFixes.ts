import Common from "./Common";

export default class JoeScreenshotFixes extends Common {
    public init(containerId: string, debugMode: boolean): void {
        const func = () => {};
        this.exec({ containerId, debugMode, func });
    }

    private removeImagesWhiteOverlayRnnr() {
        try {
            const elements = this.dom.querySelectorAll(
                ".collection__loading"
            ) as NodeListOf<HTMLElement>;

            elements.forEach((el) => {
                el.style.opacity = "0";
            });
        } catch (error) {}
    }

    private removeBlackOverlayQueSkinCare(){

        try{

            const modalBackdrop = this.dom.querySelector(".modal-backdrop.fade.show") as HTMLElement

            if (modalBackdrop){
                modalBackdrop.classList.remove("show")
            }

        }catch(error) {}
    }
}
