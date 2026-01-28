const tabButtons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");
const tabDescrImages = document.querySelectorAll(".design-block__img");
const tabHeaders = document.querySelectorAll(".design__title");

const changeTitle = () => {
  const activeHeader = document.querySelector(".design__title:not(.hidden)");

  if (activeHeader) {
    document.title = activeHeader.textContent.trim();
  }
};

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (event) => {
    const dataValue = tabButton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabDescrImages, dataValue);
    changeContent(tabHeaders, dataValue);
    changeTitle();

    tabButtons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});

changeTitle();
