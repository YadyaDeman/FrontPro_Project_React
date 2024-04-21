import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
  /*const [count, setValue] = useState(1);
  const changeFunc = () => {
    setValue(3);
  };*/
  
  const [count, setCount] = useState(0);

  const onMinus = () => {
    setCount((prevValue) => prevValue - 1); //umenshaem na odin
  };

  const onPlus = () => {
    setCount((prevValue) => prevValue + 1); //plusuem 1
  };

  /*return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button onButtonClick ={changeFunc} name="+" />
      </div>
     */

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button onButtonClick={onMinus} name="-" />
      </div>
      <p>{count}</p>
      <div className="button-control">
        <Button onButtonClick={onPlus} name="+" />
      </div>
    </div>
  );
}

export default Counter;
