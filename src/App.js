import { useState } from "react";
import "./styles.css";

const emojiDatabase = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "🫠": "Melting Face",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "🥲": "Smiling Face with Tear",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "❤️‍🩹": "Mending Heart",
  "❤️": "Red Heart"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function handleOnChange(event) {
    let userInput = event.target.value;
    let emojiMeaning = emojiDatabase[userInput];

    if (emojiMeaning !== undefined) {
      setMeaning(emojiMeaning);
    } else {
      setMeaning("This emoji is not in database");
    }
  }

  function handleOnClick(event) {
    let userInput = event.target.innerText;
    let emojiMeaning = emojiDatabase[userInput];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <h2>Put a single emoji in input and see its meaning!</h2>
      <input
        placeholder="Type or paste your emoji here..."
        onChange={handleOnChange}
      ></input>
      <div className="meaning">{meaning}</div>
      <div className="supported">
        <div className="supported-text">Supported Emoji's</div>
        <div className="supported-emoji">
          {Object.keys(emojiDatabase).map((emoji) => {
            return (
              <span
                key={emoji}
                onClick={handleOnClick}
                style={{
                  fontSize: "2rem",
                  padding: "0 0.5rem",
                  cursor: "pointer"
                }}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
