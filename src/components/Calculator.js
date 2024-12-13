import React, { useState } from 'react';
import './Calculator.css'; 
import Display from './Display';
import Buttons from './Buttons';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const output = eval(input);  
        setResult(output);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(null);
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <Buttons onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
