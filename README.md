# Codle

Guess the "word" (code snippet) in 10 tries. After each guess, the color of the tiles will
change to show how close your guess was to the word.

The word is taken from a substring within a line of code. 
However, the code is first condensed:

1. All whitespace is removed
2. Consecutive alphanumeric/underscore characters are replaced by a single 'A'

The chosen word will be <strong>special character-heavy</strong> (at most 1 'A').
You will be given a clue to the repository or general context from where the code was from,
as well as the programming language.

For example, let the line of code be

`console.log("H3llo world_");`

This would condense down to

`A.A("A");`

with clue "Greetings (JavaScript)."
The following word can be taken from this string: 

`("A")`


[**Play the daily game here!**](https://codle.netlify.app)

You can play all 14 Codle puzzles (past and future) by visiting the URL 
<a href="https://codle.herokuapp.com/examples/0" target="_blank">codle.herokuapp.com/examples/0</a> 
and replacing the 0 at the end with a number between 0 and 13 inclusive. 
I will update the site with more puzzles in the future!

This is one of the Wordle variants I have made. The other games and instructions for creating your own Wordle variant can be found [here](https://github.com/Compsciler/Wordle-With-Score-Database/).
