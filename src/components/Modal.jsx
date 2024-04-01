import React from "react";

const Modal = ({ isCorrect, solution, turn }) => {
  return (
    <div className="modal">
      {isCorrect && <div>Great</div>}

      {!isCorrect && turn > 5 && <div>{solution}</div>}
    </div>
  );
};

export default Modal;
