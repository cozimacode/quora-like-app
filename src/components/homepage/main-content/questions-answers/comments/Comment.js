import React, { PureComponent } from "react";
import CommentActions from "./CommentActions";
import firebase from "firebase";
import "../../../../styles/homepage/main-content/questions-answers/comments/comment.css";

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userDownvoted: false,
      userUpvoted: false,
    };
  }
  upvoteComment = () => {
    let db = firebase.firestore();
    let { postID, data } = this.props;

    if (!this.state.userUpvoted) {
      this.setState({
        userUpvoted: true,
        userDownvoted: false,
      });

      db.collection("questions-answers")
        .doc(postID)
        .collection("comments")
        .doc(data.id)
        .update({
          upvotes: firebase.firestore.FieldValue.increment(1),
        });
    } else {
      this.setState({
        userUpvoted: false,
      });

      db.collection("questions-answers")
        .doc(postID)
        .collection("comments")
        .doc(data.id)
        .update({
          upvotes: firebase.firestore.FieldValue.increment(-1),
        });
    }
  };
  downvoteComment = () => {
    let db = firebase.firestore();
    let { postID, data } = this.props;

    if (this.state.userUpvoted) {
      this.setState((state) => ({
        userUpvoted: false,
        userDownvoted: !state.userDownvoted,
      }));

      db.collection("questions-answers")
        .doc(postID)
        .collection("comments")
        .doc(data.id)
        .update({
          upvotes: firebase.firestore.FieldValue.increment(-1),
        });
    } else {
      this.setState((state) => ({
        userDownvoted: !state.userDownvoted,
      }));
    }
  };
  render() {
    let { data } = this.props;
    return (
      <div className="qla-single-comment">
        <img className="qla-commenter" src={data.avatar} alt="commenter" />
        <div className="qla-comment-details">
          <span>{data.name}</span>
          <p>{data.comment}</p>
          <CommentActions
            state={this.state}
            numOfUpvotes={data.upvotes}
            functions={{
              upvoteComment: this.upvoteComment,
              downvoteComment: this.downvoteComment,
            }}
          />
        </div>
      </div>
    );
  }
}
