import React from "react";
import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🤣": "Laughing",
  "😡": "Angry",
  "😀": "Smiling",
  "🥶": "Freezing",
  "😵": "Confused",
  "😴": "Sleppy",
  "😎": "Cool",
  "👋": "Waving Hi",
  "😋": "Tasty",
  "🥳 ": "Congratulations"
};

let knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");

  function handleInputChange(event) {
    let userInput = event.target.value;
    var emoji = emojiDictionary[userInput];

    if (emoji === undefined) {
      emoji = "Sorry we don't have this in our database";
    }
    setEmoji(emoji);
  }

  function handleEmojiClick(emoji) {
    emoji = emojiDictionary[emoji];
    setEmoji(emoji);
  }

  return (
    <div className="App">
      <h1 style={{ marginTop: "2rem" }}>Find your emojis</h1>
      <p style={{ marginTop: "1.2rem", color: "yellow" }}>
        Either Paste or click them{" "}
      </p>
      <div style={{ marginBottom: "3rem", marginTop: "3rem" }}>
        <input
          size="50"
          style={{ height: "2rem" }}
          onChange={handleInputChange}
        />
        <h2>{emoji}</h2>
      </div>

      <h3>Emojis we know</h3>
      {knownEmojis.map((emoji) => (
        <span
          onClick={() => handleEmojiClick(emoji)}
          style={{ cursor: "pointer", fontSize: "2rem", padding: "2rem" }}
          key={emoji}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
