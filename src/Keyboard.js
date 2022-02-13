import React from "react";
const hintColours = {
  0: "gray",
  1: "yellow",
  2: "green",
  4: "black",
};
export default function Keyboard({ checkWord, charStatus }) {
  const charList = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  return (
    <div className="grid grid-cols-9 grid-rows-3 place-content-center">
      {charList.map((c, i) => (
        <CharKey key={i} charKey={c} keyColour={charStatus[c]} />
      ))}
      <button
        onClick={checkWord}
        className="border-[1px] border-gray-50 text-center m-[1px]"
      >
        🚀
      </button>
    </div>
  );
}

function CharKey({ charKey, keyColour }) {
  console.log(charKey, hintColours[keyColour])
  return (
    <button
      className="border-[1px] border-gray-50 text-center m-[1px]"
      style={{
        backgroundColor: charKey === " " ? "gray" : hintColours[keyColour],
      }}
    >
      {charKey.toUpperCase()}
    </button>
  );
}
