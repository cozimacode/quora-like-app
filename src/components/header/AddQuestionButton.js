import React, { useContext, useCallback } from "react";
import { MainContext } from "../../context/MainContext";

export default function AddQuestionButton() {
  const { setModal } = useContext(MainContext);
  const addQuestion = useCallback(() => setModal(true), [setModal]);

  return (
    <div className="qla-add-question">
      <button onClick={addQuestion}>Add Question</button>
    </div>
  );
}
