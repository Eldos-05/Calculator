import React from 'react';
import DigitButton from './DigitButton';
import OperatorButton from './OperatorButton';
import ClearButton from './ClearButton';
import EqualsButton from './EqualsButton';

const Buttons = ({ onButtonClick }) => {
  return (
    <div className="button-container">
      {}
      {[...Array(9)].map((_, index) => (
        <DigitButton key={index + 1} value={index + 1} onClick={onButtonClick} />
      ))}
      <DigitButton key={0} value={0} onClick={onButtonClick} />

      {}
      {['+', '-', '*', '/'].map((operator) => (
        <OperatorButton key={operator} value={operator} onClick={onButtonClick} />
      ))}

      {}
      <ClearButton onClick={onButtonClick} />
      <EqualsButton onClick={onButtonClick} />
    </div>
  );
};

export default Buttons;
