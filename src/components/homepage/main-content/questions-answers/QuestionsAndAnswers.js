import React, { PureComponent } from "react";
import { CloseButton } from "../../../../assets";
import Tooltip from "../../../utilities/Tooltip";
import AnswerHidden from "./AnswerHidden";
import AnswerDownvoted from "./AnswerDownvoted";
import AnswerActions from "./AnswerActions";
import "../../../styles/homepage/main-content/questions-answers/questions-answers.css";

export default class QuestionsAndAnswers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isExcerpt: true,
      isHidden: false,
      isOptionsVisible: false,
      isSharingVisible: false,
      userDownvoted: false,
      userUpvoted: false,
      numOfUpvotes: 0,
      numOfShares: 0,
    };
  }

  //Will be used once the app is connected to Firebase

  // static getDerivedStateFromProps(props, state) {
  //   let finalState = {};
  //   if (props.data.upvotes !== state.numOfUpvotes) {
  //     finalState.numOfUpvotes = props.data.upvotes;
  //   }
  //   if (props.data.shares !== state.numOfShares) {
  //     finalState.numOfShares = props.data.shares;
  //   }
  //   return finalState;
  // }

  showFullPost = () => {
    this.setState({
      isExcerpt: false,
    });
  };

  hideStory = () => {
    this.setState((state) => ({
      isHidden: !state.isHidden,
    }));
  };

  downvoteAnswer = () => {
    if (this.state.userUpvoted) {
      this.setState((state) => ({
        userUpvoted: false,
        isHidden: false,
        numOfUpvotes: state.numOfUpvotes - 1,
        userDownvoted: !state.userDownvoted,
      }));
    } else {
      this.setState((state) => ({
        isHidden: false,
        userDownvoted: !state.userDownvoted,
      }));
    }
  };

  upvoteAnswer = () => {
    if (!this.state.userUpvoted) {
      this.setState((state) => ({
        userUpvoted: true,
        numOfUpvotes: state.numOfUpvotes + 1,
      }));
    } else {
      this.setState((state) => ({
        userUpvoted: false,
        numOfUpvotes: state.numOfUpvotes - 1,
      }));
    }
  };

  toggleOptions = () => {
    this.setState((state) => ({
      isOptionsVisible: !state.isOptionsVisible,
      isSharingVisible: false,
    }));
  };

  toggleSharing = () => {
    this.setState((state) => ({
      isSharingVisible: !state.isSharingVisible,
      isOptionsVisible: false,
    }));
  };

  render() {
    let { isExcerpt, isHidden, userDownvoted } = this.state;
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
              <div className="qla-answer">{data.answerMarkup()}</div>
            )}
            <AnswerActions
              state={this.state}
              functions={{
                upvoteAnswer: this.upvoteAnswer,
                downvoteAnswer: this.downvoteAnswer,
                toggleSharing: this.toggleSharing,
                toggleOptions: this.toggleOptions,
              }}
            />
          </div>
        )}
      </>
    );
  }
}
