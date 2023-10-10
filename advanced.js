function addText(element, text) {
  let newText; // Declare newText outside the event listeners

  element.addEventListener("mouseenter", function () {
    newText = document.createElement("p");
    newText.textContent = text;

    // Apply CSS styles to the newText element
    newText.style.backgroundColor = "black";
    newText.style.color = "white";
    newText.style.padding = "2px";
    newText.style.borderRadius = "5px";

    // Append the new text
    element.appendChild(newText);
  });

  element.addEventListener("mouseleave", function () {
    if (newText) {
      element.removeChild(newText);
    }
  });
}

const homepageText = document.querySelector("#homepage");
const imageText = document.querySelector("#imageText");

addText(homepageText, "Return to homepage");
addText(imageText, "Image search");
