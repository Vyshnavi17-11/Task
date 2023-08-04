import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);
  const [isTimeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const increaseScore = () => {
    if (!isTimeUp) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const onClickReset = () => {
    setTimer(10);
    setScore(0);
    setTimeUp(false);
  };

  useEffect(() => {
    if (timer === 0) {
      setTimeUp(true);
    }
  }, [timer]);

  return (
    <div className="App">
      <h2>Timer: {timer}</h2>
      <h2>Score: {score}</h2>
      {isTimeUp ? (
        <div>
          <p>Your final score is: {score}</p>
          <button onClick={onClickReset}>Reset</button>
        </div>
      ) : (
        <img
          src="https://media.istockphoto.com/id/165966456/vector/vector-meteor-star-shower-falling-skies.jpg?s=612x612&w=0&k=20&c=0VFCB6p4ajUxGSoBwi6tIGTlj8skC_umFsSsBgQQY-E="
          alt="Star"
          style={{ width: '300px', height: 'auto', cursor: 'pointer' }}
          onClick={increaseScore}
        />
      )}
    </div>
  );
};

export default App;
