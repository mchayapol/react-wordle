import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";

const hintColours = {  
  0: "black",
  1: "yellow",
  2: "green",
  4: "black"
};

export default function GamePanel({ guesses,  hints }) {
  const maxAttempt = 5;
  // const [charStatus, setCharStatus] = useState([0,0,0,0,0])
  // const [charStatus, setCharStatus] = useState([0, 1, 2, 1, 0]);
  return (
    <div className="grid grid-rows-5 place-content-center m-2">
      {guesses.map((g, i) => (
        <TextPanel key={i} word={g} status={hints[i]} />
      ))}
    </div>
  );
}

function TextPanel({ word, status }) {
  let defaultWord = [" ", " ", " ", " ", " "];

  let wordArray = word.split("");
  wordArray = defaultWord.map((c, i) => {
    if (i < wordArray.length) return wordArray[i];
    else return c;
  });

  // if (wordArray.length === 0) wordArray = [" ", " ", " ", " ", " "];
  console.log(wordArray, wordArray.length);
  return (
    <div className="flex">
      {wordArray.map((c, i) => (
        <div
          key={i}
          className="text-center text-2xl w-[40px] h-[40px] border-2 border-white bg-gray-50"
          style={{
            backgroundColor:  hintColours[status[i]],
          }}
        >
          {c.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
