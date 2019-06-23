class Hangman {
  constructor(word, noOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.noOfGuesses = noOfGuesses
    this.status = 'playing'
  }

  makeGuess(guessChar) {
    const isUnique = !this.guessedLetters.includes(guessChar)
    const isBadGuess = !this.word.includes(guessChar)
    if (this.status !== 'playing') return
    if (isUnique) {
      this.guessedLetters.push(guessChar.toLowerCase())
      if (isBadGuess) this.noOfGuesses--
    }
    round1.updateStatus()
  }

  get puzzle() {
    let puzzle = ''
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ')
        puzzle += letter
      else {
        puzzle += '*'
      }
    })
    return puzzle
  }

  updateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === ' '
    )
    if (this.noOfGuesses === 0) this.status = 'failed'
    else if (finished) this.status = 'finished'
    else this.status = 'playing'
  }

  get statusMessage() {
    if (this.status === 'finished') return `Great job! You guessed the word`
    else if (this.status === 'failed')
      return `Nice try! The word was "${this.word.join('').toUpperCase()}"`
    else return `Guesses Left: ${this.noOfGuesses}`
  }
}
