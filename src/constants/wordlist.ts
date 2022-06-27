const formatLink = (text: string, href: string) => {
  return `<a href="${href}" class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" target="_blank">${text}</a>`
}

export const WORDS = [
  {solution: '("A")', clue: 'Greetings (JavaScript)', code: 'console.log<strong>("Hello world")</strong>;'},
  {solution: ';A++)', clue: 'Common syntax (C++, C#, or Java)', code: 'for (int candles = 0; candles < 48<strong>; candles++)</strong> {'},
  {solution: '->A!=', clue: 'Linked list implementation (C++)', code: 'while (curr<strong>->next !=</strong> nullptr) {'},
  {solution: '/:A\')', clue: 'React Router DOM usage (Codle App.tsx; TypeScript)', code: 'const exampleMatch = useMatch(\'/examples<strong>/:id\')</strong>'},
  {solution: '(`${A', clue: 'React onChar function body (Codle App.tsx; TypeScript)', code: 'setCurrentGuess<strong>(`${currentGuess</strong>}${value}`)'},
  {solution: '([...', clue: 'React setGuesses function call (Codle App.tsx; TypeScript)', code: 'setGuesses<strong>([...guesses</strong>, currentGuess])'},
  {solution: ':[A],', clue: 'Mongoose scoreSchema constructor body (Codle index.js; Node.js)', code: 'guesses<strong>: [String],</strong>'},
  {solution: '()=>{', clue: 'app.listen function (Codle index.js; Node.js)', code: 'app.listen(PORT, <strong>() => {</strong>'},
  {solution: '(\'*\',', clue: 'app.get function (Codle index.js; Node.js)', code: 'app.get<strong>(\'*\',</strong> (req, res) => {'},
  {solution: ']+@[A', clue: 'Email regular expression (Python)', code: 'regex = r"(^[a-zA-Z0-9_.+-<strong>]+@[a</strong>-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)"'},
  {solution: '(A*)&', clue: 'Fast inverse square root (Quake III; C)', code: `i = * <strong>(long*) &</strong>y;  &nbsp;&nbsp;<em>(see ${formatLink('here', 'https://www.youtube.com/watch?v=p8u_k2LIZyo')})</em>`},
  {solution: '<-.<.', clue: 'Hello world (Brainf*ck)', code: `<em>${formatLink('code', 'https://en.wikipedia.org/wiki/Fork_bomb#Implementation')}</em>`},
  {solution: '(A)))', clue: 'Factorial (Lisp)', code: 'finally <strong>(return fac)))</strong>'},
  {solution: '|:&};', clue: 'Fork bomb (Unix shell)', code: `:(){ :<strong>|:& };</strong>:  &nbsp;&nbsp;<em>(see ${formatLink('here', 'https://en.wikipedia.org/wiki/Fork_bomb#Implementation')})</em>`},
  {solution: ');A;-', clue: 'Little Bobby Tables Injection (XKCD; SQL)', code: `Robert'<strong>); DROP TABLE STUDENTS; -</strong>-  &nbsp;&nbsp;<em>(see ${formatLink('here', 'https://xkcd.com/327/')})</em>`},
]
