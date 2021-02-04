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

        //Calck Count

let productCout = document.querySelectorAll(".input-product")
let increment = document.querySelectorAll(".plus")
let decrement = document.querySelectorAll(".minus")
let summProduct = document.querySelectorAll(".summ");
let h1Text = document.querySelectorAll(".summ").textContent;

function toggleButtonState(count,decrementBtn,incrementBtn) {
            decrementBtn.disabled = count <= +1
            incrementBtn.disabled = count >= +15
        }
for(let i=0; i < productCout.length; i++) {
    toggleButtonState(productCout[i].value,decrement[i],increment[i])
}

increment.forEach((item,i) => {
    item.addEventListener("click", function () {
        let productCoutValue = productCout[i].value;
        let nextCount = +productCoutValue + 1;
        let h1Text = summProduct[i].textContent;
    
        productCout[i].value = nextCount
        summProduct[i].textContent = (+h1Text + (+h1Text / (+productCout[i].value - 1)))
        console.log(h1Text)
        toggleButtonState(productCout[i].value,decrement[i],item)
        if(productCout[i].value >= 15){
            alert(`У Вас оптова закупівля, зверніться до менеджера 0670000000`)
        }
})
})

decrement.forEach((decrem,i) => {
    decrem.addEventListener("click", function () {
        let productCoutValue = productCout[i].value;
        let nextCount = +productCoutValue - 1;
        let h1Text = summProduct[i].textContent;
    
        productCout[i].value = nextCount
        summProduct[i].textContent = (+h1Text - (+h1Text / (+productCout[i].value + 1)))
        console.log(h1Text)
        toggleButtonState(productCout[i].value,decrem,increment[i])
    })
})

            // Images

let productVes = document.querySelectorAll(".product-weight");
let productImages = document.querySelectorAll(".images-item-product");

let productsBox = document.querySelectorAll(".products-box")
console.log(productsBox)


// function hideImages() {
//     productImages.forEach(tab => {
//         tab.classList.add("hide");
//         tab.classList.remove("show");        
//     } )
//     productVes.forEach(item => {
//         item.classList.remove("active")
//     })
//     summProduct.forEach(test => {
//         test.classList.add("hide")
//         test.classList.remove("show")
//     })
// }


// function showImages (i = 2) {
//     productImages[i].classList.add("show");
//     productImages[i].classList.remove('hide');
//     productVes[i].classList.add('active');
//     summProduct[i].classList.add("show")
    
// }

// hideImages()
// showImages()

// productVes.forEach((item,i) => {
//     item.addEventListener("click", function() {
//         hideImages()
//         showImages(i)
// })
// })