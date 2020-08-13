import React from "react";
import { Fragment, useState } from "react";
import "./ScoreKeeper.css";

export const ScoreKeeper = (props) => {
  return (
    <div>
      <div className="title-container">
        <div className="question-title">Question</div>
        <div className="score-title">Score</div>
      </div>
      <div className="question-score-sheet-container">
        <div className="question-sheet">
          {console.log(props)}
          {Object.entries(props).map(function (letter) {
            return (
              <div
                style={{ display: letter[1].isHidden }}
                className={"single-question"}
              >
                {" "}
                {letter[1].question}{" "}
              </div>
            );
          })}
        </div>
        <div className="score-sheet">
          {Object.entries(props).map(function (letter) {
            console.log(letter[1].counter);
            return (
              <div
                style={{ display: letter[1].isHidden }}
                className="score-counter-container"
              >
                <div
                  style={{
                    visibility: letter[1].counterChecker[0],
                  }}
                  className={"score-counter-" + letter[1].key + "-number-1"}
                >
                  ♠
                </div>
                <div
                  style={{
                    visibility: letter[1].counterChecker[1],
                  }}
                  className={"score-counter-" + letter[1].key + "-number-2"}
                >
                  ♣
                </div>
                <div
                  style={{
                    visibility: letter[1].counterChecker[2],
                  }}
                  className={"score-counter-" + letter[1].key + "-number-3"}
                >
                  ♥
                </div>
                <div
                  style={{
                    visibility: letter[1].counterChecker[3],
                  }}
                  className={"score-counter-" + letter[1].key + "-number-4"}
                >
                  ♦
                </div>
                <div
                  style={{
                    visibility: letter[1].counterChecker[4],
                  }}
                  className={"score-counter-" + letter[1].key + "-number-5"}
                >
                  🃏
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
