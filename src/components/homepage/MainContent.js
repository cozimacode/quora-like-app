import React from "react";
import PostQuestion from "./PostQuestion";
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import { sampleData } from "../../data/questions-and-answers";

export default function MainContent() {
  return (
    <div className="qla-main-content">
      <PostQuestion />
      {sampleData.map((data) => (
        <QuestionsAndAnswers key={data.id} data={data} />
      ))}
    </div>
  );
}
