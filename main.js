import "./css/style.scss";

new Splide(".splide", {
    classes: {
        arrows: "splide__arrows your-class-arrows aaa",
        arrow: "splide__arrow your-class-arrow aaa",
        prev: "splide__arrow--prev splide_hidden",
        next: "splide__arrow--next splide_hidden",
        pagination: "splide__pagination your-class-pagination splide_hidden",
        page: "splide__pagination__page your-class-page aa splide_hidden",
    },
    perPage: 4,
    fixedHeight: "100px",
    gap: 20,
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    autoScroll: {
        speed: 2,
        pauseOnFocus:false,
        pauseOnHover:false
    },
}).mount(window.splide.Extensions);
