import { useState } from "react";

export default function ScoreExercise() {
  const [num, setNum] = useState(0);
  function increment() {
    setNum((oldScores) => oldScores + 1);
  }
  return (
    <div style={{ display: "flex" }}>
      <ul>
        <li>Player 1 : {num}</li>
      </ul>
      <button onClick={increment}>+1</button>
    </div>
  );
}
