import { useState, useEffect } from "react";

export default function Stopwatch(){
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timerInterval);
  }, [isRunning]);
  const toggleTimer = () => {
    if (isRunning) {
      alert(`Time that is measured: ${formatTime(elapsedTime)}`);
    }
    setIsRunning(!isRunning);
    if (!isRunning) {
      setElapsedTime(0);
    }
  };
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };
  return (
    <div style={{ textAlign: "center", marginTop: "25px" }}>
      <div style={{ fontSize: "2rem", marginBottom: "25px" }}>
        {formatTime(elapsedTime)}
      </div>
      <button
        onClick={toggleTimer}
        style={{ fontSize: "1rem", padding: "15px 25px", backgroundColor:"white", borderRadius:"20px" }}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};
