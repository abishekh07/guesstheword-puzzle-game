let round1 = ''

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  round1 = new Hangman(puzzle, 5)
  renderPuzzle()
}

const renderPuzzle = () => {
  puzzleEl.textContent = round1.puzzle
  guessEl.textContent = round1.statusMessage
}

const puzzleEl = document.querySelector('#puzzle-element')
puzzleEl.textContent = round1.puzzle

const guessEl = document.querySelector('#guess-element')
guessEl.textContent = `Guesses Left: ${round1.noOfGuesses}`

// Adding an Event Listener to the Reset Button

const resetButton = document.querySelector('#reset-button')
resetButton.textContent = 'Reset Game'

document.querySelector('#reset-button').addEventListener('click', startGame)

// --------------------------------------------------------------------------

startGame()

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  round1.makeGuess(guess)

  renderPuzzle()
})

// Accessing Reset button on hitting the spacebar...

window.onkeydown = (e) => {
  if (e.keyCode === 32) {
    e.preventDefault()
    document.querySelector('#reset-button').click()
  }
}
