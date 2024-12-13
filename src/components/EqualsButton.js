import React from 'react';

const EqualsButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick('=')} className="equals">
      =
    </button>
  );
};

export default EqualsButton;
