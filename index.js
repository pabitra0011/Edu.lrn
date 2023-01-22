
// -------------------change navbar styles on scroll-----------------

window.addEventListener('scroll',()=>{
document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// ------------------ show /hide faqs questions ---------------------------

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open');

        // change plus icon
        const icon = faq.querySelector('.fac-icon i');
        if(icon.className === "uil uil-plus"){
            icon.className = "uil uil-minus";
        }else {
            icon.className = "uil uil-plus";
        }
    })
})

// -------------------- show/hide nav menu-----------------------------

const menu = document.querySelector(".nav-menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener('click',() => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

//close nav menu-------------

const closenav = () =>{
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}

closebtn.addEventListener('click',closenav)
