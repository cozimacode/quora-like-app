import React, { PureComponent } from "react";
import QuestionActions from "./questions-answers/QuestionActions";
import "../../styles/homepage/main-content/you-recently-asked.css";

export default class YouRecentlyAsked extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userFollowed: true,
      numOfFollows: 1,
    };
  }

  followQuestion = () => {
    if (this.state.userFollowed) {
      this.setState((state) => ({
        userFollowed: !state.userFollowed,
        numOfFollows: state.numOfFollows - 1,
      }));
    } else {
      this.setState((state) => ({
        userFollowed: !state.userFollowed,
        numOfFollows: state.numOfFollows + 1,
      }));
    }
  };
  render() {
    let { data } = this.props;
    return (
      <div className="qla-recently-asked">
        <span className="qla-topic">You asked</span>
        <p className="qla-question">{data.question}</p>
        <QuestionActions
          state={this.state}
          functions={{ followQuestion: this.followQuestion }}
        />
      </div>
    );
  }
}
