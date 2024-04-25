import "./css/style.scss";
import ScrollReveal from "scrollreveal";

new Splide(".splide", {
    classes: {
        arrows: "splide__arrows your-class-arrows aaa",
        arrow: "splide__arrow your-class-arrow aaa",
        prev: "splide__arrow--prev splide_hidden",
        next: "splide__arrow--next splide_hidden",
        pagination: "splide__pagination your-class-pagination splide_hidden",
        page: "splide__pagination__page your-class-page aa splide_hidden",
    },
    perPage: 6,
    fixedHeight: "100px",
    gap: 15,
    type: "loop",
    drag: "free",
    focus: "center",
    breakpoints: {
        800: { perPage: 4 ,fixedHeight: "70px",},
        640: { perPage: 3 ,fixedHeight: "70px",},
    },
    autoScroll: {
        speed: 2,
        pauseOnFocus: false,
        pauseOnHover: false,
    },
}).mount(window.splide.Extensions);

const box_circle = document.querySelectorAll(".box_circle");
const get_started = document.getElementById("get_started");
const loading = document.getElementById("loading");

box_circle?.forEach((item) => {
    console.log(item.dataset.percent);
    item.style.backgroundImage = `conic-gradient(rgb(159, 159, 159) ${item.dataset.percent}%, rgb(36, 36, 36) 0%)`;
});

window.addEventListener("load", () => {
    setTimeout(() => {
        loading.remove();
    }, 1000);

    ScrollReveal({ distance: "100px",mobile: false });

    ScrollReveal().reveal(".headlineOne", {
        delay: 200,
        origin: "left",
        duration: 2000,
    });
    ScrollReveal().reveal(".headlineTwo", { delay: 100, duration: 2000  });
    ScrollReveal().reveal(".headlineThree", {
        delay: 200,
        origin: "right",
        duration: 2000,
    });
    ScrollReveal().reveal(".txt_tittle", {
        delay: 200,
        origin: "left",
        duration: 2000,
    });
    ScrollReveal().reveal(".info_user", {
        delay: 200,
        origin: "left",
        duration: 2000,
    });
    ScrollReveal().reveal(".photo_user", {
        delay: 200,
        origin: "right",
        duration: 2000,
    });
    ScrollReveal().reveal(".name_user", {
        delay: 1000,
        duration: 2000,
        distance: "10px",
    });
    ScrollReveal().reveal(".get_started", {
        delay: 1000,
        duration: 2000,
        distance: "10px",
    });

    ScrollReveal().reveal(".box_circle", {
        delay: 500,
        duration: 500,
        origin: "left",
        distance: "0px",
    });
    ScrollReveal().reveal(".box_tit", {
        delay: 500,
        duration: 500,
        origin: "bottom",
        distance: "10px",
    });

    ScrollReveal().reveal(".nv", {
        delay: 1000,
        origin: "top",
        distance: "80px",
        duration: 2000,
    });

    ScrollReveal().reveal(".slider", {
        delay: 1000,
        origin: "bottom",
        distance: "130px",
        duration: 2000,
    });

    //slider
});

get_started.addEventListener("click", () => {
    window.scrollTo({
        top: window.document.documentElement.clientHeight,
        behavior: "smooth",
    });
    console.log(window.document.documentElement.clientHeight);
});
