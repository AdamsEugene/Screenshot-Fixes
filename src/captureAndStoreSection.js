function copyContentToWindowAndDownload(selector) {
  try {
    // Get the element using the selector
    const element = document.querySelector(selector);

    // const element = document
    //   .querySelector("#fast-simon-serp-app")
    //   .shadowRoot.querySelector("#fs-serp-page");

    if (!element) {
      throw new Error(`Element with selector '${selector}' not found.`);
    }

    // Copy the innerHTML of the element to the window object
    window.copiedContent = element.innerHTML;

    // Generate the filename based on the URL
    const url = new URL(window.location.href);
    const filename =
      url.hostname + url.pathname.replace(/\//g, "-") + "-main.html";

    // Create a downloadable file and trigger the download
    const blob = new Blob([window.copiedContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    console.log(`Content copied and saved as ${filename}`);
  } catch (error) {
    console.error(error.message);
  }
}

copyContentToWindowAndDownload(".my-class");
