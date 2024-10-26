document.addEventListener("DOMContentLoaded", (event) => {

    let btn = document.querySelector(".layout__menu-toggle");
    let aside = document.querySelector(".layout__aside");

    btn.addEventListener("click", (event) => {

        let visible = document.querySelector(".layout__aside--visible");

        if(!visible){
            aside.classList.add("layout__aside--visible");
        } else{
            aside.classList.remove("layout__aside--visible"); 
        }
    });
});