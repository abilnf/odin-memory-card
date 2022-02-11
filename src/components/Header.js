import { useState } from "react";
import "../styles/Header.css";
export default function Header(props) {
  const [highscore, setHighscore] = useState(0);
  if (props.score > highscore) {
    setHighscore(props.score);
  }
  return (
    <div className="header">
      <h1>abilnf's Memory Game</h1>
      <h3>Score: {props.score}</h3>
      <h3>Highscore: {highscore}</h3>
    </div>
  );
}
// 