export default function Keypad({ usedKeys, handleKeyUp }) {
  const getColor = (key) => {
    const smallKey = key.toLowerCase();
    return usedKeys[smallKey];
  };

  const Rows = {
    firstRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    secondRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    thirdRow: ["Enter", "z", "x", "c", "v", "b", "n", "m", "⌫"],
  };
  return (
    <div className="keypad">
      <div>
        {Rows.firstRow.map((key) => (
          <div
            className={`keypad-button ${getColor(key)}`}
            key={key}
            onClick={() => handleKeyUp({ key })}
          >
            {key.toUpperCase()}
          </div>
        ))}
      </div>
      <div>
        {Rows.secondRow.map((key) => (
          <div
            className={`keypad-button ${getColor(key)}`}
            key={key}
            onClick={() => handleKeyUp({ key })}
          >
            {key.toUpperCase()}
          </div>
        ))}
      </div>
      <div>
        {Rows.thirdRow.map((key) => (
          <div
            className={
              key === "Enter" || key === "Backspace"
                ? "keypad-special"
                : `keypad-button ${getColor(key)}`
            }
            key={key}
            onClick={() => handleKeyUp({ key })}
          >
            {key.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
}
