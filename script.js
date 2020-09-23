const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const WhiteKeys = document.querySelectorAll('.key.Whites')
const BlackKeys = document.querySelectorAll('.key.Blacks')

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const WhiteKeysIndex = WHITE_KEYS.indexOf(key)
    const BlackKeysIndex = BLACK_KEYS.indexOf(key)

    if (WhiteKeysIndex > -1) playNote(WhiteKeys[WhiteKeysIndex])
    if (BlackKeysIndex > -1) playNote(BlackKeys[BlackKeysIndex])
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}
