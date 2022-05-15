import ReactHtmlParser from 'react-html-parser'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
  solution: string,
  code: string,
  isGameComplete: boolean,
}

const styles = {
  fontSize: '18px',
  flexFlow: 'wrap',
}
const hrStyles = {
  flexBasis: '100%',
  border: 0,
  height: 0,
  margin: 0,
}

const classes = "flex justify-center mt-4 dark:text-white"

export const SolutionText = ({ solution, code, isGameComplete }: Props) => {
  return (
    <Transition.Root show={isGameComplete} style={styles} className={classes}>
      <p>{solution}</p>
      <hr style={hrStyles} />
      <p>{ReactHtmlParser(code)}</p>
    </Transition.Root>
  )
}
