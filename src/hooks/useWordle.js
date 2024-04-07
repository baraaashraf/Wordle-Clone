import { useState } from "react";
import solutions from "../data/solutions.json";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setisCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [wordNotInList, setWordNotInList] = useState(false);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setisCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prev) => {
      return [...prev, currentGuess];
    });

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };
      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];

        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }
        if (l.color === "grey" && currentColor !== ("green" && "yellow")) {
          newKeys[l.key] = "grey";
          return;
        }
      });

      return newKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyUp = ({ key }) => {
    setWordNotInList(false);
    if (key === "Enter") {
      if (turn > 5) {
        return;
      }
      if (currentGuess.length !== 5) {
        console.log("Word must be 5 characters long");
        return;
      }

      if (!solutions.words.some((obj) => obj.word === currentGuess)) {
        setWordNotInList(true);
        console.log("Word Not in List");
        return;
      }
      if (history.includes(currentGuess)) {
        console.log("word already tried");
        return;
      }

      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (key === "⌫" || key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key
        });
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKeyUp,
    usedKeys,
    wordNotInList,
  };
};

export default useWordle;
