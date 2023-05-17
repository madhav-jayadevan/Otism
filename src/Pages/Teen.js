import React, { useState } from "react";
import "./Teen.css";

const questions = [
  {
    id: 0,
    text: "Age in months:",
  },
  {
    id: 1,
    text: "Sex:",
    options: ["Male", "Female"],
  },
  {
    id: 2,
    text: "Ethnicity:",
    options: ["Asian", "Black", "Hispanic", "Latino", "Native Indian", "White European", "Middle Eastern", "Mixed South Eastern", "Others"],
  },
  {
    id: 3,
    text: "Who is taking the test:",
    options: ["Parent", "Guardian", "Other"],
  },
  {
    id: 4,
    text: "Does your child look at you when you call his/her name?",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
  },
  {
    id: 5,
    text: "How easy is it for you to get eye contact with your child?",
    options: ["Very easy", "Quite easy", "Quite difficult", "Very difficult", "Impossible"],
  },
  {
    id: 6,
    text: "Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)",
    options: ["Many times a day", "A few times a day", "A few times a week", "Less than once a week", "Never"],
  },
  {
    id: 7,
    text: "Does your child point to share interest with you? (e.g. poin9ng at an interesting sight)",
    options: ["Many times a day", "A few times a day", "A few times a week", "Less than once a week", "Never"],
  },
  {
    id: 8,
    text: "Does your child pretend? (e.g. care for dolls, talk on a toy phone",
    options: ["Many times a day", "A few times a day", "A few times a week", "Less than once a week", "Never"],
  },
  {
    id: 9,
    text: "Does your child follow where you're looking? ",
    options: ["Many times a day", "A few times a day", "A few times a week", "Less than once a week", "Never"],
  },
  {
    id: 10,
    text: "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)",
    options: ["Always", "Usually", "Sometimes", "Rarely", "Never"],
  },
  {
    id: 11,
    text: "Would you describe your child's first words as: ",
    options: ["Very typical", "Quite typical", "Slightly unusual", "Very unusual", "My child doesn't speak"],
  },
  {
    id: 12,
    text: "Does your child use simple gestures? (e.g. wave goodbye)",
    options: ["Many times a day", "A few times a day", "A few times a week", "Less than once a week", "Never"],
  },
  {
    id: 13,
    text: "Does your child stare at nothing with no apparent purpose?",
    options: ["Many times a day", "A few times a day", "A few times a week", "Less than once a week", "Never"],
  },
];

const Teen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [ageInput, setAgeInput] = useState("");
  
  
  const handleOptionSelect = (option) => {
    if (currentQuestionIndex >= 4 && currentQuestionIndex <= 13) {
      const answerValue = questions[currentQuestionIndex].options.indexOf(option) <= 1 ? 0 : 1;
      setAnswers([...answers, answerValue]);
    } else {
      setAnswers([...answers, option]);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAgeInput = () => {
    setAnswers([...answers, ageInput]);
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
          {currentQuestionIndex === 0 ? (
            <div className="age-input">
              <input
                type="text"
                value={ageInput}
                onChange={(e) => setAgeInput(e.target.value)}
                placeholder="Enter age in months"
              />
              <button onClick={handleAgeInput}>Enter</button>
            </div>
          ) : questions[currentQuestionIndex].options ? (
            <ul className="options-list">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <li key={index}>
                  <button className="option-button" onClick={() => handleOptionSelect(option)}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <input
              type="text"
              value={answers[currentQuestionIndex] || ""}
              onChange={(e) => setAnswers([...answers.slice(0, currentQuestionIndex), e.target.value])}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setCurrentQuestionIndex(currentQuestionIndex + 1);
                }
              }}
            />
          )}
          {currentQuestionIndex !== 0 && (
            <button className="next-button" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
              Next
            </button>
          )}
        </div>
      ) :
(
<div className="completion-wrapper">
<h2>Questionnaire Completed</h2>
<div className="answers-container">
<h3>Answers:</h3>
<p>
Age in months: {answers[0]}
</p>
<p>
Sex: {answers[1]}
</p>
<p>
Ethnicity: {answers[2]}
</p>
<p>
Who is taking the test: {answers[3]}
</p>
{questions.slice(4).map((question, index) => (
<p key={question.id}>
{question.text}: {answers[index + 4]}
</p>
))}
</div>
<button className="restart-button" onClick={resetQuestionnaire}>
Restart
</button>
</div>
)}
</div>
);
};

export default Teen;
