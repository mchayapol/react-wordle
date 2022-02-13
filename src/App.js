import { useState } from "react";
import GamePanel from "./GamePanel";
import Keyboard from "./Keyboard";

function App() {
  const correctAnswer = "squid";
  const maxCharacter = 5;
  const [currentAttempt, setCurrentAttempt] = useState(0);
  const [hints, setHints] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
  const [guesses, setGuesses] = useState(["", "", "", "", ""]);
  const [charStatus, setCharStatus] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  });

  const handleKeyPress = (e) => {
    // console.log(e.keyCode);
    let currentCharIndex = guesses[currentAttempt].trim().length;
    console.log(
      e.key,
      e.key.length,
      guesses[currentAttempt].length,
      currentCharIndex
    );
    // console.log(/[a-z]/.test(e.key.toLowerCase()))

    if (e.key === "Backspace") {
      guesses[currentAttempt] = guesses[currentAttempt].slice(0, -1);
      setGuesses([...guesses]);
    } else if (
      e.key.length === 1 &&
      guesses[currentAttempt].length < maxCharacter &&
      /[a-z]/.test(e.key.toLowerCase())
    ) {
      guesses[currentAttempt] += e.key.toLowerCase();
      setGuesses([...guesses]);
    }
  };

  const checkWord = () => {
    const word = guesses[currentAttempt];
    if (word.length != 5) return; // won't accept the answer if it isn't actually 5 characters.

    console.log("Current Word:", guesses[currentAttempt]);
    for (let i = 0; i < maxCharacter; i++) {
      let c = word[i];
      if (correctAnswer[i] === c) {
        hints[currentAttempt][i] = 2;
        charStatus[c] = 2;
      } else if (correctAnswer.includes(c)) {
        hints[currentAttempt][i] = 1;
        charStatus[c] = 1;
      } else {
        charStatus[c] = 4;
      }
    }
    setCurrentAttempt(currentAttempt + 1);
    setHints([...hints]);
    setCharStatus({ ...charStatus });
  };

  return (
    <div
      className="grid grid-rows-1 place-content-center  text-center"
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <h1 className="text-3xl font-bold underline m-2">Wordle!</h1>
      <GamePanel guesses={guesses} hints={hints} />
      <Keyboard checkWord={checkWord} charStatus={charStatus} />
    </div>
  );
}

export default App;
