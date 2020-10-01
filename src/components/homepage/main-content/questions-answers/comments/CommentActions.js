import React, { useCallback, useState } from "react";
import { Upvote, Options, Downvote, Reply } from "../../../../../assets";
import Menu from "../../../../utilities/Menu";
import Tooltip from "../../../../utilities/Tooltip";
import "../../../../styles/homepage/main-content/questions-answers/comments/comment-actions.css";

export default function CommentActions({ state, functions, numOfUpvotes }) {
  let [isOptionsActive, setOptions] = useState(false);

  let { userDownvoted, userUpvoted } = state;

  let { upvoteComment, downvoteComment } = functions;

  const toggleOptions = useCallback(() => {
    setOptions(!isOptionsActive);
  }, [setOptions, isOptionsActive]);

  return (
    <div className="qla-comment-actions">
      <div className="qla-action-set-one">
        <Tooltip text="Upvote" marginLeft="-35px">
          <span
            onClick={upvoteComment}
            className={userUpvoted ? "qla-upvote upvoted" : "qla-upvote"}
          >
            <Upvote />
            Upvote
            {numOfUpvotes > 0 ? <> &middot; {numOfUpvotes}</> : null}
          </span>
        </Tooltip>

        <Tooltip text="Reply" marginLeft="-31px">
          <span className="qla-share">
            <Reply />
            Reply
          </span>
        </Tooltip>
      </div>
      <div className="qla-action-set-two">
        <Tooltip text="Downvote" marginLeft="-45px">
          <span
            onClick={downvoteComment}
            className={
              userDownvoted ? "qla-downvote downvoted" : "qla-downvote"
            }
          >
            <Downvote />
          </span>
        </Tooltip>

        <Tooltip active={isOptionsActive} text="More" marginLeft="-31px">
          {isOptionsActive && (
            <Menu
              width="100px"
              position={{ bottom: "79%", right: "-58%" }}
              items={["Report"]}
              toggle={toggleOptions}
            />
          )}
          <span
            onClick={toggleOptions}
            className={
              isOptionsActive ? "qla-options activated" : "qla-options"
            }
          >
            <Options />
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
