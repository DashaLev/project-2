let mobileMenu = document.querySelector(".nav-mobile-menu")
let mainManu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainManu.classList.add("active-menu");
    } else {
        mainManu.classList.remove("active-menu");
    }
})

        // Slider

function sliderScreenWidth (){
    if(window.screen.width > 767 ) {
        $(document).ready(function(){
            $('.slider-js').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            });
        });
} else {
    $(document).ready(function(){
        $('.slider-js').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
      });
}
}

sliderScreenWidth ()

        // Modal

let windowModal = document.querySelector(".modal")
let closeBtn = document.querySelector(".btn-close")
let modalBlock = document.querySelector(".modal-block")

setTimeout(showModal, 5000);

function showModal () {
    // windowModal.classList.remove("hide")
    windowModal.classList.add("show")
}

function hideModal () {
    windowModal.classList.remove("show")
    // windowModal.classList.add("hide")
}

modalBlock.parentElement.addEventListener("click", function() {
    console.log(`modalBlock`)
    hideModal ()
})

closeBtn.addEventListener("click", function() {
    console.log(`closeBtn`)
    hideModal ()
})
hideModal ()

