import { useState, useEffect } from "react";

export default function Timer(){

  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [totalTime, setTotalTime] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval;
    if (isRunning && totalTime > 0) {
      timerInterval = setInterval(() => {
        setTotalTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (totalTime === 0) {
      setIsRunning(false);
      alert("Time is up");
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, totalTime]);

  const toggleTimer = () => {
    if (!isRunning) {
      setTotalTime(seconds + minutes * 60 + hours * 3600 );
    }
    setIsRunning(!isRunning);
  };
  const formatTime = (time) => String(time).padStart(2, "0");
  const remainingHours = Math.floor(totalTime / 3600);
  const remainingMinutes = Math.floor((totalTime % 3600) / 60);
  const remainingSeconds = totalTime % 60;
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {!isRunning && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            placeholder="hh"
            style={{ width: "60px", marginRight: "5px", fontSize: "1rem" }}
          />
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            placeholder="mm"
            style={{ width: "60px", marginRight: "5px", fontSize: "1rem" }}
          />
          <input
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(Number(e.target.value))}
            placeholder="ss"
            style={{ width: "60px", fontSize: "1rem" }}
          />
        </div>
      )}
      <div style={{ fontSize: "2rem", marginBottom: "20px" }}>
        {formatTime(remainingHours)}:{formatTime(remainingMinutes)}:
        {formatTime(remainingSeconds)}
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
