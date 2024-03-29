import { WORDS } from '../constants/wordlist'
import { WRONG_SPOT_MESSAGE, NOT_CONTAINED_MESSAGE } from '../constants/strings'
import { getGuessStatuses } from './statuses'
import { default as GraphemeSplitter } from 'grapheme-splitter'
import { isValidKey } from '../components/keyboard/Keyboard'

const getWords = (wordlist: { solution: string }[]) => {
  return wordlist.map(wordObj => wordObj.solution)
}

export const isWordInWordList = (word: string, solution: string) => {
  return (
    getWords(WORDS).includes(word) ||
    isValidWord(word, solution)
  )
}

export const isValidWord = (word: string, solution: string) => {
  return word.length === solution.length && word.split('').every(isValidKey);
}

export const isWinningWord = (word: string, solution: string) => {
  return word === solution
}

export const isWinningWordOfDay = (word: string) => {
  return isWinningWord(word, solution)
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
export const findFirstUnusedReveal = (word: string, guesses: string[], solution: string) => {
  if (guesses.length === 0) {
    return false
  }

  const lettersLeftArray = new Array<string>()
  const guess = guesses[guesses.length - 1]
  const statuses = getGuessStatuses(solution, guess)
  const splitWord = unicodeSplit(word)
  const splitGuess = unicodeSplit(guess)

  for (let i = 0; i < splitGuess.length; i++) {
    if (statuses[i] === 'correct' || statuses[i] === 'present') {
      lettersLeftArray.push(splitGuess[i])
    }
    if (statuses[i] === 'correct' && splitWord[i] !== splitGuess[i]) {
      return WRONG_SPOT_MESSAGE(splitGuess[i], i + 1)
    }
  }

  // check for the first unused letter, taking duplicate letters
  // into account - see issue #198
  let n
  for (const letter of splitWord) {
    n = lettersLeftArray.indexOf(letter)
    if (n !== -1) {
      lettersLeftArray.splice(n, 1)
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
  }
  return false
}

export const unicodeSplit = (word: string) => {
  return new GraphemeSplitter().splitGraphemes(word)
}

export const unicodeLength = (word: string) => {
  return unicodeSplit(word).length
}

export const localeAwareLowerCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleLowerCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toLowerCase()
}

export const localeAwareUpperCase = (text: string) => {
  return process.env.REACT_APP_LOCALE_STRING
    ? text.toLocaleUpperCase(process.env.REACT_APP_LOCALE_STRING)
    : text.toUpperCase()
}

export const getWordBySolutionIndex = (solutionIndex: number) => {
  if (solutionIndex < 0 || solutionIndex >= WORDS.length) {
    return {
      solution: '',
      clue: '',
      code: '',
      solutionIndex: -1,
    }
  }
  return {
    solution: localeAwareUpperCase(WORDS[solutionIndex].solution),
    clue: WORDS[solutionIndex].clue,
    code: WORDS[solutionIndex].code,
    solutionIndex: solutionIndex,
  }
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epoch = new Date(2022, 0)
  const start = new Date(epoch)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  let index = 0
  while (start < today) {
    index++
    start.setDate(start.getDate() + 1)
  }

  const nextDay = new Date(today)
  nextDay.setDate(today.getDate() + 1)

  const offset = 4
  const solutionAndIndex = getWordBySolutionIndex((index + offset) % WORDS.length)

  return {
    solution: solutionAndIndex.solution,
    clue: solutionAndIndex.clue,
    code: solutionAndIndex.code,
    solutionIndex: solutionAndIndex.solutionIndex,
    tomorrow: nextDay.valueOf(),
  }
}

export const { solution, clue, code, solutionIndex, tomorrow } = getWordOfDay()
