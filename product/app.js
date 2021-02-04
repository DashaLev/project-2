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
let priceProduct = document.querySelectorAll(".price")
let summProduct = document.querySelectorAll(".summ");

summProduct.forEach((item,i) => {
    item.textContent = priceProduct[i].textContent
})

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
    
        productCout[i].value = nextCount
        summProduct[i].textContent = (+priceProduct[i].textContent * nextCount)
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
    
        productCout[i].value = nextCount
        summProduct[i].textContent = (+priceProduct[i].textContent * nextCount)
        toggleButtonState(productCout[i].value,decrem,increment[i])
    })
})

    // add to cart

let productsCountEl = document.querySelector(".cart-calc")
let addToCartButtons = document.querySelectorAll(".product-order")

addToCartButtons.forEach((item,i) => {
    item.addEventListener("click", function() {
        productsCountEl.textContent = +productsCountEl.textContent + +productCout[i].value
        productCout[i].value = 1
        toggleButtonState(productCout[i].value,decrement[i],increment[i])
        summProduct[i].textContent = +priceProduct[i].textContent
    })
})


            // Images

// let productVes = document.querySelectorAll(".product-weight");
// let productImages = document.querySelectorAll(".images-item-product");

// let productsBox = document.querySelectorAll(".products-box")
// console.log(productsBox)


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

        //Filtr

let filterBox = document.querySelector(".filter-box")
let filterRadio = document.querySelectorAll(".filtr-radio")
let filtrName = document.querySelectorAll(".product-filter-name")
// let checkOne = document.getElementById("1")
// let checkTwo = document.getElementById("2")
// let checkThree = document.getElementById("3")
// let checkElse = document.getElementById("4")
// let filtrNameOne = document.querySelector(".product-one")
// let filtrNameTwo = document.querySelector(".product-two")
// let filtrNameThree = document.querySelector(".product-three")
// let filtrNameElse = document.querySelector(".product-else")
let productCart = document.querySelectorAll(".product-hide")
let productGroupName = document.querySelectorAll(".group-product")

// filterRadio.forEach((item, i) => {
//     console.log(item.checked)
//     console.log(filtrName[i].textContent)
// })

let statusChecked = []

function openproductAll () {
    filterRadio.forEach((item,i) => {
        statusChecked[i] = item.checked
    })
    if (statusChecked[0] == 0 && statusChecked[1] == 0 && statusChecked[2] == 0 && statusChecked[3] == 0) {
        productCart.forEach((product) => {
            console.log(product)
            product.classList.remove("hide")
            product.classList.add("show")
        })
    }
    console.log(statusChecked)
}




filterBox.addEventListener("click", function(e) {
    if(e.target.classList.contains("filtr-radio") ) {
       filterRadio.forEach((item, i) => {
        if(item.checked) {
            productCart.forEach((group, a) =>{
                if(filtrName[i].textContent == productGroupName[a].textContent) {
                    group.classList.add("show")
                    group.classList.remove("hide")
                }
            })
        } else {
            productCart.forEach((group, a) =>{
                if(filtrName[i].textContent == productGroupName[a].textContent) {
                    group.classList.add("hide")
                    group.classList.remove("show")
                }
            })
        }        
       })
    }
    openproductAll ()

})

// function filtrCheck (checkBtn,filtrName) {
//     productCart.forEach((item,i) => {
//         checkBtn.addEventListener("click",function () {
//             if(checkBtn.checked){
//                 if(filtrName.textContent == productGroupName[i].textContent) {
//                     item.classList.add("show")
//                     item.classList.remove("hide")
//                 } else {
//                     item.classList.add("hide")
//                     item.classList.remove("show")
//                 }
//             } else {
//                     item.classList.add("show")
//                     item.classList.remove("hide")
//             }

//         })
//     })
// }
// checkOne.addEventListener("click", filtrCheck (checkOne,filtrNameOne))
// checkTwo.addEventListener("click", filtrCheck (checkTwo,filtrNameTwo))
// checkThree.addEventListener("click", filtrCheck (checkThree,filtrNameThree))
// checkElse.addEventListener("click", filtrCheck (checkElse,filtrNameElse))
