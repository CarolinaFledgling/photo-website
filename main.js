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
    subMenuVisible = false; // zapytac sie dlaczego tu i tam ustawilismy false i true 
  }
})

// Kliknięcie poza nawigacje, żeby sie schowała automatycznie 


let specifiedElement = document.getElementById('box');

document.addEventListener('click', function (event) {
  let isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    alert('klinales w nawigacje')
  } else {
    alert('kliknales poza nawigacje ')
    // navList.classList.remove('show')

    // navList.hasClass('show')

    // navList.classList.toggle('show').remove('show')
    // closeNav()
  }
});

// function closeNav() {

//   // if(navList.classList.toggle == false)
//   if (navList.classList.toggle('show', false)) {
//     navList.classList.remove('show')
//   }

// }