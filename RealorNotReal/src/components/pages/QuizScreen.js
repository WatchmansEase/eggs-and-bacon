import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeScore } from "../../Redux/actions";
import Questions from "../../Data/Questions";
import { useNavigate } from "react-router-dom";
import ResetButton from "../buttons/ResetButton";

function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // State to keep track of current question
  const [currentOption, setCurrentOption] = useState(null); //State to keep selected
  const navigate = useNavigate(); // Navigate to different routes in the app
  const dispatch = useDispatch(); //Dispatch action to update state in Redux store
  const score = useSelector((state) => state.score); // Accessing score from Redux store
  const currentQuestion = Questions[currentQuestionIndex];

  // Store selected answer by user
  const handleAnswerSelection = (isCorrect) => {
    setCurrentOption(isCorrect);
  };

  // Handle next question and score
  const handleNextQuestion = () => {
    // Prevent navigation if no option is selected
    if (currentOption === null) {
      alert('Please select an option before proceeding!');
      return; 
    }
    // Navigate to next question and update score if answer is correct
    if (currentQuestionIndex < Questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      if (currentOption === true) {
        dispatch(changeScore(score + 1));
      }
      setCurrentOption(null); // Reset selected option after each question
    } else {
      // Navigate to result screen if all questions have been answered
      navigate("/result");
    }
  };

  return (
    <div className="quiz-screen">
      <h2>Quiz Screen</h2>
      {currentQuestion && (
        <div>
          <h3>{currentQuestion.text}</h3>
          <ul>
            {currentQuestion.options.map((option) => (
              <li key={option.id}>
                <button className="answer" onClick={() => handleAnswerSelection(option.isCorrect)}>
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
      <p>Current Score: {score}</p>
      <ResetButton />
    </div>
  );
}

export default QuizScreen;
