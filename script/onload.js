const header = document.querySelector("header");
const checkbox = document.querySelector("input");

window.onload = function () {
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = "-69px"
            header.style.opacity = "0"
        } else {
            header.style.top = "0px"
            header.style.opacity = "1"
        }
        if (lastScrollTop >= '256') {
            header.style.background = "var(--menu-main-background)"
            header.style.backdropFilter = "blur(40px)"
        } else {
            header.style.background = "var(--none)"
            header.style.backdropFilter = "blur(0px)"
        }
        lastScrollTop = scrollTop;

        // console.log(document.documentElement.scrollTop);
    });
};

checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.body.style.overflow = "hidden"
        header.style.top = "0px"
    } else {
        document.body.style.overflow = "auto"
        header.style.top = "0px"
    }
});