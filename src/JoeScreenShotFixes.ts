import Common from "./Common";

export default class JoeScreenshotFixes extends Common {
    public init(containerId: string, debugMode: boolean): void {
        const func = () => {
            this.removeImagesWhiteOverlayRnnr();
            this.removeBlackOverlayQueSkinCare();
            this.handleDesktopNavigationOverlapsFeelsGround();
            this.handleBackgroundOverlayNotShowingUsDoctor();
            this.handleMissingInstagramSectionDrHarveys();
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

    private handleBackgroundOverlayNotShowingUsDoctor() {
        setTimeout(() => {
            try {
                const parentEls = this.dom.querySelectorAll(
                    ".article__text-wrap"
                ) as NodeListOf<HTMLElement>;

                parentEls.forEach((parent) => {
                    const child = parent.querySelector(
                        ".article__bg"
                    ) as HTMLElement;

                    if (child) {
                        child.style.removeProperty("display");
                    }
                });
            } catch (error) {}
        }, 2000);
    }

    private handleMissingInstagramSectionDrHarveys() {
        setTimeout(() => {
            try {
                const parent = this.dom.querySelector(
                    ".latest-instagram-wrapper"
                ) as HTMLElement;

                if (parent) {
                    const child = parent.querySelector(
                        ".instagram"
                    ) as HTMLElement;

                    if (child) {
                        parent.style.removeProperty("display");
                    }
                }
            } catch (error) {}
        }, 500);
    }
}
