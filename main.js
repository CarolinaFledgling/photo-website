// Hamburger Menu

const btnHamburger = document.querySelector('.menu')


const hamburgerMenu = () =>{
    btnHamburger.addEventListener('click', () =>{
        btnHamburger.classList.toggle('change')
       
        

    })
}

hamburgerMenu()