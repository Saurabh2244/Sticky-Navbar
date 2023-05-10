window.addEventListener('scroll', stick);
function stick() {
    let sticky = document.getElementById("fix-nav");
    if (window.pageYOffset >= 254.587) {

        sticky.classList.add("sticky");
    } else {
        sticky.classList.remove("sticky")
    }


}