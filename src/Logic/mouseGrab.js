const containerSlider = document.getElementById('main')

// Declaración de variables
let isDown = false
let startX
let scrollLeft

// Funciones que leen la posición del cursor en le carousel y permite navegarlo por gesto de arrastrar
function mousedown (elemento) {
  elemento.addEventListener('mousedown', (e) => {
    isDown = true
    startX = e.pageX - elemento.offsetLeft
    scrollLeft = elemento.scrollLeft
    elemento.style.cursor = 'grabbing'
  })
}
function mouseleave (elemento) {
  elemento.addEventListener('mouseleave', () => {
    isDown = false
  })
}
function mouseup (elemento) {
  elemento.addEventListener('mouseup', () => {
    isDown = false
    elemento.style.cursor = 'grab'
  })
}
function mousemove (elemento) {
  elemento.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - elemento.offsetLeft
    const walk = x - startX
    elemento.scrollLeft = scrollLeft - walk
  })
}

// Se llaman a las funciones y se inserta el ID del elemento para hacer que el carousel tenga navegación por gesto de arastrar

mousedown(containerSlider)
mouseleave(containerSlider)
mouseup(containerSlider)
mousemove(containerSlider)
