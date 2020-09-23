import React from "react";
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
  let {
    isExcerpt,
    userUpvoted,
    numOfUpvotes,
    numOfShares,
    isSharingVisible,
    isOptionsVisible,
  } = state;
  let {
    upvoteAnswer,
    downvoteAnswer,
    toggleOptions,
    toggleSharing,
  } = functions;
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
          <span className="qla-comment">
            <Comment />5
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
          {isSharingVisible && (
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
            />
          )}
          <span
            onClick={toggleSharing}
            tabIndex="0"
            onBlur={toggleSharing}
            className={
              isSharingVisible ? "qla-more-share activated" : "qla-more-share"
            }
          >
            <MoreSharing />
          </span>
        </Tooltip>
        <Tooltip text="More" marginLeft="-31px">
          {isOptionsVisible && (
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
            />
          )}
          <span
            onClick={toggleOptions}
            tabIndex="1"
            onBlur={toggleOptions}
            className={
              isOptionsVisible ? "qla-options activated" : "qla-options"
            }
          >
            <Options />
          </span>
        </Tooltip>
      </div>
    </div>
  );
}
