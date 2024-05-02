import "./css/style.scss";
import ScrollReveal from "scrollreveal";
import { z } from "zod";
import axios from "axios";

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
        800: { perPage: 4, fixedHeight: "70px" },
        640: { perPage: 3, fixedHeight: "70px" },
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


function addPercent(stop, el) {
    let i = 0;
    let main = "rgb(159, 159, 159)";
    const st = setInterval(() => {
        i++;
        el.style.backgroundImage = `conic-gradient(${main} ${i}%, rgb(36, 36, 36) 0%)`;
        el.dataset.percent = String(i).padStart(2, "0");
        if (i === Number(stop)) {
            clearInterval(st);
        }
    }, 4000 / Number(stop));
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            entry.target.classList.add('box__active')
            addPercent(entry.target.dataset.percent, entry.target);
            observer.unobserve(entry.target);

        }
    });
});

box_circle.forEach((element)=>{
    observer.observe(element);
})

//observer.observe(document.getElementById("percent_skills"));

window.addEventListener("load", () => {
    setTimeout(() => {
        loading.remove();
    }, 1000);

    ScrollReveal({ distance: "100px", mobile: false });

    ScrollReveal().reveal(".headlineOne", {
        delay: 200,
        origin: "left",
        duration: 2000,
    });
    ScrollReveal().reveal(".headlineTwo", { delay: 100, duration: 2000 });
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

    ScrollReveal().reveal(".percent_skills", {
        delay: 500,
        duration: 500,
        origin: "left",
        distance: "0px",
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

const iconSend = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.534.534 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"/></svg>`;
const iconLoad = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>`;
const iconOk = `<svg class="ok" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11L11 17L21 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path></svg>`;

const btn_form = document.getElementById("btn_form");
const form_box = document.getElementById("form_box");
const form_msg = document.getElementById("form_msg");
const btn_close = document.getElementById("btn_close");

const inputName = document.querySelector('[name="name"]');
const inputEmail = document.querySelector('[name="email"]');
const inputMsg = document.querySelector('[name="msg"]');

const input_el = document.querySelectorAll(".input_el");

const menu_btn = document.getElementById("menu_btn");
const list_ul = document.getElementById("list_ul");

function reset() {
    form_box.classList.remove("form_box_show");
}

btn_form.addEventListener("click", () => {
    form_box.classList.add("form_box_show");
});

form_box.addEventListener("click", (el) => {
    if (el.target.id === form_box.id) {
        reset();
    }
});

btn_close.addEventListener("click", () => reset());

let z_name = z
    .string()
    .regex(/^[a-zA-Z\s]{3,12}$/)
    .trim();
let z_email = z.string().email({ message: "khas ykon email" }).trim();
let z_msg = z.string().min(10).max(250).trim();

input_el.forEach((el) => {
    el.addEventListener("keydown", () => {
        el.classList.remove("error");
    });
});

form_msg.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form_msg);

    const dataObj = Object.fromEntries(data);

    const vName = z_name.safeParse(dataObj["name"]);
    const vEmail = z_email.safeParse(dataObj["email"]);
    const vMsg = z_msg.safeParse(dataObj["msg"]);

    vName.success ? null : inputName.classList.add("error");

    vEmail.success ? null : inputEmail.classList.add("error");

    vMsg.success ? null : inputMsg.classList.add("error");

    if (vName.success && vEmail.success && vMsg.success) {
        document.querySelector('[type="submit"]').innerHTML = iconLoad + "send";

        data.append("id", "INCREMENT");
        data.append("date", "DATETIME");

        axios
            .post("https://sheetdb.io/api/v1/i2sdrm7151ozf", data)
            .then((res) => {
                if (res.status === 201) {
                    input_el.forEach((el) => {
                        el.value = "";
                    });
                    document.querySelector('[type="submit"]').innerHTML =
                        iconOk + "send";
                }
            })
            .catch((err) => {})
            .finally(() => {
                setTimeout(() => {
                    document.querySelector('[type="submit"]').innerHTML =
                        iconSend + "send";
                    reset();
                }, 3000);
            });
    }
});

menu_btn.addEventListener("click", function (e) {
    this.classList.toggle("active");
    list_ul.classList.toggle("avtive");
});

document.querySelectorAll(".list > li > a").forEach((item) => {
    item.addEventListener("click", () => {
        menu_btn.click();
    });
});


const mouse = document.getElementById('mouse')

window.addEventListener('mousemove',(e)=>{
    
    mouse.animate({
        left:`${e.clientX}px`,
        top:`${e.clientY}px`
    },{duration:500,fill:'forwards'});

    
})

const txt_bg = document.getElementById('txt_bg')
const scroll_progress = document.getElementById('s_progress')
const wdd = window.document.documentElement

const text_h1 = document.getElementById('text_h1')

const hs = wdd.offsetHeight - wdd.clientHeight

window.addEventListener('scroll',(e)=>{


    txt_bg.style.transform = `translate(-50%, 120px) scale(${(window.scrollY * 0.001) + 1})`;

    //text_h1.style.left = `${window.scrollY}px`
    text_h1.animate({
        left:`${window.scrollY * 0.3}px`,
    },{duration:900,fill:'forwards'});

    get_started.animate({
        left:`${-window.scrollY * 0.3}px`,
    },{duration:900,fill:'forwards'});
    
    scroll_progress.style.width = `${(window.scrollY / hs) * 100}%`

    console.log( (window.scrollY / hs) * 100)

})