let effect = document.getElementById("effect")
let trigger = document.getElementById("trigger")
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const html = document.getElementById("html");
const overlay = document.getElementById("overlay");

// Start of sidebar

toggleBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
    overlay.classList.add("overlay-on")
});

overlay.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar")
    overlay.classList.remove("overlay-on");
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

console.log(overlay)

// function removeEffect() {
//     effect.classList.remove("effects")
// }