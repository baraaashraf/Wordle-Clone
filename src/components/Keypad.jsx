export default function Keypad({ usedKeys, handleKeyUp }) {
  const getColor = (key) => {
    const smallKey = key.toLowerCase();
    return usedKeys[smallKey];
  };
  return (
    <div className="keypad">
      <div>
        {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => (
          <div className={`keypad-button ${getColor(key)}`} key={key} onClick={() => handleKeyUp({ key })}>
            {key}
          </div>
        ))}
      </div>
      <div>
        {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => (
          <div className={`keypad-button ${getColor(key)}`} key={key} onClick={() => handleKeyUp({ key })}>
            {key}
          </div>
        ))}
      </div>
      <div>
        {["Backspace", "z", "x", "c", "v", "b", "n", "m", "Enter"].map(
          (key) => (
            <div className={key === "Enter" || key === "Backspace"? "keypad-special" : `keypad-button ${getColor(key)}`} key={key} onClick={() => handleKeyUp({ key })}>
              {key}
            </div>
          )
        )}
      </div>
    </div>
  );
}
