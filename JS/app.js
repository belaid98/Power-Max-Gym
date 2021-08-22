const btns  =  document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.bloc-modal');
const close = document.querySelector('.close');
const index = document.querySelector('.bloc-modal img');

if(window.matchMedia("(min-width: 850px)").matches)
{

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            index.src = 'img/equipment-${e.target.getAttribute("data-index")}.jpg';
            modal.classList.add('active');
        } )
    } )
    
    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    } )
    
}

// ----NAV ANNIMATION---//

const nav = document.querySelector('nav');

window.addEventListener('scroll' , () => {
    if(window.scrollY > 10) {
        nav.classList.add('nav-animmate')
    } else{
        nav.classList.remove('nav-animmate')
    }
})
