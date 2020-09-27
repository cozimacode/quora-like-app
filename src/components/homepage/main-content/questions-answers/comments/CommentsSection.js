import React, { useState } from "react";
import Comment from "./Comment";
import { userAvatar } from "../../../../../assets";
import "../../../../styles/homepage/main-content/questions-answers/comments/comments-section.css";

export default function CommentsSection({ comments }) {
  let [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="qla-comments-section">
      <div className="qla-add-comment">
        <img src={userAvatar} alt="logged user" />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add a comment..."
          value={comment}
        />
        <button className={comment ? "active" : undefined}>Add Comment</button>
      </div>
      <div className="qla-comments-list">
        {comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}
