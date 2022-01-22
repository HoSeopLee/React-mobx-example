import React, { useRef } from 'react';

const TodoForm = ({ add }) => {
  const ref = useRef();
  return (
    <div>
      <p>
        <input ref={ref} /> <button onClick={click}>add</button>
      </p>
    </div>
  );
  function click() {
    add(ref.current.value);
    ref.current.value = '';
  }
};

export default TodoForm;
