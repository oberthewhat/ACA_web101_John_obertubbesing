var gamemarker = 'x'


function playTicTacToe(element) {

    if (gamemarker === 'x') {
        element.innerText = 'o'
        gamemarker = 'o'

    } else {
        element.innerText = 'x'
        gamemarker = 'x'

    }
}