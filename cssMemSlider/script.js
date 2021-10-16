const slidContainer = document.querySelector('.slider__container')
const controlContainer = document.querySelector('.pagination')
const textContainer = document.querySelector('.text-container__text')
const textAll = ['Memes should have been attached here', 'Drink coffee in any situation', 'O-o, now someone will steal the shaggy', 'Purple guy with a weird smile']
controlContainer.addEventListener('click', (event) => {
  const n = event.target.dataset.control
  slidContainer.style.transform = `translateX(-${(n - 1) * 100}%)`

  const controlFocus = document.querySelector('.pagination__control_focus')
  if (controlFocus) {
    controlFocus.classList.remove('pagination__control_focus')
  }
  if (event.target.classList.contains('pagination__control-container')) {
    console.log(event.target.firstElementChild)
    event.target.firstElementChild.classList.add('pagination__control_focus')
  } else if (event.target.classList.contains('pagination__control')) {
    event.target.classList.add('pagination__control_focus')
  }

  textContainer.style.transition = '0s'
    textContainer.innerHTML = textAll[n - 1]
    textContainer.style.transform = 'translateX(100px)'
    textContainer.style.opacity = '0'

    setTimeout(() => {
      textContainer.style.transition = '0.2s'
      textContainer.style.transform = 'translateX(0)'
      textContainer.style.opacity = '1'
    })
})

