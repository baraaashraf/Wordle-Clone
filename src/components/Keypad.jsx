import React, { useEffect, useState } from "react";
import JSONletters from "../data/letter.json";

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    console.log(JSONletters.letters)
    setLetters(JSONletters.letters);
  }, []);

  return (
    <div className="keypad">
      {letters &&
        letters.map((l) => {
          const smallKey = l.key.toLowerCase();
          const color = usedKeys[smallKey];
          return (
            <div key={l.key} className={color}>
              {l.key}
            </div>
          );
        })}
    </div>
  );
}
