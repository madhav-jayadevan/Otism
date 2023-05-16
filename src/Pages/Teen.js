import React, { useState } from "react";
import "./Teen.css";

const questions = [
  {
    id: 1,
    text: "Does your child use meaningful hand gestures to communicate?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 2,
    text: "Does your child imitate others' actions (e.g., clapping hands, playing pat-a-cake)?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 3,
    text: "Does your child respond to their name when called?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 4,
    text: "Does your child enjoy playing peek-a-boo/hide-and-seek games?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 5,
    text: "Does your child point to indicate interest or get attention?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 6,
    text: "Does your child enjoy climbing on things (e.g., furniture, playground equipment)?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 7,
    text: "Does your child make unusual finger movements near their eyes?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 8,
    text: "Does your child point with one finger to show you something interesting?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 9,
    text: "Does your child bring objects over to share them with you?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 10,
    text: "Does your child look up quickly at the sound of a loud noise?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
];


const Teen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionSelect = (option) => {
    setAnswers([...answers, option]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetQuestionnaire = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const getBackgroundColor = () => {
    const colors = ["#E8F5E9", "#E0F7FA", "#F1F8E9", "#F3E5F5", "#EDE7F6"];
    return colors[currentQuestionIndex % colors.length];
  };

  return (
    <div className="quiz-container" style={{ backgroundColor: getBackgroundColor() }}>
      {currentQuestionIndex < questions.length ? (
        <div className="question-wrapper">
          <h2 className="question-text">{questions[currentQuestionIndex].text}</h2>
          <ul className="options-list">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button className="option-button" onClick={() => handleOptionSelect(option)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="completion-wrapper">
          <h2>Questionnaire Completed</h2>
          <ul className="answers-list">
            {questions.map((question, index) => (
              <li key={question.id}>
                {question.text} - {answers[index]}
              </li>
            ))}
          </ul>
          <button className="restart-button" onClick={resetQuestionnaire}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default Teen;
