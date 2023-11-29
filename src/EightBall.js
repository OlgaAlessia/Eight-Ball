import React, { useState } from "react";
import answers from './answers'
import { getRandomAnswer } from "./random";
import "./EightBall.css";

const EightBall = () => {

  //const [count, setCount] = useState({ green: 0, goldenrod: 0, red: 0});

  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black"
  });

  const restart = () => {
    setAnswer({
      msg: "Think of a Question",
      color: "black"
    });
    //setCount({ green: 0, goldenrod: 0, red: 0});
  }

  const changeAnswer = () => {
    setAnswer(getRandomAnswer(answers));
    //setCount( count[answer.color] += 1);
  }

  return (
    <>
      <div className="EightBall"
           onClick={changeAnswer}
           style={{ backgroundColor: answer.color }} > {answer.msg} </div>
      <br />
      <button onClick={restart}>Restart</button>
    </>
  );
}

export default EightBall;


