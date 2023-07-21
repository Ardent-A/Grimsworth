let effect = document.getElementById("effect")
let trigger = document.getElementById("trigger")
const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")
const html = document.getElementById("html")
const overlay = document.getElementById("overlay")
const bars = document.querySelector(".fa-bars")
const checkpoint = 380;
const webCheckpoint = 150;

let color

// Start of sidebar

toggleBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar")
    overlay.classList.add("overlay-on")
});

overlay.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar")
    overlay.classList.remove("overlay-on")
})

sidebar.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar")
    overlay.classList.remove("overlay-on")
})

// html.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

// End of Sidebar

trigger.addEventListener("mouseover", triggerEffect)
trigger.addEventListener("mouseout", triggerEffect)

function triggerEffect() {
    effect.classList.toggle("effects")
}

// Scroll Nav
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll < checkpoint) {
        backgroundColor = "none";
    } else {
        backgroundColor = "rgba(255, 255, 255, 0.7)";
    }
    toggleBtn.style.background = backgroundColor;
    if (currentScroll < webCheckpoint) {
        sidebar.classList.remove("scroll-background")
    } else {
        sidebar.classList.add("scroll-background")
    }
});



// function removeEffect() {
//     effect.classList.remove("effects")
// }