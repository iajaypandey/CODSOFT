const hambug = document.querySelector(".hamBug");
const mNav = document.querySelector(".mobile-nav")

hambug.addEventListener("click", function(){
    this.classList.toggle("active");
    mNav.classList.toggle("active")
});