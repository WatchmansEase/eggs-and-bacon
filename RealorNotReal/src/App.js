import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroScreen from './components/pages/IntroScreen';
import QuizScreen from './components/pages/QuizScreen';
import GameScreen from './components/pages/GameScreen';
import ResultScreen from './components/pages/ResultScreen';
import EndScreen from './components/pages/EndScreen';

function App() {
  return (
      <Routes>
          <Route path="/" element={<IntroScreen />}></Route>
          <Route path="/intro" element={<IntroScreen />}></Route>
          <Route path="/quiz" element={<QuizScreen />}></Route>
          <Route path="/game" element={<GameScreen />}></Route>
          <Route path="/result" element={<ResultScreen />}></Route>
          <Route path="/end" element={<EndScreen />}></Route>
      </Routes>
  );
}

export default App;