import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Intermediate.css";
import { Banner } from "../components/Banner";
import { ScoreKeeper } from "../components/ScoreKeeper";

export const Intermediate = () => {
  const [beginnerQuestions, setBeginnerQuestions] = useState([
    {
      question: 0,
      answer: "zoo",
      counter: 0,
      key: 0,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 1,
      answer: "ale",
      counter: 0,
      key: 1,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 2,
      answer: "hen",
      counter: 0,
      key: 2,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 3,
      answer: "ham",
      counter: 0,
      key: 3,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 4,
      answer: "war",
      counter: 0,
      key: 4,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 5,
      answer: "hive",
      counter: 0,
      key: 5,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 6,
      answer: "bee",
      counter: 0,
      key: 6,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 7,
      answer: "tea",
      counter: 0,
      key: 7,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 8,
      answer: "shoe",
      counter: 0,
      key: 8,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 9,
      answer: "goo",
      counter: 0,
      key: 9,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 10,
      answer: "lice",
      counter: 0,
      key: 10,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 11,
      answer: "lily",
      counter: 0,
      key: 11,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 12,
      answer: "line",
      counter: 0,
      key: 12,
      counterChecker: ["", "", "", "", ""],
      isHidden: "",
    },
    {
      question: 13,
      answer: "lime",
      counter: 0,
      key: 13,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 14,
      answer: "lorry",
      counter: 0,
      key: 14,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 15,
      answer: "laugh",
      counter: 0,
      key: 15,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 16,
      answer: "lip",
      counter: 0,
      key: 16,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 17,
      answer: "light",
      counter: 0,
      key: 17,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 18,
      answer: "ledge",
      counter: 0,
      key: 18,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 19,
      answer: "leg",
      counter: 0,
      key: 19,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 20,
      answer: "nose",
      counter: 0,
      key: 20,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 21,
      answer: "nail",
      counter: 0,
      key: 21,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 22,
      answer: "nanny",
      counter: 0,
      key: 22,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 23,
      answer: "gnome",
      counter: 0,
      key: 23,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 24,
      answer: "Nero",
      counter: 0,
      key: 24,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 25,
      answer: "knife",
      counter: 0,
      key: 25,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 26,
      answer: "nob",
      counter: 0,
      key: 26,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 27,
      answer: "knife",
      counter: 0,
      key: 27,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 28,
      answer: "notch",
      counter: 0,
      key: 28,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 29,
      answer: "nag",
      counter: 0,
      key: 29,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 30,
      answer: "moss",
      counter: 0,
      key: 30,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 31,
      answer: "mail",
      counter: 0,
      key: 31,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 32,
      answer: "money",
      counter: 0,
      key: 32,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 33,
      answer: "mum",
      counter: 0,
      key: 33,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 34,
      answer: "merry",
      counter: 0,
      key: 34,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 35,
      answer: "muff",
      counter: 0,
      key: 35,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 36,
      answer: "map",
      counter: 0,
      key: 36,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
    },
    {
      question: 37,
      answer: "mat",
      counter: 0,
      key: 37,
      counterChecker: ["", "", "", "", ""],
      isHidden: "none",
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
        <div className="left-side">
          <div className="card-logo">
            <img
              className="heart-5"
              src="/assets/images/cards/heart_5.png"
              alt=""
            />
            <img
              className="spade-2"
              src="/assets/images/cards/spade_2.png"
              alt=""
            />
          </div>
        </div>
        <div className="middle">
          <Banner />
          <div className="display">{currentQuestion}</div>
          <form className="answer-form" onSubmit={(e) => onSubmit(e)}>
            <input
              className="answer-input"
              type="text"
              name="answer"
              value={guess}
              onChange={(e) => onChange(e)}
            />
            <input className="answer-button" type="submit" value="guess" />
          </form>
          <div className="correct-or-incorrect">{correctOrIncorrect}</div>
          {/* <div className="containerProgressBar">
          {Object.entries(beginnerQuestions).map(function (letter) {
            console.log(letter[1].counter);
            return <ProgressBar counter={letter[1].counter} />;
          })}
        </div> */}
        </div>
        <div className="right-side">
          <ScoreKeeper {...beginnerQuestions} />
        </div>
      </section>
    </Fragment>
  );
};

export default Intermediate;
