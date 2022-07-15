$('.gallary_carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})



const herosection_btn = document.getElementById("herosection_btn");
const login_modelbox = document.getElementById("login_modelbox");
const close_login_modelbox = document.getElementById("close_login_modelbox");
const we_prasent_btn = document.getElementById("we_prasent_btn");

we_prasent_btn.addEventListener("click" , function(){
    login_modelbox.classList.remove("d-none");
    login_modelbox.classList.add("d-block");
})
herosection_btn.addEventListener("click" , function(){
    login_modelbox.classList.remove("d-none");
    login_modelbox.classList.add("d-block");
})

close_login_modelbox.addEventListener("click" , function(){
    login_modelbox.classList.remove("d-block");
    login_modelbox.classList.add("d-none");
})

login_modelbox.addEventListener("click" , function(){
    login_modelbox.classList.remove("d-block");
    login_modelbox.classList.add("d-none");
})