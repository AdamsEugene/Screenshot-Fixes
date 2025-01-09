import Common from "./Common";

export default class JoeScreenshotFixes extends Common {
    public init(containerId: string, debugMode: boolean): void {
        const func = () => {
            this.removeImagesWhiteOverlayRnnr()
            this.removeBlackOverlayQueSkinCare()

        };
        this.exec({ containerId, debugMode, func });
    }

    private removeImagesWhiteOverlayRnnr() {
        setTimeout(() => {
            try {
                const elements = this.dom.querySelectorAll(
                    ".collection__loading"
                ) as NodeListOf<HTMLElement>;

                elements.forEach((el) => {
                    el.style.opacity = "0";
                });
            } catch (error) {}
        }, 1000);
    }

    private removeBlackOverlayQueSkinCare() {
        try {
            const modalBackdrop = this.dom.querySelector(
                ".modal-backdrop.fade.show"
            ) as HTMLElement;

            if (modalBackdrop) {
                modalBackdrop.classList.remove("show");
            }
        } catch (error) {}
    }
}
