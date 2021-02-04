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

            //Tab content

let tabItems = document.querySelectorAll(".tab-title-item");
let tabContent = document.querySelectorAll(".tab-container");
let tabsWrap = document.querySelector(".tab-title-items");
let screenWidth = window.screen.width

window.addEventListener('resize', tabWorkScreenWidth)


function tabWorkScreenWidth (){
if(window.screen.width > 767 ) {



function hideTabsContent() {
    tabContent.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show");        
    } )
    tabItems.forEach(item => {
        item.classList.remove("active")
    })
}

function showTabsContent (i = 0) {
    tabContent[i].classList.add("show");
    tabContent[i].classList.remove('hide');
    tabItems[i].classList.add('active');
    
}

hideTabsContent()
showTabsContent()

tabsWrap.addEventListener("click", function(e) {
    let target = e.target;

    if(target.classList.contains("tab-title-item")) {
        tabItems.forEach((item,i) => {
            if(target == item) {
                hideTabsContent();
                showTabsContent(i)
            }
        })
    }
})
} else {
    tabContent.forEach((item,i) => {
        item.classList.add("show");
        item.classList.remove('hide');
        tabItems[i].classList.add('active');
    })
}
}

tabWorkScreenWidth()