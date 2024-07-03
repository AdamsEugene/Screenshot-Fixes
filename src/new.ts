class MenuMonitor {
  private hoverTimer: ReturnType<typeof setTimeout> | null = null;
  private hoverElement: HTMLElement | null = null;
  private hoverDuration: number = 500;
  private mutations: MutationRecord[] = [];
  private previousMutations: MutationRecord[] = [];
  private isRecording: boolean = false;
  private clonedElements: Map<HTMLElement, HTMLElement> = new Map();
  private previousClonedElements: Map<HTMLElement, HTMLElement> = new Map();
  private menuName: string = "unknown";
  private hiddenElements: Map<HTMLElement, boolean> = new Map();
  private detailsElements: Map<HTMLDetailsElement, boolean> = new Map();
  private invisibleElements: Map<HTMLElement, boolean> = new Map();
  private blurElements: Map<HTMLElement, boolean> = new Map();
  private displayChangedElements: Map<HTMLElement, string> = new Map();
  private detailChangedElements: Map<HTMLDetailsElement, boolean> = new Map();
  private visibilityChangedElements: Map<HTMLElement, string> = new Map();
  private opacityChangedElements: Map<HTMLElement, number> = new Map();
  private navElement: HTMLElement | null = null;
  private headerElement: HTMLElement | null = null;
  private debugMode: boolean;

  constructor(debugMode = false) {
    this.debugMode = debugMode;
  }

  private hasSamePositionSize(ele1: HTMLElement, ele2: HTMLElement): boolean {
    const rect1 = ele1.getBoundingClientRect();
    const rect2 = ele2.getBoundingClientRect();

    return (
      rect1.top === rect2.top &&
      rect1.right === rect2.right &&
      rect1.bottom === rect2.bottom &&
      rect1.left === rect2.left
    );
  }

  private getVisibleNavElements(container: HTMLElement | null): HTMLElement[] {
    if (!container) return [];
    const navElements = container.querySelectorAll("nav");
    if (!navElements) return [container];
    const visibleNavElements = Array.from(navElements).filter((element) => {
      const style = getComputedStyle(element);
      return style.display !== "none" && style.visibility !== "hidden";
    });
    return visibleNavElements.length > 0 ? visibleNavElements : [container];
  }

  public init(containerId = "recordingPlayer", debugMode = false) {
    this.debugMode = debugMode;

    const document = window.document;
    const iframe = document.getElementById(containerId) as HTMLIFrameElement;
    const dom = iframe?.contentWindow?.document || document;

    const header = dom.querySelector("header");
    if (!header) {
      console.error("Error: No header element found.");
      this.headerElement = null;
      return;
    }

    let currentElement = header as HTMLElement;
    let parentElement = currentElement.parentElement as HTMLElement;

    while (
      parentElement &&
      this.hasSamePositionSize(currentElement, parentElement)
    ) {
      currentElement = parentElement;
      parentElement = currentElement.parentElement as HTMLElement;
    }

    this.headerElement = currentElement;

    if (this.headerElement) {
      this.attachMutationObserver();
      this.attachHoverListener();
      this.attachReopenMenuListener();
      this.navElement = this.getVisibleNavElements(this.headerElement)[0];
      const detailsElements = this.headerElement?.querySelectorAll("details");
      console.log("nav: ", this.navElement);

      if (this.navElement) {
        this.createHiddenElementsMap(this.navElement);
        this.createInvisibleElementsMap(this.navElement);
        this.createBlurElementsMap(this.navElement);
        if (detailsElements && detailsElements.length > 0) {
          this.createDetailsElementMap(detailsElements);
        }
      }
    }
  }

  private createDetailsElementMap(
    detailsElements: NodeListOf<HTMLDetailsElement>
  ) {
    detailsElements.forEach((element) => {
      if (!element.open) this.detailsElements.set(element, element.open);
    });
  }

  private createHiddenElementsMap(container: HTMLElement) {
    container.querySelectorAll("*").forEach((element: HTMLElement) => {
      if (window.getComputedStyle(element).display === "none") {
        this.hiddenElements.set(element, true);
      }
    });
  }

  private createInvisibleElementsMap(container: HTMLElement) {
    container.querySelectorAll("*").forEach((element: HTMLElement) => {
      if (window.getComputedStyle(element).visibility === "hidden") {
        this.invisibleElements.set(element, true);
      }
    });
  }

  private createBlurElementsMap(container: HTMLElement) {
    container.querySelectorAll("*").forEach((element: HTMLElement) => {
      if (parseFloat(window.getComputedStyle(element).opacity) < 1) {
        this.blurElements.set(element, true);
      }
    });
  }

  private attachMutationObserver() {
    if (this.headerElement) {
      const mutationObserver = new MutationObserver(
        this.handleMutations.bind(this)
      );
      const observerConfig = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      };
      mutationObserver.observe(this.headerElement, observerConfig);
    }
  }

  private attachHoverListener() {
    if (this.headerElement) {
      this.headerElement.addEventListener(
        "mouseover",
        this.handleMouseOver.bind(this)
      );
      this.headerElement.addEventListener(
        "mouseout",
        this.handleMouseOut.bind(this)
      );
    }
  }

  private attachReopenMenuListener() {
    document.addEventListener("reopen-menu", this.handleReopenMenu.bind(this));
    document.addEventListener("close-menu", this.handleCloseMenu.bind(this));
  }

  private isMenuOpen(classList: DOMTokenList): boolean {
    return classList.contains("is-active") || classList.contains("is-expanded");
  }

  private handleMutations(mutationsList: MutationRecord[]) {
    for (const mutation of mutationsList) {
      const targetElement = mutation.target as HTMLElement;

      if (
        !this.isRecording &&
        mutation.type === "attributes" &&
        mutation.attributeName === "class" &&
        this.isMenuOpen((mutation.target as HTMLElement).classList) &&
        this.headerElement!.contains(targetElement)
      ) {
        this.isRecording = true;
        this.mutations = [];
        this.clonedElements.clear();
        this.clonedElements.set(
          targetElement,
          targetElement.cloneNode(true) as HTMLElement
        );
        this.mutations.push(mutation);
        if (this.debugMode) {
          console.log(
            "-------------------------------------------------------------------------------------------------------------------------------"
          );
          console.log("set className - start recording");
          console.log(
            "-------------------------------------------------------------------------------------------------------------------------------"
          );
          console.log(mutation.target);
          console.log((mutation.target as HTMLElement).classList);
          console.log(
            "-------------------------------------------------------------------------------------------------------------------------------"
          );
        }
      } else if (
        this.isRecording &&
        this.headerElement!.contains(targetElement)
      ) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          this.isMenuOpen(targetElement.classList) &&
          !this.isMenuOpen((mutation.target as HTMLElement).classList)
        ) {
          if (this.debugMode) {
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log("set className - stop recording");
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log(mutation.target);
            console.log((mutation.target as HTMLElement).classList);
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
          }
          this.isRecording = false;
          break;
        }
        if (mutation.attributeName === "class") {
          if (this.debugMode) {
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log("set className");
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log(mutation.target);
            console.log((mutation.target as HTMLElement).classList);
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
          }
        } else {
          if (this.debugMode) {
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log("other mutation", mutation.attributeName);
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
            console.log("target:", mutation.target);
            console.log(mutation);
            console.log(
              "-------------------------------------------------------------------------------------------------------------------------------"
            );
          }
        }
        this.clonedElements.set(
          targetElement,
          targetElement.cloneNode(true) as HTMLElement
        );
        this.mutations.push(mutation);
      }
    }
  }

  private handleMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.headerElement!.contains(target)) {
      this.hoverElement = target;
      this.startHoverTimer();
    }
  }

  private recordDisplayChanges() {
    this.hiddenElements.forEach((_, element) => {
      const currentDisplay = window.getComputedStyle(element).display;
      if (currentDisplay !== "none") {
        let shouldClearSet = true;
        const keysArray = Array.from(this.displayChangedElements.keys());
        for (let existingElement of keysArray) {
          if (existingElement.contains(element)) {
            shouldClearSet = false;
            break;
          }
        }
        if (shouldClearSet) this.displayChangedElements.clear();
        this.displayChangedElements.set(element, currentDisplay);
      }
    });
  }

  private recordDetailsChanges() {
    this.detailsElements.forEach((_, element) => {
      if (element.open) {
        this.detailChangedElements.clear();
        this.detailChangedElements.set(element, element.open);
      }
    });
  }

  private recordVisibilityChanges() {
    this.invisibleElements.forEach((_, element) => {
      const visibility = window.getComputedStyle(element).visibility;
      if (visibility !== "hidden") {
        this.visibilityChangedElements.set(element, visibility);
      }
    });
  }

  private recordBlurredChanges() {
    this.invisibleElements.forEach((_, element) => {
      const opacity = parseFloat(window.getComputedStyle(element).opacity);
      if (opacity > 0) {
        this.opacityChangedElements.set(element, opacity);
      }
    });
  }

  private handleMouseOut() {
    this.stopHoverTimer();
    this.hoverElement = null;
  }

  private startHoverTimer() {
    this.stopHoverTimer();
    this.hoverTimer = setTimeout(() => {
      if (this.hoverElement) {
        this.recordDisplayChanges();
        this.recordDetailsChanges();
        this.recordVisibilityChanges();
        this.recordBlurredChanges();

        this.menuName = this.hoverElement.innerText || "selected";
        console.log("Capturing mutations now for " + this.menuName + " menu");
        this.dispatchMenuOpenEvent();
        this.previousMutations = [...this.mutations];
        this.previousClonedElements = new Map(this.clonedElements); // Update previousClonedElements only when the hover timer completes
      }

      this.hoverTimer = null;
      this.isRecording = false;
    }, this.hoverDuration);
  }

  private stopHoverTimer() {
    if (this.hoverTimer) {
      clearTimeout(this.hoverTimer);
      this.hoverTimer = null;
    }
  }

  private dispatchMenuOpenEvent() {
    const menuOpenEvent = new CustomEvent("menu-open", {
      detail: {
        mutations: this.mutations,
      },
    });
    document.dispatchEvent(menuOpenEvent);
    this.isRecording = false;
  }

  private dispatchMenuCloseRequiredEvent() {
    const menuCloseEvent = new CustomEvent("menu-close-required", {
      detail: {
        mutations: this.mutations,
      },
    });
    console.log("dispatchMenuCloseRequiredEvent");
    document.dispatchEvent(menuCloseEvent);
    this.isRecording = false;
  }

  private dispatchHideCloseEvent() {
    const hideCloseEvent = new CustomEvent("hide-close-menu", {
      detail: {
        mutations: this.mutations,
      },
    });
    console.log("dispatchMenuCloseRequiredEvent");
    document.dispatchEvent(hideCloseEvent);
    this.isRecording = false;
  }

  private handleReopenMenu() {
    if (!this.hoverElement) {
      this.reapplyMutations();
    }
  }

  private handleCloseMenu() {
    this.hiddenElements.forEach((_, element) => {
      element.style.removeProperty("display");
    });
    this.headerElement?.querySelectorAll("details")?.forEach((element) => {
      element.removeAttribute("open");
    });
    this.visibilityChangedElements.forEach((_, element) => {
      element.style.removeProperty("visibility");
    });
    this.opacityChangedElements.forEach((_, element) => {
      element.style.removeProperty("opacity");
    });
    this.displayChangedElements.clear();
    this.detailChangedElements.clear();
    this.visibilityChangedElements.clear();
    this.opacityChangedElements.clear();
    this.dispatchHideCloseEvent();
  }

  private reapplyMutations() {
    for (const mutation of this.previousMutations) {
      const targetElement = mutation.target as HTMLElement;
      const clonedElement = this.previousClonedElements.get(targetElement);
      if (clonedElement) {
        switch (mutation.type) {
          case "attributes":
            const attrib = clonedElement.getAttribute(mutation.attributeName!);
            if (this.debugMode) {
              console.log("attribute:", mutation.attributeName, "val:", attrib);
              console.log(targetElement);
            }
            targetElement.setAttribute(mutation.attributeName!, attrib!);
            break;
          case "childList":
            mutation.addedNodes.forEach((node) => {
              const clonedNode = clonedElement.querySelector(
                `[data-node-id="${(node as HTMLElement).getAttribute(
                  "data-node-id"
                )}"]`
              );
              if (clonedNode) {
                targetElement.appendChild(clonedNode.cloneNode(true));
              }
            });
            mutation.removedNodes.forEach((node) => {
              const removedNode = targetElement.querySelector(
                `[data-node-id="${(node as HTMLElement).getAttribute(
                  "data-node-id"
                )}"]`
              );
              if (removedNode) {
                targetElement.removeChild(removedNode);
              }
            });
            break;
          case "characterData":
            targetElement.textContent = clonedElement.textContent;
            break;
        }
      }
    }
    this.reapplyDisplayChanges();
    this.reapplyDetailsChanges();
    this.reapplyVisibilityChanges();
    this.reapplyBlurredChanges();
  }

  private reapplyDisplayChanges() {
    let manualCloseRequired = false;
    this.displayChangedElements.forEach((displayValue, element) => {
      const parent = element.parentElement;
      if (parent && getComputedStyle(parent).display === "none") {
        parent.style.display = displayValue;
      }
      element.style.display = displayValue;
      manualCloseRequired = true;
    });
    if (manualCloseRequired) {
      this.dispatchMenuCloseRequiredEvent();
    }
  }

  private reapplyDetailsChanges() {
    let hasChanges = false;
    this.detailChangedElements.forEach((open, element) => {
      element.setAttribute("open", `${open}`);
      element.setAttribute("aria-expanded", `${open}`);
      hasChanges = true;
    });
    if (hasChanges) {
      this.dispatchMenuCloseRequiredEvent();
    }
  }

  private reapplyVisibilityChanges() {
    let hasChanges = false;
    this.visibilityChangedElements.forEach(
      (visibility, element: HTMLElement) => {
        element.style.visibility = visibility;
        hasChanges = true;
      }
    );
    if (hasChanges) {
      this.dispatchMenuCloseRequiredEvent();
    }
  }

  private reapplyBlurredChanges() {
    let hasChanges = false;
    this.opacityChangedElements.forEach((opacity, element: HTMLElement) => {
      element.style.opacity = `${opacity}`;
      hasChanges = true;
    });
    this.adjustMenuMaxHeight();
    if (hasChanges) {
      this.dispatchMenuCloseRequiredEvent();
    }
  }

  private removeIsActiveClass() {
    const activeElements = this.headerElement?.querySelectorAll(
      ".is-active, .is-expanded"
    );
    activeElements?.forEach((element) => {
      element.classList.remove("is-active", "is-expanded");
    });
  }

  private adjustMenuMaxHeight() {
    const dropdowns = this.navElement?.querySelectorAll(".rtnu-nav__dropdown");
    dropdowns?.forEach((dropdown: HTMLElement) => {
      dropdown.style.maxHeight = "500px";
    });
    const mainContainers = this.navElement?.querySelectorAll(
      ".mega-menu__main-container"
    );
    mainContainers?.forEach((container: HTMLElement) => {
      container.style.maxHeight = "800px";
      container.style.paddingTop = "48px";
      container.style.paddingBottom = "48px";
      container.style.cursor = "auto";
      container.style.height = "100%";
    });
  }

  public reopenMenu() {
    document.dispatchEvent(new CustomEvent("reopen-menu", { detail: true }));
  }

  public closeMenu() {
    document.dispatchEvent(new CustomEvent("close-menu", { detail: true }));
  }

  public closeActiveMenu() {
    this.removeIsActiveClass();
    this.handleCloseMenu();
  }
}

function createInstance<T>(
  constructor: new (...args: any[]) => T,
  ...args: any[]
): T {
  return new constructor(...args);
}

const myClassInstance: MenuMonitor = createInstance(MenuMonitor);

export type MenuMonitorType = typeof myClassInstance;

export default MenuMonitor;
