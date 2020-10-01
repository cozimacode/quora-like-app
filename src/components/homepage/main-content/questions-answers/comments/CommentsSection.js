import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import { userAvatar } from "../../../../../assets";
import "../../../../styles/homepage/main-content/questions-answers/comments/comments-section.css";

export default function CommentsSection({ postID, updateCommentCount }) {
  let [inputValue, setCommentInput] = useState("");
  let [commentsData, setCommentsData] = useState(null);
  let [loading, setLoading] = useState(true);

  let db = firebase.firestore();

  useEffect(() => {
    let listener = db
      .collection("questions-answers")
      .doc(postID)
      .collection("comments")
      .onSnapshot(function (querySnapshot) {
        let commentsData = [];
        querySnapshot.forEach(function (doc) {
          commentsData.push(doc.data());
        });
        setCommentsData(commentsData);
        updateCommentCount(commentsData.length);
        setLoading(false);
      });
    return () => listener(); // to remove the realtime db collection listener on unmount
  }, []);

  const handleChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleSubmit = () => {
    let commentID = `com-${uuid()}`;

    db.collection("questions-answers")
      .doc(postID)
      .collection("comments")
      .doc(commentID)
      .set({
        id: commentID,
        name: "Naser Mohd Baig",
        avatar: userAvatar,
        comment: inputValue,
        upvotes: 0,
      });

    setCommentInput("");
  };

  return (
    <div className="qla-comments-section">
      <div className="qla-add-comment">
        <img src={userAvatar} alt="logged user" />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add a comment..."
          value={inputValue}
        />
        <button
          onClick={handleSubmit}
          disabled={inputValue.length < 1}
          className={inputValue ? "active" : undefined}
        >
          Add Comment
        </button>
      </div>
      <div className="qla-comments-list">
        {loading ? (
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          commentsData.map((comment) => (
            <Comment key={comment.id} postID={postID} data={comment} />
          ))
        )}
      </div>
    </div>
  );
}
