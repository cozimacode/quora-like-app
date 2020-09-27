import React, { useCallback, useState } from "react";
import {
  Upvote,
  Comment,
  Share,
  MoreSharing,
  Options,
  Downvote,
  Facebook,
  Twitter,
} from "../../../../assets";
import Menu from "../../../utilities/Menu";
import Tooltip from "../../../utilities/Tooltip";
import "../../../styles/homepage/main-content/questions-answers/answer-actions.css";

export default function AnswerActions({ state, functions }) {
  let [isSharingActive, setSharing] = useState(false);
  let [isOptionsActive, setOptions] = useState(false);

  let {
    isExcerpt,
    userUpvoted,
    numOfUpvotes,
    numOfShares,
    numOfComments,
    showComments,
  } = state;

  let { upvoteAnswer, downvoteAnswer, toggleComments } = functions;

  const toggleSharing = useCallback(() => {
    setSharing(!isSharingActive);
  }, [setSharing, isSharingActive]);

  const toggleOptions = useCallback(() => {
    setOptions(!isOptionsActive);
  }, [setOptions, isOptionsActive]);

  return (
    <div className={isExcerpt ? "qla-actions" : "qla-actions full-answer"}>
      <div className="qla-action-set-one">
        <Tooltip text="Upvote" marginLeft="-35px">
          <span
            onClick={upvoteAnswer}
            className={userUpvoted ? "qla-upvote upvoted" : "qla-upvote"}
          >
            <Upvote />
            {numOfUpvotes}
          </span>
        </Tooltip>

        <Tooltip text="Share" marginLeft="-31px">
          <span className="qla-share">
            <Share />
            {numOfShares}
          </span>
        </Tooltip>

        <Tooltip text="Comments" marginLeft="-47px">
          <span
            onClick={toggleComments}
            className={showComments ? "qla-comment activated" : "qla-comment"}
          >
            <Comment />
            {numOfComments}
          </span>
        </Tooltip>
      </div>
      <div className="qla-action-set-two">
        {!isExcerpt && (
          <Tooltip text="Downvote" marginLeft="-45px">
            <span onClick={downvoteAnswer} className="qla-downvote">
              <Downvote />
            </span>
          </Tooltip>
        )}

        <Tooltip text="More sharing options" marginLeft="-37px">
          {isSharingActive && (
            <Menu
              width="150px"
              position={{ bottom: "79%", right: "-115%" }}
              items={[
                <span>
                  <Facebook />
                  Facebook
                </span>,
                <span>
                  <Twitter />
                  Twitter
                </span>,
                "Copy Link",
                "Embed Answer",
              ]}
              toggle={toggleSharing}
            />
          )}
          <span
            onClick={toggleSharing}
            className={
              isSharingActive ? "qla-more-share activated" : "qla-more-share"
            }
          >
            <MoreSharing />
          </span>
        </Tooltip>
        <Tooltip text="More" marginLeft="-31px">
          {isOptionsActive && (
            <Menu
              width="200px"
              position={{ bottom: "79%", right: "-173%" }}
              items={[
                "Bookmark",
                "Suggest Edits",
                "Edit Question and Source",
                "Thank",
                "Downvote Answer",
                "Downvote Question",
                "Log",
                "Report",
              ]}
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
