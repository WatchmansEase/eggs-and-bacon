import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageData from "../../appData/imagesData";
import { changeScore } from "../../Redux/Quiz/quizSlice";
import { useDispatch, useSelector } from "react-redux";

function GameScreen() {
  const navigate = useNavigate();
  const score = useSelector((state) => state.quiz.score);
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = imageData[currentImageIndex];
 
  // Fuction to handle answer selected by user
  const handleAnswer = (isCorrect) => {
    setSelectedAnswer(isCorrect);
  };

  // Function to navigate to next image
  const nextImage = () => {
    if (selectedAnswer === null) {
      alert("Please select an option before proceeding!");
      return;
    }
    if (currentImageIndex + 1 < imageData.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      navigate("/end");
    }
  };
 
  // Function to handle if answer is correct and update score
  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      alert("Please select an option before proceeding!");
      return;
    }
    if (selectedAnswer === currentImage.isCorrect) {
      dispatch(changeScore(score + 10));
    }
    
    nextImage(); 
  };

  return (
    <div>
      <h1>Game Screen</h1>
      <p id="question">Your current score is {score}%</p>
      <img
        src={process.env.PUBLIC_URL + currentImage.imageUrl}
        alt="Real or Not Real"
      />
      <div>
        <button onClick={() => handleAnswer(true)}>Real</button>
        <button onClick={() => handleAnswer(false)}>Not Real</button>
      </div>
      <button onClick={() => handleNextQuestion()}>Next</button>
      <button onClick={() => navigate("/end")}>End Game</button>
    </div>
  );
}

export default GameScreen;