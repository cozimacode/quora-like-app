import React, { PureComponent } from "react";
import { CloseButton } from "../../assets";
import Tooltip from "../utilities/Tooltip";

export default class QuestionsAndAnswers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isExcerpt: true,
      isHidden: false,
    };
  }

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
  render() {
    let { isExcerpt, isHidden } = this.state;
    let { data } = this.props;
    return (
      <>
        {isHidden ? (
          <div className="qla-content-hidden">
            <div className="qla-undo-hide">
              <span>You have hidden this story</span>
              <button onClick={this.hideStory}>Undo</button>
            </div>

            <ul>
              <li>Downvote Answer</li>
              <li>Report</li>
            </ul>
          </div>
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
          </div>
        )}
      </>
    );
  }
}
