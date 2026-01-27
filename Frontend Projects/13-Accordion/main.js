const header = document.querySelectorAll("[data-btninfo]");
const info = document.querySelectorAll("[data-info]");
const icons = document.querySelectorAll("[data-btninfo] i");

header.forEach((h) => {
  h.addEventListener("click", () => {
    const dataBtn = h.dataset.btninfo;
    const infoTarget = document.querySelector(`[data-info='${dataBtn}']`);
    const icon = h.querySelector("i");
    const isOpen = infoTarget.classList.contains("open");

    info.forEach((info) => {
      if (info !== infoTarget) {
        info.classList.add("closed");
        info.classList.remove("open");
      }
    });

    icons.forEach((i) => {
      i.classList.remove("rotate-45");
    });

    if (!isOpen) {
      infoTarget.classList.add("open");
      infoTarget.classList.remove("closed");
      icon.classList.add("rotate-45");
    } else {
      infoTarget.classList.remove("open");
      infoTarget.classList.add("closed");
      icon.classList.remove("rotate-45");
    }
  });
});
