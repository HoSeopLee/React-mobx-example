import { observer } from 'mobx-react';
import React from 'react';

const Todo = ({ todos }) => {
  if (todos.length === 0) {
    return (
      <div>
        <h1>할일이 없습니다.</h1>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo?.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default observer(Todo);
