import React, { useState, useCallback } from "react";
import {
  Follow,
  Request,
  MoreSharing,
  Options,
  Facebook,
  Twitter,
} from "../../../../assets";
import Menu from "../../../utilities/Menu";
import Tooltip from "../../../utilities/Tooltip";
import "../../../styles/homepage/main-content/questions-answers/question-actions.css";

export default function QuestionActions({ state, functions }) {
  let [isSharingActive, setSharing] = useState(false);
  let [isOptionsActive, setOptions] = useState(false);

  let { numOfFollows, userFollowed } = state;

  let { followQuestion } = functions;

  const toggleSharing = useCallback(() => {
    setSharing(!isSharingActive);
  }, [setSharing, isSharingActive]);

  const toggleOptions = useCallback(() => {
    setOptions(!isOptionsActive);
  }, [setOptions, isOptionsActive]);

  return (
    <div className="qla-actions">
      <div className="qla-action-set-one">
        <span
          onClick={followQuestion}
          className={userFollowed ? "qla-follow followed" : "qla-follow"}
        >
          <Follow />
          Follow
          {numOfFollows > 0 ? <> &middot; {numOfFollows}</> : null}
        </span>

        <span className="qla-request">
          <Request />
          Request
        </span>
      </div>
      <div className="qla-action-set-two">
        <Tooltip
          active={isSharingActive}
          text="Sharing options"
          marginLeft="-37px"
        >
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
        <Tooltip active={isOptionsActive} text="More" marginLeft="-31px">
          {isOptionsActive && (
            <Menu
              width="200px"
              position={{ bottom: "79%", right: "-173%" }}
              items={[
                "Answer Anonymously",
                "Answer Later",
                "Follow Privately",
                "Stop Edit Notifications",
                "Edit Topics",
                "Edit Question and Source",
                "Downvote Question",
                "Merge Questions",
                "View Stats and Log",
                "Delete",
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
