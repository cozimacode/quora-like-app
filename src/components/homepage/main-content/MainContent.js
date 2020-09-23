import React from "react";
import PostQuestion from "../PostQuestion";
import QuestionsAndAnswers from "./questions-answers/QuestionsAndAnswers";
import { sampleData } from "../../../data/questions-and-answers";
import "../../styles/homepage/main-content/main-content.css";

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
