import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResetButton from "../buttons/ResetButton";

function ResultScreen() {
  const navigate = useNavigate();
  const score = useSelector((state) => state.score); 
  
  //Result screen to display user quiz score and ask if they want to continue playing
  return (
    <div className="result-screen">
      <h2>Result Screen</h2>
      <p>Final Score: {score}</p>
      <button onClick={() => navigate("/game")}>Play Game</button>
      <ResetButton />
    </div>
  );
}

export default ResultScreen;
