function hideElementsIfLargeModal() {
  const modalEle = [];
  const onScreenModal = [];

  const newDom = document;

  const doc = document;

  // const elements = Array.from($('body *:not(link):not(style):not(script)', doc).filter(':visible'));

  const elements = document.querySelectorAll("*");

  for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    const computedStyle = window.getComputedStyle(element);
    const elementOffsetY = element.getBoundingClientRect().top;

    const opacity = parseFloat(computedStyle.getPropertyValue("opacity"));
    const visibility = computedStyle.getPropertyValue("visibility");
    const display = computedStyle.getPropertyValue("display");
    const zIndex = parseInt(computedStyle.getPropertyValue("z-index"), 10);
    const position = computedStyle.getPropertyValue("position");
    let height = computedStyle.getPropertyValue("height");
    const top = computedStyle.getPropertyValue("top");
    const left = computedStyle.getPropertyValue("left");
    const bottom = computedStyle.getPropertyValue("bottom");
    const right = computedStyle.getPropertyValue("right");
    const elementHeight =
      parseInt(computedStyle.getPropertyValue("height"), 10) || 0;
    const minHeight =
      parseInt(computedStyle.getPropertyValue("min-height"), 10) || 0;
    const maxHeight =
      parseInt(computedStyle.getPropertyValue("max-height"), 10) || 0;
    const parentHeight = element?.parentElement?.clientHeight || 0;
    const elementActualHeight = parseInt(
      element?.getAttribute("actualHeight") || "-1",
      10
    );
    const elementOverflow = computedStyle.getPropertyValue("overflow");
    const excludedTagNamesToSetHeightMaxContent = new Set(["video"]);

    if (height.includes("px")) {
      height = +height.split("px")[0];
    }

    const isElementEmpty =
      ["div", "section"].includes(element.tagName.toLowerCase()) &&
      element.innerHTML.trim() === "";

    const isElementFullScreen =
      position === "fixed" &&
      top === "0px" &&
      left === "0px" &&
      bottom === "0px" &&
      right === "0px";

    const hasPointerEventsNone =
      computedStyle.getPropertyValue("pointer-events") === "none";

    const hasBackgroundImage = (e) =>
      window.getComputedStyle(e).getPropertyValue("background-image") !==
      "none";
    // TODO: DO NOT SET OVERFLOW VISIBLE forgotten the particular website daisy london menu, plunge menu and dashwater review
    const classesToNotSetOverflowVisible = [
      "mega-menu-mobile__inner",
      "header__nav",
      "mobile-navigation-drawer",
      'yotpo-main-reviews-widget"',
    ];

    const containsClass = classesToNotSetOverflowVisible.some(
      (className) => element.classList.contains(className)
      // eslint-disable-next-line function-paren-newline
    );

    if (
      !hasBackgroundImage(element) &&
      isHeightOkay(height) &&
      !isElementEmpty &&
      display !== "none" &&
      visibility !== "hidden" &&
      opacity >= 0.8 &&
      !["button", "a"].includes(element.tagName.toLowerCase()) &&
      (position === "fixed" || position === "absolute") &&
      elementIsValidModal(element) &&
      isValidModal(element) &&
      element.offsetHeight > 400 &&
      !hasPointerEventsNone
      // &&
      // this.isVisibleElement(element)
    ) {
      console.log("we got here after the checks...");
      if (isElementFullScreen) {
        console.log("we got here cuz element is fullscreen...");
        modalEle.push(element);
      } else if (
        position === "absolute" &&
        element.offsetHeight >= 800 &&
        zIndex > 0
      ) {
        console.log(
          "we got here cuz element is offsetHeight>=800 and zIndex is 0..."
        );
        modalEle.push(element);
      } else if (zIndex > 0) {
        console.log("we got here cuz zindex is greater than 0");
        modalEle.push(element);
      }
    }

    if (
      elementHeight > 700 &&
      !element.getAttribute("heightReset") &&
      !excludedTagNamesToSetHeightMaxContent.has(element.tagName.toLowerCase())
    ) {
      //element.style.setProperty('height', 'max-content', 'important');
      element.setAttribute("heightReset", "true");
      if (
        elementOverflow.includes("hidden") &&
        // !element.classList.contains("mega-menu-mobile__inner") // will improve this if any other class comes up.. this fix was for daisy london menu and plunge
        !containsClass
      ) {
        element.style.setProperty("overflow", "visible", "important");
      }

      // this is to handle the case where when we set height to max-content it sets the height to 0 so you won't see it eg Tru Earth
      if (
        element.offsetHeight == 0 ||
        (element.offsetHeight + 10 < elementActualHeight &&
          elementActualHeight < 1000)
      ) {
        // adjusted to fix the issue for some webistes..let's see how it goes
        element.style.setProperty(
          "height",
          element.getAttribute("actualHeight"),
          "important"
        );
      }
    }
    if (element?.parentElement?.tagName?.toLowerCase() === "details") {
      element.style.setProperty(
        "height",
        element.getAttribute("actualHeight"),
        "important"
      );
    }
    // added this to fix the height issue on Hysolis hero image slider
    if (element.classList.contains("flickity-viewport")) {
      // Get the parent element
      const parentElement = element.parentElement;
      if (parentElement) {
        const actualHeight = parentElement.getAttribute("actualHeight");

        if (actualHeight && elementActualHeight > 0) {
          parentElement.style.setProperty("height", actualHeight, "important");
        }
      }
    }
  }

  this.iframeWidth = window.innerWidth;
  console.log("modal elements: ", modalEle);
  console.log("iframeWidth: ", this.iframeWidth);

  if (modalEle) {
    modalEle.forEach((element) => {
      const ele = element.getBoundingClientRect();
      const height = ele.height;
      const width = ele.width;
      if (
        isInRange(element, this.iframeWidth) &&
        height > 0 &&
        width > 0 &&
        !element.classList.contains("hero-banner__container")
      ) {
        onScreenModal.push(element);
        // console.log({ modalH: height, modalW: width, iframe: iframeRect, ele });
      }
    });

    console.log("onScreenmodal: ", onScreenModal);

    onScreenModal.forEach((modal) => {
      const modalRect = modal.getBoundingClientRect();
      const computedStyleOfModal = window.getComputedStyle(modal);
      const zIndexOfModal =
        parseInt(computedStyleOfModal.getPropertyValue("z-index"), 10) || 99999;
      elements.forEach((element) => {
        const computedStyleOfElement = window.getComputedStyle(element);
        const zIndexOfElement =
          parseInt(computedStyleOfElement.getPropertyValue("z-index"), 10) || 0;
        if (
          element !== modal &&
          !modal.contains(element) &&
          !element.contains(modal) &&
          isElementUnderModal(element, modalRect, this.iframeWidth) &&
          zIndexOfElement < zIndexOfModal
        ) {
          element.classList.add("heatmap-com__hidden-element");
          element.style.visibility = "hidden";
        }
      });
    });

    onScreenModal.forEach((modal) => {
      const allChildren = getAllChildren(modal);
      for (let i = 0; i < allChildren.length; i += 1) {
        allChildren[i].classList.remove("heatmap-com__hidden-element");
        allChildren[i].style.visibility = "visible";
      }
    });
  }

  function elementIsValidModal(element) {
    const style = window.getComputedStyle(element);
    const isPositionAbsolute = style.position === "absolute";
    const isLeftZero = style.left === "0px";
    const isTopZero = style.top === "0px";
    const elementWidth = element.offsetWidth;
    const windowWidth = this.iframeWidth;

    return (
      isPositionAbsolute &&
      isLeftZero &&
      isTopZero &&
      elementWidth > windowWidth / 2
    );
  }

  function isElementUnderModal(element, modalRect, screenWidth) {
    const rect = element.getBoundingClientRect();
    const isModalVisible = modalRect.top >= 0 && modalRect.right <= screenWidth;
    const isVisible =
      rect.top >= modalRect.top &&
      rect.top <= modalRect.bottom &&
      rect.left >= 0 &&
      rect.right <= screenWidth + 5;
    return isVisible && isModalVisible;
  }

  function getAllChildren(element) {
    let children = [];
    children.push(element);
    for (let i = 0; i < element.children.length; i += 1) {
      children = children.concat(getAllChildren(element.children[i]));
    }
    return children;
  }

  function isInRange(element, screenWidth) {
    const rect = element.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 &&
      // rect.bottom <= iframeRect.height &&
      rect.left >= 0 &&
      rect.right <= screenWidth;
    return isVisible;
  }

  function isHeightOkay(height) {
    if (typeof height === "string") return true;
    return height > 5;
  }

  function isValidModal(modalElement) {
    console.log(modalElement);

    const boundingRect = modalElement.getBoundingClientRect();
    // made this update to consider elements which have top of 0
    if (boundingRect.top > 150) {
      return false;
    }
    // videos cannot be modal.. i think i need to restrict it to divs and sections but let's see for now
    if (modalElement.tagName.toLowerCase() === "video") return false;
    // Check if the modal element h children
    // if ($(modalElement, doc).children().length === 0) {
    // 	return false; // If no children, not a valid modal
    // }

    // // Check if any child elements are empty <div> elements
    // const emptyDivs = $(modalElement, doc)
    // 	.find('div')
    // 	.filter(function () {
    // 		return $(this).children().length === 0 && $(this).text().trim() === '';
    // 	});

    // return emptyDivs.length <= 4; // If no empty <div> elements found, it's a valid modal
    // Check if the modal element has any children
    if (modalElement.children.length === 0) {
      return false; // If no children, not a valid modal
    }

    // Get all the child <div> elements and check if any are empty
    const emptyDivs = Array.from(modalElement.querySelectorAll("div")).filter(
      (div) => {
        return div.children.length === 0 && div.textContent.trim() === "";
      }
    );

    // If 4 or fewer empty <div> elements are found, it's considered a valid modal
    return emptyDivs.length <= 15;
  }

  function setHeightWithImportant(element) {
    const styleAttr = element.getAttribute("style");

    if (styleAttr && styleAttr.includes("height:")) {
      const heightMatch = styleAttr.match(/(^|[^-])height:\s*([^;]+)/);

      if (heightMatch) {
        const heightValue = heightMatch[2].trim();
        if (parseInt(heightValue, 10) && !heightValue.includes("!important")) {
          element.style.setProperty("height", heightValue, "important");
        }
      }
    }
  }
}

hideElementsIfLargeModal();
