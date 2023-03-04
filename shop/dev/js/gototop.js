// go to top
const scrollBtn = document.querySelector(".go-to-top");
const btnVisibility = () => {
if (window.scrollY > 400) {
scrollBtn.style.visibility = "visible";
} else {
scrollBtn.style.visibility = "hidden";
}
};
document.addEventListener("scroll", () => {
btnVisibility();
});
scrollBtn.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});

