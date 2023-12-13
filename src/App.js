import React from "react";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import LoginAppScreen from "./components/pages/LoginAppScreen";
import IntroScreen from "./components/pages/IntroScreen";
import QuizScreen from "./components/pages/QuizScreen";
import GameScreen from "./components/pages/GameScreen";
import ResultScreen from "./components/pages/ResultScreen";
import EndScreen from "./components/pages/EndScreen";
import DeepFakeDetectorScreen from "./components/pages/DeepFakeDetectorScreen";
import ForFakesSakeScreen from "./components/pages/ForFakesSakeScreen";
import Login from "./components/molecules/Login";

import RegisterScreen from "./components/pages/RegisterScreen";

function App() {
  return (
    <div>
      <Navigation /> {/* Include the Navigation component */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginAppScreen />} />
        <Route path="/intro" element={<IntroScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/api" element={<DeepFakeDetectorScreen />} />
        <Route path="/api2" element={<ForFakesSakeScreen />} />
        <Route path="/end" element={<EndScreen />} />
      </Routes>
    </div>
  );
}

export default App;
