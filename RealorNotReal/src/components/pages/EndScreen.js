import React from 'react';
import { useSelector } from "react-redux";
import ResetButton from "../buttons/ResetButton";

function EndScreen() {
    const score = useSelector((state) => state.score); // Accessing score from Redux store
    
    return (
        <div>
            <h1>End Screen</h1>
            <p>Final Score: {score}</p>
             <ResetButton />
        </div>
    );
}

export default EndScreen;