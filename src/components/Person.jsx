import React from 'react';

const Person = ({ age10, plus }) => {
  return (
    <div>
      <h1>{age10}</h1>
      <button onClick={click}>plus</button>
    </div>
  );
  function click() {
    plus();
  }
};

export default Person;
