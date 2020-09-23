import React from "react";
import { RightArrow } from "../../../../assets";

export default function AnswerHidden({ hideStory, downvoteAnswer }) {
  return (
    <div className="qla-content-hidden">
      <div className="qla-undo-hide">
        <span>You have hidden this story</span>
        <button onClick={hideStory}>Undo</button>
      </div>

      <ul>
        <li onClick={downvoteAnswer}>
          Downvote Answer <RightArrow />
        </li>
        <li>
          Report <RightArrow />
        </li>
      </ul>
    </div>
  );
}
