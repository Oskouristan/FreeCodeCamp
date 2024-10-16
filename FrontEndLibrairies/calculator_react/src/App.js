import React, { useState } from 'react';
import './App.css';

function App() {
  var [input, setInput] = useState('');  
  var [result, setResult] = useState('');

  const handleClick = (e) => {
    var newInput = input + e.target.name; 
    setInput(newInput);         
  
  };

  const clear = () => {
    setInput('');              
    setResult('');             
  };

  const calculate = () => {
    var suite = input;
    input = '';
    setInput(' ');
    setResult(suite);
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        <p className="input">{input || "0"}</p>  
        <p className="result">{result}</p>       
      </div>
      <div className="keypad">
        <button id="clear" className="span-three" onClick={clear}>Clear</button>
        <button name="/" id="divide" onClick={handleClick}>&divide;</button>

        <button name="7" id="seven" onClick={handleClick}>7</button>
        <button name="8" id="eight" onClick={handleClick}>8</button>
        <button name="9" id="nine" onClick={handleClick}>9</button>
        <button name="*" id="multiply" onClick={handleClick}>&times;</button>

        <button name="4" id="four" onClick={handleClick}>4</button>
        <button name="5" id="five" onClick={handleClick}>5</button>
        <button name="6" id="six" onClick={handleClick}>6</button>
        <button name="-" id="subtract" onClick={handleClick}>&ndash;</button>

        <button name="1" id="one" onClick={handleClick}>1</button>
        <button name="2" id="two" onClick={handleClick}>2</button>
        <button name="3" id="three" onClick={handleClick}>3</button>
        <button name="+" id="add" onClick={handleClick}>+</button>

        <button name="0" id="zero" className="span-two" onClick={handleClick}>0</button>
        <button name="." id="decimal" onClick={handleClick}>.</button>
        <button id="equals" onClick={calculate}>=</button>  
      </div>
    </div>
  );
}

export default App;
