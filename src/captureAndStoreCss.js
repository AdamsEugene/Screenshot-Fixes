function loadAllCSS() {
    let cssContent = '';

    // Get all external CSS stylesheets
    const externalStylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    const fetchPromises = Array.from(externalStylesheets).map((stylesheet) => {
        return fetch(stylesheet.href)
            .then((response) => response.text())
            .then((text) => {
                cssContent += `/* External CSS from ${stylesheet.href} */\n` + text + '\n';
            })
            .catch((error) => {
                console.error(`Failed to load stylesheet: ${stylesheet.href}`, error);
            });
    });

    // Get all inline CSS
    const inlineStyles = document.querySelectorAll('style');
    inlineStyles.forEach((styleTag, index) => {
        cssContent += `/* Inline CSS from <style> tag ${index + 1} */\n` + styleTag.innerHTML + '\n';
    });

    // Once all CSS is fetched, save it as a file
    Promise.all(fetchPromises).then(() => {
        saveCSSFile(cssContent);
    });
}

// Function to save the CSS content to a file
function saveCSSFile(cssContent) {
    // Generate filename based on URL
    const url = new URL(window.location.href);
    const filename = url.hostname + url.pathname.replace(/\//g, "-") + "-styles.css";

    // Create a Blob with the CSS content
    const blob = new Blob([cssContent], { type: 'text/css' });

    // Create a link element for download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    // Trigger the download
    document.body.appendChild(link);
    link.click();

    // Remove the link after download
    document.body.removeChild(link);
}

loadAllCSS();
