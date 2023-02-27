const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

const tabs = $$$(".feat-item");
const slides = $$$(".feature-slide");

const tabActive = $$(".feat-item.active");
const line = $$(".line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const slide = slides[index];
  tab.onclick = function () {
    $$(".feat-item.active").classList.remove("active");
    $$(".feature-slide.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    this.classList.add("active");
    slide.classList.add("active");
  };
});

// action seller

const panels = $$$(".sell-category-control");
const panes = $$$(".cate-pane");

panels.forEach((panel, index) => {
  const pane = panes[index];
  panel.onclick = function () {
    $$(".sell-category-control.active").classList.remove("active");
    $$(".cate-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
  };
});
