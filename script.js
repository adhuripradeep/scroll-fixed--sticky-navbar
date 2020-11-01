window.addEventListener("scroll", function () {
    if (scrollY > (innerHeight - 60)) {
        document.getElementsByClassName("nav")[0].classList.add("fixed");
    } else {
        document.getElementsByClassName("nav")[0].classList.remove("fixed");
    }
});