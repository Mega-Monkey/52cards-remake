import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Beginner.css";
import { Banner } from "../components/Banner";
import { CardDecoration } from "../components/CardDecoration";
import { DisplayIsCorrect } from "../components/DisplayIsCorrect";
import { QuestionDisplay } from "../components/QuestionDisplay";
import { Form } from "../components/Form"
import { ScoreKeeper } from "../components/ScoreKeeper";
import MouseOverPopover from "../components/MouseOverPopover";

export const Beginner = () => {

  const [beginnerData, setBeginnerData] = useState([
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

  const [currentQuestions, setCurrentQuestions] = useState(
    [
    0,
    1,
    2,
    3,
    4,
  ]);

  const [correctOrIncorrect, setCorrectOrIncorrect] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [currentAnswer, setCurrentAnswer] = useState("s z");

  const [waitTime, setWaitTime] = useState(1000)

  const { guess } = userInput;

  const upDateQuestionData = (array) => {
    let newQestions = [];

    array.forEach(({counter, question}) => {
      if (counter >= 5 || newQestions.length >= 5) {
        return;
      } else {
        newQestions.push(question);
      }
    });
    setCurrentQuestions(newQestions);
  };

  const getNewQuestion = () => {
    let newQuestion = currentQuestions[Math.floor(Math.random() * 5)];
    setCurrentQuestion(newQuestion);
    return newQuestion;
  };

  const handleCorrectGuess = () => {
    setCorrectOrIncorrect("correct");
    setTimeout(() => {
      setCorrectOrIncorrect("");
    }, waitTime);
  }

  const handleIncorrectGuess = () => {
    setCorrectOrIncorrect("incorrect");
    setTimeout(() => {
      setCorrectOrIncorrect("");
    }, waitTime);
  }

  const addScore = (data) => {
    data[currentQuestion].counterChecker[
      data[currentQuestion].counter
    ] = "visible";

  }

  const increaseCounter = (data) => {
    data[currentQuestion].counter = data[currentQuestion].counter + 1;
  }

  const resetAfterGuess = async () => {
    let newQuestion = await getNewQuestion();
    setCurrentAnswer(beginnerData[newQuestion].answer);
    setUserInput({ guess: "" });
  }

  const isGuessCorrect = async () => {
    let dataCopy = beginnerData;

    if (guess.trim() === currentAnswer) {
      
      addScore(dataCopy)
      
      increaseCounter(dataCopy)

      setBeginnerData(dataCopy);

      upDateQuestionData(beginnerData);

      resetAfterGuess()

      handleCorrectGuess()

    } else {

      resetAfterGuess()

      handleIncorrectGuess()

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isGuessCorrect();
  };

  const handleChange = (e) => {
    setUserInput({ guess: e.target.value });
  };

  return (
    <Fragment>
      <section>
        <CardDecoration />
        <div className="middle-b">
          <Banner />
          <QuestionDisplay currentQuestion={currentQuestion}/>
          <MouseOverPopover currentAnswer={currentAnswer} />
          <Form handleSubmit={handleSubmit} handleChange={handleChange} guess={guess}/>
          <DisplayIsCorrect correctOrIncorrect={correctOrIncorrect} />
        </div>
        <div className="right-side-b">
          <ScoreKeeper {...beginnerData} />
        </div>
      </section>
    </Fragment>
  );
};

export default Beginner;
