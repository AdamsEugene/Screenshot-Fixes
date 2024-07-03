import ScreenshotFixes, { ScreenshotFixesType } from "./Screenshot";

declare global {
  interface Window {
    ScreenshotFixes: ScreenshotFixesType;
  }
}

window.ScreenshotFixes = new ScreenshotFixes();
window.ScreenshotFixes.init();
