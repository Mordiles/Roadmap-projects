const tabs = document.querySelectorAll("li[data-tab]");
const section = document.querySelectorAll("section[data-section]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const dataTab = tab.dataset.tab;

    document.querySelectorAll(".tab-active").forEach((t) => {
      t.classList.remove("tab-active");
    });

    tab.classList.add("tab-active");

    section.forEach((section) => {
      section.classList.toggle("hidden", section.dataset.section !== dataTab);
    });
  });
});
