class ScreenshotFixes {
  private debugMode: boolean;

  constructor(debugMode = false) {
    this.debugMode = debugMode;
  }

  init(containerId = "recordingPlayer", debugMode = false) {
    this.debugMode = debugMode;
    const document = window.document;
    const container = document.getElementById(containerId) as HTMLIFrameElement;
    const dom = container?.contentWindow?.document || document;

    applyStyles(dom);
    hidePopup(dom);
  }
}

function applyStyles(doc: Document | undefined) {
  doc
    ?.querySelectorAll(".lai-star-rating-none svg, .lai-star-rating svg")
    .forEach((element) => {
      (element as HTMLElement).style.maxWidth = "20px";
      (element as HTMLElement).style.float = "left";
    });
}

function hidePopup(doc: Document | undefined) {
  const popup = doc?.querySelector(".canadian-first-popup");
  if (popup) {
    const sibling = popup.previousElementSibling as HTMLElement;
    if (sibling && sibling.children.length === 0 && sibling.className === "") {
      sibling.style.setProperty("display", "none", "important");
    }
  }
}

function createInstance<T>(
  constructor: new (...args: any[]) => T,
  ...args: any[]
): T {
  return new constructor(...args);
}

const myClassInstance: ScreenshotFixes = createInstance(ScreenshotFixes);

export type ScreenshotFixesType = typeof myClassInstance;

export default ScreenshotFixes;
