type Props = {
  clue: string,
}

const styles = {
  fontSize: '18px',
}

const classes = "flex justify-center mb-4"

export const ClueText = ({ clue }: Props) => {
  return (
    <div style={styles} className={classes}>
      <p>Clue: {clue}</p>
    </div>
  )
}
