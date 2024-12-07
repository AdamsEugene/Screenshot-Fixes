function findScrollableElements() {
  const iframeElement = document.getElementById("recordingPlayer");
  // const allElements = iframeElement.contentWindow?.document.body.querySelectorAll(
  //   "body *"
  // ) as NodeListOf<Element>;
  const doc = $("#recordingPlayer").contents().get(0);
  const allElements = Array.from(
    $("body *:not(link):not(style):not(script)", doc).filter(":visible")
  );

  const iframeDocument =
    iframeElement.contentDocument || iframeElement.contentWindow?.document;
  const iframeRect = iframeDocument.documentElement.getBoundingClientRect();
  const domHeight = 800;
  const domWidth = iframeRect.width;
  const scrollableElements = [];

  const onScreen = (element) => {
    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);
    const opacity = parseFloat(computedStyle.getPropertyValue("opacity"));
    const visibility = computedStyle.getPropertyValue("visibility");
    const display = computedStyle.getPropertyValue("display");

    const isInRange =
      rect.top >= 0 &&
      rect.bottom <= domHeight &&
      rect.left >= 0 &&
      rect.right <= domWidth;

    const isVisible =
      display !== "none" && visibility !== "hidden" && opacity > 0;

    const neededElements = !["html", "body"].includes(
      element.tagName.toLowerCase()
    );

    if (isInRange && isVisible && neededElements) return true;
    return false;
  };

  const getAllChildren = (element) => {
    let children = [];
    children.push(element);
    for (let i = 0; i < element.children.length; i += 1) {
      children = children.concat(getAllChildren(element.children[i]));
    }
    return children;
  };

  allElements.forEach((element) => {
    const overflowY = window.getComputedStyle(element).overflowY;
    if ((overflowY === "scroll" || overflowY === "auto") && onScreen(element)) {
      scrollableElements.push(element);
    }
  });

  scrollableElements.forEach((element) => {
    const elementRect = element.getBoundingClientRect();
    const children = element.children;

    for (let i = 0; i < children.length; i += 1) {
      const childRect = children[i].getBoundingClientRect();
      const bottomOffset = childRect.height / 2;
      const isInScrollView =
        childRect.top + bottomOffset >= elementRect.top &&
        childRect.left >= elementRect.left &&
        childRect.right <= elementRect.right &&
        childRect.bottom <= elementRect.bottom + bottomOffset;
      if (!isInScrollView) {
        // children[i].classList.add('heatmap-com__hidden-element');
        children[i].style.visibility = "hidden";
        const allChildren = getAllChildren(children[i]);
        for (let j = 0; j < allChildren.length; j += 1) {
          // allChildren[j].classList.add('heatmap-com__hidden-element');
          allChildren[j].style.visibility = "hidden";
        }
      }
    }
  });
}

findScrollableElements();
