import Common from "./Common";

export default class JoeScreenshotFixes extends Common {
    public init(containerId: string, debugMode: boolean): void {
        const func = () => {
            this.removeImagesWhiteOverlayRnnr();
            this.removeBlackOverlayQueSkinCare();
            this.handleDesktopNavigationOverlapsFeelsGround();
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

    private handleDesktopNavigationOverlapsFeelsGround() {
        setTimeout(() => {
            try {
                const elements = this.dom.querySelectorAll(
                    ".nav__list-item.nav__list-item--has-child-nav"
                ) as NodeListOf<HTMLElement>;

                elements.forEach((element) => {
                    const childNav = element.querySelector(
                        ".child-navigation.box-lightshadow"
                    ) as HTMLElement;
                    if (childNav) {
                        childNav.style.display = "none";

                        element.addEventListener("click", (event) => {
                            event.stopPropagation();

                            elements.forEach((el) => {
                                if (el != element) {
                                    if (el.classList.contains("is-open")) {
                                        el.classList.remove("is-open");
                                    }
                                    const otherChildNav = el.querySelector(
                                        ".child-navigation.box-lightshadow"
                                    ) as HTMLElement;
                                    if (otherChildNav) {
                                        otherChildNav.style.display = "none";
                                    }
                                }
                            });

                            const isOpen = element.classList.toggle("is-open");
                            childNav.style.display = isOpen ? "block" : "none";
                        });
                    }
                });
            } catch (error) {}
        }, 1000);
    }
}
