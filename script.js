const TECLAS_BRANCAS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const TECLAS_PRETAS = ['s', 'd', 'g', 'h', 'j']

const teclas = document.querySelectorAll('.tecla')
const teclasBrancas = document.querySelectorAll('.tecla.Branca')
const teclasPretas = document.querySelectorAll('.tecla.Preta')

teclas.forEach(tecla => {
  tecla.addEventListener('click', () => playNote(tecla))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const tecla = e.key
  const teclasBrancasIndex = TECLAS_BRANCAS.indexOf(tecla)
  const teclasPretasIndex = TECLAS_PRETAS.indexOf(tecla)

  if (teclasBrancasIndex > -1) playNote(teclasBrancas[teclasBrancasIndex])
  if (teclasPretasIndex > -1) playNote(teclasPretas[teclasPretasIndex])
})

function playNote(tecla) {
  const noteAudio = document.getElementById(tecla.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  tecla.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    tecla.classList.remove('active')
  })
}
