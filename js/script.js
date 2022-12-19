const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 3;
    } else {
      currentItem += 3;
    }

    if (currentItem >= maxItems -1) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 4;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });

    items[currentItem].classList.add("current-item");
  });
});
