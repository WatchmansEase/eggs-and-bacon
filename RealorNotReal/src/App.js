import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginAppScreen from './components/pages/LoginAppScreen';
import IntroScreen from './components/pages/IntroScreen';
import QuizScreen from './components/pages/QuizScreen';
import GameScreen from './components/pages/GameScreen';
import ResultScreen from './components/pages/ResultScreen';
import EndScreen from './components/pages/EndScreen';
import DeepFakeDetectorScreen from './components/pages/DeepFakeDetectorScreen';
import ForFakesSakeScreen from './components/pages/ForFakesSakeScreen';

function App() {
  return (
      <Routes>
          <Route path="/" element={<LoginAppScreen />}></Route> {/* Route for the login page */}
          <Route path="/intro" element={<IntroScreen />}></Route>
          <Route path="/quiz" element={<QuizScreen />}></Route>
          <Route path="/game" element={<GameScreen />}></Route>
          <Route path="/result" element={<ResultScreen />}></Route>
          <Route path="/result" element={<DeepFakeDetectorScreen/>}></Route>
          <Route path="/result" element={<ForFakesSakeScreen/>}></Route>
          <Route path="/end" element={<EndScreen />}></Route>
      </Routes>
  );
}

export default App;