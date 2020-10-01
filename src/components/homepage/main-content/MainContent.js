import React, { useEffect, useState } from "react";
import PostQuestion from "../PostQuestion";
import firebase from "firebase";
import QuestionsAndAnswers from "./questions-answers/QuestionsAndAnswers";
import "../../styles/homepage/main-content/main-content.css";
import YouRecentlyAsked from "./YouRecentlyAsked";

export default function MainContent() {
  let [sampleData, setSampleData] = useState(null);
  let [loading, setLoading] = useState(true);
  let db = firebase.firestore();

  useEffect(() => {
    let listener = db
      .collection("questions-answers")
      .onSnapshot(function (querySnapshot) {
        let sampleData = [];
        querySnapshot.forEach(function (doc) {
          sampleData.unshift(doc.data());
        });
        setSampleData(sampleData);
        setLoading(false);
      });
    return () => listener(); // to remove the realtime db collection listener on unmount
  }, []);

  return (
    <div className="qla-main-content">
      <PostQuestion />
      {loading ? (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        sampleData?.map((data) =>
          data.type === "question" ? (
            <YouRecentlyAsked key={data.id} data={data} />
          ) : (
            <QuestionsAndAnswers key={data.id} data={data} />
          )
        )
      )}
    </div>
  );
}
