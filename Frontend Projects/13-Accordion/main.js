const infoButtons = document.querySelectorAll("[data-btninfo]");
const info = document.querySelectorAll("[data-info]");

infoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dataBtn = button.dataset.btninfo;
    const infoTarget = document.querySelector(`[data-info='${dataBtn}']`);

    infoTarget.classList.toggle("hidden");
    
    info.forEach((info) => {
      if (info !== infoTarget) {
        info.classList.add("hidden");
      }
    });

  });
});
