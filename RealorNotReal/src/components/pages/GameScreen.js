import React from 'react';
import { useNavigate } from 'react-router-dom';

function GameScreen() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Game Screen</h1>
            <button onClick={() => navigate("/end")}>End Game</button>
        </div>
    );
}

export default GameScreen;