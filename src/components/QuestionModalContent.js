import React, { useState, useContext } from "react";
import { CloseButton, userAvatar, Link } from "../assets";
import { MainContext } from "../context/MainContext";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import "../components/styles/question-modal-content.css";

export default function QuestionModalContent() {
  const [activeTab, setActiveTab] = useState("question");
  const [questionInfo, setQuestionInfo] = useState("");
  const [linkInfo, setLinkInfo] = useState("");
  const [postError, setPostError] = useState(false);
  const { setModal } = useContext(MainContext);

  const handleSubmit = () => {
    if (questionInfo.length > 30) {
      let db = firebase.firestore();
      let postID = `qla-${uuid()}`;
      db.collection("questions-answers").doc(postID).set({
        type: "question",
        numOfFollows: 1,
        id: postID,
        question: questionInfo,
      });

      setQuestionInfo("");
      setModal(false);
    } else {
      setPostError(true);
      setTimeout(() => {
        setPostError(false);
      }, 5000);
    }
  };

  return (
    <div className="qla-question-modal-content">
      {postError && (
        <p className="qla-question-error">
          This question needs more detail. Add more information to ask a clear
          question, written as a complete sentence.
        </p>
      )}
      <div className="qla-qmc-header">
        <ul>
          <li
            onClick={() => setActiveTab("question")}
            className={
              activeTab.indexOf("question") > -1 ? "qmc-active-tab" : undefined
            }
          >
            Add Question
          </li>
          <li
            onClick={() => setActiveTab("link")}
            className={
              activeTab.indexOf("link") > -1 ? "qmc-active-tab" : undefined
            }
          >
            Share Link
          </li>
        </ul>
        <div className="qla-close-modal" onClick={() => setModal(false)}>
          <CloseButton />
        </div>
      </div>
      <div className="qla-qmc-content">
        <div className="qla-logged-user">
          <img src={userAvatar} alt="user avatar" />
          Naser Mohd Baig{" "}
          {activeTab.indexOf("question") > -1 ? "asked" : "shared"}
        </div>
        {activeTab.indexOf("question") > -1 ? (
          <>
            <div className="qla-question-input">
              <textarea
                onChange={(e) => setQuestionInfo(e.target.value)}
                value={questionInfo}
                placeholder='Start your question with "What", "How", "Why", etc.'
              />
            </div>
            <div className="qla-optional-link">
              <Link />
              <input
                type="text"
                placeholder="Optional: include a link that gives context"
              />
            </div>
          </>
        ) : (
          <>
            <div className="qla-link-info">
              <textarea
                onChange={(e) => setLinkInfo(e.target.value)}
                value={linkInfo}
                placeholder="Say something about this..."
              />
              <span className="qla-counter">{250 - linkInfo.length}</span>
            </div>
            <div className="qla-link-input">
              <Link />
              <input type="text" placeholder="Enter a link" />
            </div>
          </>
        )}
      </div>
      <div className="qla-qmc-footer">
        <ul>
          <li>Cancel</li>
          <li onClick={handleSubmit} className="qla-qmc-add">
            {activeTab.indexOf("question") > -1 ? "Add Question" : "Share Link"}
          </li>
        </ul>
      </div>
    </div>
  );
}
