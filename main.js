// Hamburger Menu

const btnHamburger = document.querySelector('.menu')
const navList = document.querySelector('.nav__list')
const navSubList = document.querySelector('.navSub--gallery')
const btnGallery = document.querySelector('.nav__item--gallery')


const hamburgerMenu = () => {
    btnHamburger.addEventListener('click', () => {
        btnHamburger.classList.toggle('change')
        navList.classList.toggle('show')
    })
}

hamburgerMenu();


// Button Gallery SubMenu

// const btnSubMenu = () => {
//     btnGallery.addEventListener('click', () => {
//         navSubList.classList.toggle('showSubMenu')
//     })
// }

// btnSubMenu()


let subMenuVisible = false;

btnGallery.addEventListener('click', function () {
    if (!subMenuVisible) {
        navSubList.classList.add('showSubMenu')
        subMenuVisible = true;
    } else if(subMenuVisible){
        navSubList.classList.remove('showSubMenu')
        subMenuVisible = false;
    }
})