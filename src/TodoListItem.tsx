import React from 'react';
import './TodoListItem.css';
interface ITodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}
export const TodoListItem: React.FC<ITodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : 'none'}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
