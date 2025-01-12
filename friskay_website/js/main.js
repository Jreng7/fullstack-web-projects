const navRightUl = document.querySelector('nav ul')
const hamburguer = document.querySelector('.menu')
const closeMenu = document.querySelector('.menu-close')

hamburguer.addEventListener('click', () => {
  navRightUl.classList.add('open')
})

closeMenu.addEventListener('click', () => {
  navRightUl.classList.remove('open')
})