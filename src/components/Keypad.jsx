import React, { useEffect, useState } from "react";
import JSONletters from "../data/letter.json";

export default function Keypad({ usedKeys, handleKeyUp }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    setLetters(JSONletters.letters);
  }, []);

  return (
    <div className="keypad"               
    >
      {letters &&
        letters.map((l) => {
          const smallKey = l.key.toLowerCase();
          const color = usedKeys[smallKey];
          return (
            <div
              key={l.key}
              className={color}
              onClick={() => handleKeyUp(l)}
            >
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
