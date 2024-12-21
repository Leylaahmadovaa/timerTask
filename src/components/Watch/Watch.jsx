import { useState, useEffect } from "react";
import style from "./watch.module.css";
export default function Watch(){
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours();
  return (
    <div className={style.watch}>
      <p className={style.hour}>{hours.toString().padStart(2, "0")}</p>
      <p className={style.minute}>{minutes.toString().padStart(2, "0")}</p>
      <p className={style.second}>{seconds.toString().padStart(2, "0")}</p>
    </div>
  );
};
