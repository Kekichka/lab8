import React, { useState } from 'react';
import './style.css';
import ToDoInputComponent from './todo-input';
import ToDoListComponent from './todo-list';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const updateTodos = (updatedTodos, index = null) => {
    setTodos(updatedTodos);
    setEditingIndex(index);
  };

  const addTodo = (text) => {
    const newTodo = {
      text,
      createdAt: new Date(),
    };
    updateTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    updateTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
  };

  const saveEditedTodo = (index, newText) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText } : todo
    );
    updateTodos(updatedTodos);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const searchTodo = (searchText) => {
    const filteredTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchText.toLowerCase())
    );
    updateTodos(filteredTodos);
  };

  const clearSearch = () => {
    updateTodos([...todos]);
  };

  return (
    <div className="App">
      <ToDoInputComponent addTodo={addTodo} searchTodo={searchTodo} clearSearch={clearSearch} />
      <ToDoListComponent
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        saveEditedTodo={saveEditedTodo}
        editingIndex={editingIndex}
        cancelEdit={cancelEdit}
      />
    </div>
  );
};

export default App;
