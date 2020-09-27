import React, { PureComponent } from "react";
import CommentActions from "./CommentActions";
import "../../../../styles/homepage/main-content/questions-answers/comments/comment.css";

export default class Comment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userDownvoted: false,
      userUpvoted: false,
      numOfUpvotes: 0,
    };
  }
  upvoteComment = () => {
    if (!this.state.userUpvoted) {
      this.setState((state) => ({
        userUpvoted: true,
        userDownvoted: false,
        numOfUpvotes: state.numOfUpvotes + 1,
      }));
    } else {
      this.setState((state) => ({
        userUpvoted: false,
        numOfUpvotes: state.numOfUpvotes - 1,
      }));
    }
  };
  downvoteComment = () => {
    if (this.state.userUpvoted) {
      this.setState((state) => ({
        userUpvoted: false,
        numOfUpvotes: state.numOfUpvotes - 1,
        userDownvoted: !state.userDownvoted,
      }));
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
