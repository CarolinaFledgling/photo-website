// Hamburger Menu

let btnHamburger = document.querySelector('.menu')
const navList = document.querySelector('.nav__list')
const navSubList = document.querySelector('.navSub')
const btnGallery = document.querySelector('.nav__link--click')


const hamburgerMenu = () => {
  btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle('change')
    navList.classList.toggle('show')
  })
}

hamburgerMenu();


// Button Gallery SubMenu
let subMenuVisible = false;

btnGallery.parentElement.addEventListener('mouseenter', function () {
  if (!subMenuVisible) {
    navSubList.classList.add('showSubMenu')
    subMenuVisible = true;
  } else if (subMenuVisible) {

  }
})

btnGallery.parentElement.addEventListener('mouseleave', function () {
  if (subMenuVisible) {
    navSubList.classList.remove('showSubMenu')
    subMenuVisible = false; 
  }
})

//Hiding the mobile menu when user clicks outside 

let specifiedElement = document.getElementById('box');

document.addEventListener('click', function (event) {
  let isClickInside = specifiedElement.contains(event.target) || btnHamburger.contains(event.target)
  if (navList.classList.contains('show') && !isClickInside) {
    navList.classList.remove('show')
    btnHamburger.classList.remove('change')
    console.log('you click outside')

  }
});


// MAIN SLIDER


let liczba = 0; //start point 

let time = 3000;
mainSlider();

function mainSlider() {
  let i;
  let images = document.getElementsByClassName('slider__img')
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  liczba++;
  if (liczba > images.length) {
    liczba = 1;
  }
  images[liczba - 1].style.display = "block";
  setTimeout(mainSlider, time)
}