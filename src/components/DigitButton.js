import React from 'react';

const DigitButton = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default DigitButton;
