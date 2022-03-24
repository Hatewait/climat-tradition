'use strict'

// плавный скролл по якорю
const anchorsModal = document.querySelectorAll('.intro-product__nav-list a')

for (let anchor of anchorsModal) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
