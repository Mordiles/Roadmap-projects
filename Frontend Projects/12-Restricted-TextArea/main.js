const textArea = document.getElementById("js-textarea");
const textAreaLimit = document.getElementById("js-text-limit");
const textContainer = document.getElementById("js-text-container");

const textLimit = 250;
var textCurrently = textArea.value.length;

textAreaLimit.textContent = `${textCurrently} / ${textLimit}`;

textArea.addEventListener("input", () => {
  if (textArea.value.length >= textLimit) {
    textArea.value = textArea.value.slice(0, textLimit);
  }

  const len = textArea.value.length;

  textContainer.classList.toggle("restricted-textarea", len >= textLimit);
  textAreaLimit.textContent = `${textArea.value.length} / ${textLimit}`;
});
