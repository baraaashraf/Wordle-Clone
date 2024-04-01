import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";
import { useState } from "react";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyUp, guesses, turn, isCorrect, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (isCorrect) {
      setTimeout(()=>{
        setShowModal(true)
      },2000)
      window.removeEventListener("keyup", handleKeyUp);
    }
    if (turn > 5) {
      setTimeout(()=>{
        setShowModal(true)
      },2000)
      window.removeEventListener("keyup", handleKeyUp);
    }
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp, isCorrect, turn]);

  return (
    <>
      {/* <div>solution - {solution}</div>
      <div>{turn}</div>
      <div>currentGuess:{currentGuess}</div> */}
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
      <Keypad usedKeys={usedKeys} />
      {showModal && (
        <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
      )}
    </>
  );
};

export default Wordle;
