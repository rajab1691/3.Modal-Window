"use strict";

const btnClose = document.querySelector(".close-modal");
const btnOpen = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const show = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener("click", show);
}

const hide = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
btnClose.addEventListener("click", hide);

overlay.addEventListener("click", hide);

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        if (!modal.classList.contains("hidden")) {
            hide();
        }
    }
});