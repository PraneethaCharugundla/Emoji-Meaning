import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👓": "Glasses",
  "🎈": "Balloon",
  "🦷": "Tooth",
  "🐶": "Dog",
  "👀": "Eyes",
  "🌹": "Rose",
  "💎": "Diamond",
  "🧿": "Nazar",
  "🎵": "Music",
  "🔪": "Knife",
  "💊": "Pill"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <div id="container">
        <input onChange={emojiInputHandler} />

        <h2> {meaning} </h2>

        <h3>Emojis We Know </h3>

        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ font: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
