const menuBox = document.querySelector(".menu-close");
const menuItems = document.querySelectorAll(".menu__list--text");
const menuBtn = document.querySelector(".menu__title");

const openMenu = () => {
  menuBox.classList.toggle("menu");

  if (menuBox.classList.contains("menu-close")) {
    menuBox.classList.remove("menu-close");
  } else {
    menuBox.classList.add("menu-close");
  }

  menuItems.forEach((item) => {
    if (item.classList.contains("hidden")) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
};

menuBtn.addEventListener("click", openMenu);
