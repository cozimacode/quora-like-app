import React, { PureComponent } from "react";
import { CloseButton } from "../../../../assets";
import Tooltip from "../../../utilities/Tooltip";
import AnswerHidden from "./AnswerHidden";
import AnswerDownvoted from "./AnswerDownvoted";
import AnswerActions from "./AnswerActions";
import CommentsSection from "./comments/CommentsSection";
import parse from "html-react-parser";
import firebase from "firebase";
import "../../../styles/homepage/main-content/questions-answers/questions-answers.css";

export default class QuestionsAndAnswers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isExcerpt: true,
      isHidden: false,
      userDownvoted: false,
      userUpvoted: false,
      showComments: false,
      numOfComments: props.data.comments.length,
    };
  }

  showFullPost = () => {
    this.setState({
      isExcerpt: false,
    });
  };

  toggleComments = () => {
    this.setState((state) => ({
      showComments: !state.showComments,
    }));
  };

  updateCommentCount = (arrayLength) => {
    this.setState({
      numOfComments: arrayLength,
    });
  };

  hideStory = () => {
    this.setState((state) => ({
      isHidden: !state.isHidden,
    }));
  };

  downvoteAnswer = () => {
    let db = firebase.firestore();
    let { id } = this.props.data;

    if (this.state.userUpvoted) {
      this.setState((state) => ({
        userUpvoted: false,
        isHidden: false,
        userDownvoted: !state.userDownvoted,
      }));

      db.collection("questions-answers")
        .doc(id)
        .update({
          upvotes: firebase.firestore.FieldValue.increment(-1),
        });
    } else {
      this.setState((state) => ({
        isHidden: false,
        userDownvoted: !state.userDownvoted,
      }));
    }
  };

  upvoteAnswer = () => {
    let db = firebase.firestore();
    let { id } = this.props.data;

    if (!this.state.userUpvoted) {
      this.setState({
        userUpvoted: true,
      });

      db.collection("questions-answers")
        .doc(id)
        .update({
          upvotes: firebase.firestore.FieldValue.increment(1),
        });
    } else {
      this.setState({
        userUpvoted: false,
      });

      db.collection("questions-answers")
        .doc(id)
        .update({
          upvotes: firebase.firestore.FieldValue.increment(-1),
        });
    }
  };

  render() {
    let {
      isExcerpt,
      isHidden,
      userDownvoted,
      showComments,
      numOfComments,
    } = this.state;
    let { data } = this.props;
    return (
      <>
        {isHidden ? (
          <AnswerHidden
            hideStory={this.hideStory}
            downvoteAnswer={this.downvoteAnswer}
          />
        ) : userDownvoted ? (
          <AnswerDownvoted
            downvoteAnswer={this.downvoteAnswer}
            userName={data.userName}
          />
        ) : (
          <>
            <div className="qla-questions-answers">
              <div className="qla-topic">
                <span>Answer &middot; {data.topic}</span>
                <button onClick={this.hideStory}>
                  <Tooltip text="Hide" marginLeft="-23px">
                    <CloseButton />
                  </Tooltip>
                </button>
              </div>
              <div className="qla-poster">
                <img src={data.userAvatar} alt="user avatar" />
                <div className="qla-user-intro">
                  <span className="qla-user-name">{data.userName}</span>
                  <span className="qla-user-bio">{data.userBio}</span>
                </div>
              </div>
              <p className="qla-question">{data.question}</p>
              {isExcerpt ? (
                <div onClick={this.showFullPost} className="qla-excerpt">
                  <p>
                    {data.answerExcerpt}
                    <span onClick={this.showFullPost}>(more)</span>
                  </p>
                  <img
                    className="qla-image"
                    src={data.featuredImage}
                    alt={data.featuredImageAlt}
                  />
                </div>
              ) : (
                <div className="qla-answer">{parse(data.answerMarkup)}</div>
              )}
              <AnswerActions
                state={this.state}
                stats={{
                  numOfUpvotes: data.upvotes,
                  numOfComments,
                  numOfShares: data.shares,
                }}
                functions={{
                  upvoteAnswer: this.upvoteAnswer,
                  downvoteAnswer: this.downvoteAnswer,
                  toggleComments: this.toggleComments,
                }}
              />
            </div>
            {showComments && (
              <CommentsSection
                postID={data.id}
                comments={data.comments}
                updateCommentCount={this.updateCommentCount}
              />
            )}
          </>
        )}
      </>
    );
  }
}
