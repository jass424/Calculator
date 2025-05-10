//Home.Jsx Calculator


import React, { useState } from 'react';
import './App.css';

const Calculator = () => {

                const [input, setInput] = useState('');

                const handleButtonClick = (value) => 
                {
                setInput((prev) => prev + value);
                };

                const handleClear = () => 
                {
                setInput('');
                };

                const handleCalculate = () => 
                {
                try
                {
                setInput(eval(input).toString());
                } catch (error) 
                {
                setInput('Be in Your Limits!');
                }
                };

    return (
                <div className="calculator">
                <input type="text" value={input} readOnly />
                <div className="buttons">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
                </div>
                </div>
                );
                };

export default Calculator;


//Css File

.calculator {
  width: 300px;
  margin: 50px auto;
  border: 1px solid #131212;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.calculator input {
  width: 100%;
  height: 40px;
  font-size: 24px;
  text-align: right;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #161616;
  border-radius: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  height: 50px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

h1{
  text-align: center;
  font-size: 60px;
  margin-bottom: 20px;
  color: #fd0505;
}
