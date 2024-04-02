import React from "react";

const Modal = ({ isCorrect, solution, turn, wordNotInList }) => {
  return (
    <div className="modal">
      {isCorrect && <div>Great</div>}
      {wordNotInList && <div>Word Not In List</div>}
      {!isCorrect && turn > 5 && <div>{solution}</div>}
    </div>
  );
};

export default Modal;
