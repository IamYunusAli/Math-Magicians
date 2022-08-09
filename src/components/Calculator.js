import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState(0);

  const handleClick = (e) => {
    const num = e.target.innerText;
    setState((state) => calculate(state, num));
  };
  const { next, total } = state;
  const displayHandler = (e) => {
    const val = e.target.textContent;
    setState((state) => ({ ...state, total: val }));
  };
  return (
    <div className="calculator">
      <div className="output" onChange={displayHandler}>
        {next}
        {total}
        {0}
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>AC</button>
        <button type="button" onClick={handleClick}>+/-</button>
        <button type="button" onClick={handleClick}>%</button>
        <button className="sign" type="button" onClick={handleClick}>÷</button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>7</button>
        <button type="button" onClick={handleClick}>8</button>
        <button type="button" onClick={handleClick}>9</button>
        <button className="sign" type="button" onClick={handleClick}>x</button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>4</button>
        <button type="button" onClick={handleClick}>5</button>
        <button type="button" onClick={handleClick}>6</button>
        <button className="sign" type="button" onClick={handleClick}>-</button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>1</button>
        <button type="button" onClick={handleClick}>2</button>
        <button type="button" onClick={handleClick}>3</button>
        <button className="sign" type="button" onClick={handleClick}>+</button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>0</button>
        <button className="equal sign" type="button" onClick={handleClick}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
