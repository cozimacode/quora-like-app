import React from "react";
import { RightArrow } from "../../../../assets";

export default function AnswerDownvoted({ userName, downvoteAnswer }) {
  return (
    <div className="qla-answer-downvoted">
      <div className="qla-undo-downvote">
        <span>You downvoted this answer</span>
        <span>Downvoting low-quality content improves Quora for everyone.</span>
        <button onClick={downvoteAnswer}>Undo</button>
      </div>

      <ul>
        <li>
          Report <RightArrow />
        </li>
        <li>
          Mute {userName} <RightArrow />
        </li>
      </ul>
    </div>
  );
}
