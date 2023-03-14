const hamburger = document.querySelector(".hamburger");
const navMeun = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMeun.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => { 
    hamburger.classList.remove("active");
    navMeun.classList.remove("active");
}))

