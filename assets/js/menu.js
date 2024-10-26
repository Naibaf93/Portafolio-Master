document.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector(".layout__menu-toggle");
    let icon__bars = document.querySelector(".layout__menu-toggle .fa-bars");
    let icon__xmark = document.querySelector(".layout__menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    btn.addEventListener("click", (event) => {

        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
            icon__bars.style.opacity = 0;
            icon__xmark.style.opacity = 1;
        } else{
            aside.classList.remove("layout__aside--visible"); 
            icon__bars.style.opacity = 1;
            icon__xmark.style.opacity = 0;
        }
    });
});