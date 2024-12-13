import React from 'react';

const ClearButton = ({ onClick }) => {
  return (
    <button onClick={() => onClick('C')} className="clear">
      C
    </button>
  );
};

export default ClearButton;
