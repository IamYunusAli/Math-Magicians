import React, { PureComponent } from 'react';
import './Calculator.css';

class Calculator extends PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="output" />
        <div className="row">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button className="sign" type="button">÷</button>
        </div>
        <div className="row">
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button className="sign" type="button">x</button>
        </div>
        <div className="row">
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button className="sign" type="button">-</button>
        </div>
        <div className="row">
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button className="sign" type="button">+</button>
        </div>
        <div className="row">
          <button type="button">0</button>
          <button className="equal sign" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
