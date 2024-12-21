import { Link } from "react-router-dom";
import style from "./navigation.module.css";
export default function Navigation(){
  return (
    <div>
      <div className={style.buttons}>
        <Link to="/watch"> Watch </Link>
        <Link to="/stopwatch"> Stopwtach </Link>
        <Link to="/timer"> Timer </Link>
      </div>
    </div>
  );
};
