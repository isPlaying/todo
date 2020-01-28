import React, { useState, ChangeEvent, FormEvent } from 'react';
interface IAddTodoFormProps {
  addTodo: AddTodo;
}
export const AddTodoForm: React.FC<IAddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    newTodo.trim() !== '' && addTodo(newTodo);
    setNewTodo('');
  };
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
