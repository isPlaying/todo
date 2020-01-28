import React from 'react';
import { TodoListItem } from './TodoListItem';
interface ITodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
}
export const TodoList: React.FC<ITodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo, idx) => {
        return <TodoListItem todo={todo} toggleTodo={toggleTodo} key={idx} />;
      })}
    </ul>
  );
};
