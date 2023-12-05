import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

function ResultScreen() {
  const navigate = useNavigate(); 
  const screen = useSelector((state) => state.quiz.screen);
  const dispatch = useDispatch();

  return (
      <button className="back-button" onClick={() => dispatch(resetGame(navigate(screen)))}>Start Again</button>
  );
}

export default ResultScreen;
