import React from 'react';

const OperatorButton = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)} className="operator">
      {value}
    </button>
  );
};

export default OperatorButton;
