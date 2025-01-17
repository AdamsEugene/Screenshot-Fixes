import Common from "./Common";

export default class JoeScreenshotFixes extends Common {
    public init(containerId: string, debugMode: boolean): void {
        const func = () => {
            this.removeImagesWhiteOverlayRnnr();
            this.removeBlackOverlayQueSkinCare();
            this.handleDesktopNavigationOverlapsFeelsGround();
            this.handleBackgroundOverlayNotShowingUsDoctor();
            this.handleMissingInstagramSectionDrHarveys();
            this.handleCanopyIssues();
            this.handleHairbrellaMenuOverlapIssue();
            this.naaliAdjustWidgetRemoveDisplay()
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

    private handleCanopyIssues() {
        setTimeout(() => {
            try {
                const parentElements = this.dom.querySelectorAll(
                    ".oke-barDefault-background"
                ) as NodeListOf<HTMLElement>;

                parentElements.forEach((parent) => {
                    const child = parent.querySelector(
                        ".oke-barDefault-background-shading"
                    ) as HTMLElement;

                    if (child) {
                        child.style.removeProperty("display");
                        child.style.removeProperty("height");
                    }
                });

                if (parentElements.length > 0) {
                    const dotParentEls = this.dom.querySelectorAll(
                        ".oke-barDefault-dots"
                    ) as NodeListOf<HTMLElement>;

                    dotParentEls.forEach((parent) => {
                        const childDots = parent.querySelectorAll(
                            ".oke-barDefault-dot.oke-barDefault-dot--dark"
                        ) as NodeListOf<HTMLElement>;

                        childDots.forEach((dot) => {
                            dot.style.removeProperty("display");
                        });
                    });

                    const lastDotParents = this.dom.querySelectorAll(
                        ".oke-barDefault-marker"
                    ) as NodeListOf<HTMLElement>;

                    lastDotParents.forEach((parent) => {
                        const child = parent.querySelector(
                            ".oke-barDefault-dot"
                        ) as HTMLElement;

                        if (child) {
                            child.style.removeProperty("display");
                        }
                    });
                }
            } catch (error) {}
        }, 500);
    }

    private handleHairbrellaMenuOverlapIssue() {
        setInterval(() => {
            try {
                const parent = this.dom.querySelector(
                    ".product-header-sticky-bar"
                ) as HTMLElement;

                if (parent) {
                    const child = parent.querySelector(
                        ".product-header-sticky-bar-inner-block.max-w-screen"
                    ) as HTMLElement;

                    if (child) {
                        parent.style.removeProperty("opacity");
                    }
                }
            } catch (error) {}
        }, 50);
    }

    private naaliAdjustWidgetRemoveDisplay() {
        setInterval(() => {
            try {
                const productinfos = this.dom.querySelectorAll(
                    ".product-info__liquid"
                ) as NodeListOf<HTMLElement>;
                productinfos.forEach((productinfo) => {
                    const widget = productinfo.querySelector(
                        "#join-widget-tdah"
                    ) as HTMLElement;
                    if (widget) {
                        widget.style.removeProperty("display");
                    }
                });
            } catch {}
        }, 50);
    }
}
