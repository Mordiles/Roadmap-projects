const textArea = document.getElementById("js-textarea");
const textAreaLimit = document.getElementById("js-text-limit");
const textContainer = document.getElementById("js-text-container");

const textLimit = 50;
var textCurrently = textArea.value.length;

textAreaLimit.innerHTML = `${textCurrently} / ${textLimit}`;

textArea.addEventListener("input", () => {
  if (textArea.value.length >= textLimit) {
    textArea.value = textArea.value.slice(0, textLimit);
    textAreaLimit.innerHTML = `${textArea.value.length} / ${textLimit}`;
    if (!textContainer.classList.contains("restricted-textarea")) {
      textContainer.classList.add("restricted-textarea");
    }
    return;
  }

  if (textContainer.classList.contains("restricted-textarea")) {
    textContainer.classList.remove("restricted-textarea");
  }

  textAreaLimit.innerHTML = `${textArea.value.length} / ${textLimit}`;
});
