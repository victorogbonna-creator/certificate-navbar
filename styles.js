const navToggle = document.getElementById("nav-toggle");
const sidebarMenu = document.getElementById("sidebar-menu");

navToggle.addEventListener("click", () => {
    sidebarMenu.classList.toggle("active");
});