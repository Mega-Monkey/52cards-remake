import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Beginner.css";
import { Banner } from "../components/Banner";
import { ScoreKeeper } from "../components/ScoreKeeper";

export const Beginner = () => {
  const [beginnerQuestions, setBeginnerQuestions] = useState([
    {
      question: 0,
      answer: "s z",
      counter: 0,
      key: 0,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 1,
      answer: "l",
      counter: 0,
      key: 1,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 2,
      answer: "n",
      counter: 0,
      key: 2,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 3,
      answer: "m",
      counter: 0,
      key: 3,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 4,
      answer: "r",
      counter: 0,
      key: 4,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 5,
      answer: "f v",
      counter: 0,
      key: 5,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 6,
      answer: "b p",
      counter: 0,
      key: 6,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 7,
      answer: "t",
      counter: 0,
      key: 7,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 8,
      answer: "sh ch",
      counter: 0,
      key: 8,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 9,
      answer: "g",
      counter: 0,
      key: 9,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
  ]);

  const [userInput, setUserInput] = useState({
    guess: "",
  });

  const [currentQuestionsArray, setCurrentQuestionsArray] = useState([
    0,
    1,
    2,
    3,
    4,
  ]);

  const [correctOrIncorrect, setCorrectOrIncorrect] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { guess } = userInput;

  const checkIfcurrentQuestionsHaveReachCounterFiveAndUpdate = (array) => {
    let newQestions = [];

    array.forEach((elem) => {
      debugger;
      if (elem.counter >= 5 || newQestions.length >= 5) {
        return;
      } else {
        newQestions.push(elem.question);
      }
    });
    // console.log(newQestions);
    setCurrentQuestionsArray(newQestions);
  };

  const selectNewQuestionFromCurrentQuestions = () =>
    setCurrentQuestion(currentQuestionsArray[Math.floor(Math.random() * 5)]);

  const checkIfGuessIsCorrect = () => {
    let waitTime = 1000;
    if (guess.trim() === beginnerQuestions[currentQuestion].answer) {
      let copyBeginnerQuestions = beginnerQuestions;

      copyBeginnerQuestions[currentQuestion].counterChecker[
        copyBeginnerQuestions[currentQuestion].counter
      ] = "visible";

      copyBeginnerQuestions[currentQuestion].counter =
        copyBeginnerQuestions[currentQuestion].counter + 1;

      setBeginnerQuestions(copyBeginnerQuestions);

      checkIfcurrentQuestionsHaveReachCounterFiveAndUpdate(beginnerQuestions);

      selectNewQuestionFromCurrentQuestions();

      setUserInput({ guess: "" });

      setCorrectOrIncorrect("correct");

      setTimeout(() => {
        setCorrectOrIncorrect("");
      }, waitTime);
    } else {
      setCorrectOrIncorrect("incorrect");
      setTimeout(() => {
        setCorrectOrIncorrect("");
      }, waitTime);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkIfGuessIsCorrect();
  };

  const onChange = (e) => {
    setUserInput({ guess: e.target.value });
  };

  return (
    <Fragment>
      <section>
        <div className="left-side-b">
          <div className="card-logo-b">
            <img
              className="heart-5-b"
              src="/assets/images/cards/heart_5.png"
              alt=""
            />
            <img
              className="spade-2-b"
              src="/assets/images/cards/spade_2.png"
              alt=""
            />
          </div>
        </div>

        <div className="middle-b">
          <Banner />
          <div className="display-b">{currentQuestion}</div>
          <form className="answer-form-b" onSubmit={(e) => onSubmit(e)}>
            <input
              className="answer-input-b"
              type="text"
              name="answer"
              value={guess}
              onChange={(e) => onChange(e)}
            />
            <input className="answer-button-b" type="submit" value="guess" />
          </form>
          <div className="correct-or-incorrect-b">{correctOrIncorrect}</div>
          {/* <div className="containerProgressBar">
          {Object.entries(beginnerQuestions).map(function (letter) {
            console.log(letter[1].counter);
            return <ProgressBar counter={letter[1].counter} />;
          })}
        </div> */}
        </div>
        <div className="right-side-b">
          <ScoreKeeper {...beginnerQuestions} />
        </div>
      </section>
    </Fragment>
  );
};

export default Beginner;
