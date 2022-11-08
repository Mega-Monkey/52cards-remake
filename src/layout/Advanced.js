import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Advanced.css";
import { Banner } from "../components/Banner";
import { CardDecoration } from "../components/CardDecoration";
import { DisplayIsCorrect } from "../components/DisplayIsCorrect";
import { QuestionDisplay } from "../components/QuestionDisplay";
import { ScoreKeeperAdvanced } from "../components/ScoreKeeperAdvanced";
import { Form } from "../components/Form"
import { ScoreKeeper } from "../components/ScoreKeeper";
import MouseOverPopover from "../components/MouseOverPopover";

export const Advanced = () => {

  const [beginnerData, setBeginnerData] = useState([
    {
      questionDisplay: "Ace of Hearts",
      question: "/assets/images/cards/heart_a.png",
      answer: "love heart",
      counter: 0,
      key: 0,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "2 of Hearts",
      question: "/assets/images/cards/heart_2.png",
      answer: "lovers",
      counter: 0,
      key: 1,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "3 of Hearts",
      question: "/assets/images/cards/heart_3.png",
      answer: "home",
      counter: 0,
      key: 2,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "4 of Hearts",
      question: "/assets/images/cards/heart_4.png",
      answer: "hair",
      counter: 0,
      key: 3,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "5 of Hearts",
      question: "/assets/images/cards/heart_5.png",
      answer: "hoof",
      counter: 0,
      key: 4,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "6 of Hearts",
      question: "/assets/images/cards/heart_6.png",
      answer: "hoop",
      counter: 0,
      key: 5,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "7 of Hearts",
      question: "/assets/images/cards/heart_7.png",
      answer: "hat",
      counter: 0,
      key: 6,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "8 of Hearts",
      question: "/assets/images/cards/heart_8.png",
      answer: "hedge",
      counter: 0,
      key: 7,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "9 of Hearts",
      question: "/assets/images/cards/heart_9.png",
      answer: "hag",
      counter: 0,
      key: 8,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "10 of Hearts",
      question: "/assets/images/cards/heart_10.png",
      answer: "horse",
      counter: 0,
      key: 9,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "Jack of Hearts",
      question: "/assets/images/cards/heart_j.png",
      answer: "cupid",
      counter: 0,
      key: 10,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "Queen of Hearts",
      question: "/assets/images/cards/heart_q.png",
      answer: "bride",
      counter: 0,
      key: 11,
      counterChecker: ["", "", "", "", ""],
      isHidden: "hidden",
    },
    {
      questionDisplay: "King of Hearts",
      question: "/assets/images/cards/heart_k.png",
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

  const [currentAnswer, setCurrentAnswer] = useState("love heart");

  const [waitTime, setWaitTime] = useState(1000)

  const { guess } = userInput;

  const upDateQuestionData = (array) => {
    let newQestions = [];

    array.forEach(({counter, key}) => {
      if (counter >= 5 || newQestions.length >= 5) {
        return;
      } else {
        newQestions.push(key);
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
    console.log('new question ', newQuestion)
    console.log('answer', beginnerData[newQuestion].answer)
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
        <div className="middle-a">
          <Banner />
            <div className="display-a">

            <img src={beginnerData[currentQuestion].question} alt="" />
            </div>
            <MouseOverPopover currentAnswer={currentAnswer} />
            <Form handleSubmit={handleSubmit} handleChange={handleChange} guess={guess}/>
            <DisplayIsCorrect correctOrIncorrect={correctOrIncorrect} />
       
        </div>
        <div className="right-side-b">
          <ScoreKeeperAdvanced {...beginnerData} />
          
        </div>
      </section>
    </Fragment>
  );
};

export default Advanced;

