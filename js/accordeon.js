const accordeon = document.querySelector(".feature-list");
const accordeonButtons = accordeon.querySelectorAll(".feature__link");
const featureSub = accordeon.querySelector(".feature-sub");

accordeonButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    accordeonButtons.forEach((button) => {
      button.classList.remove("feature__link_active");
      button.nextElementSibling.classList.add("hidden");
    });

    btn.classList.toggle("feature__link_active");
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
