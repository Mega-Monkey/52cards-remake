import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Advanced.css";
import { Banner } from "../components/Banner";
import { ScoreKeeperAdvanced } from "../components/ScoreKeeperAdvanced";
import { MouseOverPopover } from "../components/MouseOverPopover"
import { CardDecoration } from "../components/CardDecoration";


export const Advanced = () => {
  const [questions, setQuestions] = useState([
    {
      questionDisplay: "Ace of Hearts",
      question: "/assets/images/cards/heart_2.png",
      answer: "love heart",
      counter: 0,
      key: 0,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "2 of Hearts",
      question: "/assets/images/cards/heart_3.png",
      answer: "lovers",
      counter: 0,
      key: 1,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "3 of Hearts",
      question: "/assets/images/cards/heart_4.png",
      answer: "home",
      counter: 0,
      key: 2,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "4 of Hearts",
      question: "/assets/images/cards/heart_5.png",
      answer: "hair",
      counter: 0,
      key: 3,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "5 of Hearts",
      question: "/assets/images/cards/heart_6.png",
      answer: "hoof",
      counter: 0,
      key: 4,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "6 of Hearts",
      question: "/assets/images/cards/heart_7.png",
      answer: "hoop",
      counter: 0,
      key: 5,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "7 of Hearts",
      question: "/assets/images/cards/heart_8.png",
      answer: "hat",
      counter: 0,
      key: 6,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "8 of Hearts",
      question: "/assets/images/cards/heart_9.png",
      answer: "hedge",
      counter: 0,
      key: 7,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "9 of Hearts",
      question: "/assets/images/cards/heart_10.png",
      answer: "hag",
      counter: 0,
      key: 8,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "10 of Hearts",
      question: "/assets/images/cards/heart_j.png",
      answer: "horse",
      counter: 0,
      key: 9,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "Jack of Hearts",
      question: "/assets/images/cards/heart_q.png",
      answer: "cupid",
      counter: 0,
      key: 10,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "Queen of Hearts",
      question: "/assets/images/cards/heart_k.png",
      answer: "bride",
      counter: 0,
      key: 11,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "King of Hearts",
      question: "/assets/images/cards/heart_a.png",
      answer: "bridegroom",
      counter: 0,
      key: 12,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
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

  const [currentAnswer, setCurrentAnswer] = useState("s z");

  // const [uniqueIdentifier, setUniqueIdentifier] = useState({ indentfier: "a" });

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
    setCurrentQuestionsArray(newQestions);
  };

  const selectNewQuestionFromCurrentQuestions = () =>
    setCurrentQuestion(currentQuestionsArray[Math.floor(Math.random() * 5)]);

  const checkIfGuessIsCorrect = () => {
    let waitTime = 1000;
    if (guess.trim() === questions[currentQuestion].answer) {
      let copyQuestions = questions;

      copyQuestions[currentQuestion].counterChecker[
        copyQuestions[currentQuestion].counter
      ] = "visible";

      copyQuestions[currentQuestion].counter =
        copyQuestions[currentQuestion].counter + 1;

      setQuestions(copyQuestions);

      checkIfcurrentQuestionsHaveReachCounterFiveAndUpdate(questions);

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
        <CardDecoration />
        <div className="middle-a">
          <Banner />
          <div className="display-a">
            <img src={questions[currentQuestion].question} alt="" />
          </div>
          <MouseOverPopover currentAnswer={currentAnswer} />

          <form className="answer-form-a" onSubmit={(e) => onSubmit(e)}>
            <input
              className="answer-input-a"
              type="text"
              name="answer"
              value={guess}
              onChange={(e) => onChange(e)}
            />
            <input className="answer-button-a" type="submit" value="guess" />
          </form>
          <div className="correct-or-incorrect">{correctOrIncorrect}</div>
        </div>
        <div className="right-side-a">
          <ScoreKeeperAdvanced {...questions} />
        </div>
      </section>
    </Fragment>
  );
};

export default Advanced;
