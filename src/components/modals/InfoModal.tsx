import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

// TODO: Change rules to match game
export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the "word" (code snippet) in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The word is taken from a substring within a line of code. 
        However, the code is first condensed:
        <ol>
          <li>1. All whitespace is removed</li>
          <li>2. Consecutive alphanumeric/underscore characters are replaced by a single 'A'</li>
        </ol>
        The chosen word will be <strong>special character-heavy</strong> (at most 1 'A').
        You will be given the repository or general context from where the code was from,
        as well as the programming language.
      </p>
      <br />
      <p className="text-sm text-gray-500 dark:text-gray-300">
        For example, let the line of code be <pre>console.log("H3llo world_");</pre>
        This would condense down to <pre>A.A("A");</pre>
        with hint "Greetings (JavaScript)."
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The following word can be taken from this string: 
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell value="(" />
        <Cell value="&quot;" />
        <Cell value="A" />
        <Cell value="&quot;" />
        <Cell value=")" />
      </div>

      {/* <br /> -*/}
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Sample guesses for this word:
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="("
          status="correct"
        />
        <Cell value="*" />
        <Cell value="A" />
        <Cell value=":" />
        <Cell value=":" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character ( is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="." />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="/" />
        <Cell value="=" />
        <Cell value=";" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="<" />
        <Cell value="{" />
        <Cell value="-" />
        <Cell isRevealing={true} isCompleted={true} value="]" status="absent" />
        <Cell value=")" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The character ] is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/Compsciler/Codle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
