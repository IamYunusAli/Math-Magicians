import React, { PureComponent } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const num = e.target.innerText;
    this.setState((state) => calculate(state, num));
  }

  render() {
    const { next, total } = this.state;
    const displayHandler = (e) => {
      const val = e.target.textContent;
      this.setState((state) => ({ ...state, total: val }));
    };
    return (
      <div className="calculator">
        <div className="output" onChange={displayHandler}>
          {next || total || 0}
        </div>
        <div className="row">
          <button type="button" onClick={this.handleClick}>AC</button>
          <button type="button" onClick={this.handleClick}>+/-</button>
          <button type="button" onClick={this.handleClick}>%</button>
          <button className="sign" type="button" onClick={this.handleClick}>÷</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.handleClick}>7</button>
          <button type="button" onClick={this.handleClick}>8</button>
          <button type="button" onClick={this.handleClick}>9</button>
          <button className="sign" type="button" onClick={this.handleClick}>x</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.handleClick}>4</button>
          <button type="button" onClick={this.handleClick}>5</button>
          <button type="button" onClick={this.handleClick}>6</button>
          <button className="sign" type="button" onClick={this.handleClick}>-</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.handleClick}>1</button>
          <button type="button" onClick={this.handleClick}>2</button>
          <button type="button" onClick={this.handleClick}>3</button>
          <button className="sign" type="button" onClick={this.handleClick}>+</button>
        </div>
        <div className="row">
          <button type="button" onClick={this.handleClick}>0</button>
          <button className="equal sign" type="button" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
