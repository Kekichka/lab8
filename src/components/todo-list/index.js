import React from 'react';
import './style.css';
import ToDoItemComponent from './todo-item';

const ToDoListComponent = ({todos,deleteTodo,editTodo,saveEditedTodo,editingIndex,cancelEdit
}) => {
  const renderTodoItems = () =>
    todos.map((todo, index) => {
      const isEditing = index === editingIndex;

      return (
        <ToDoItemComponent
          key={index}
          text={todo.text}
          createdAt={todo.createdAt}
          deleteTodo={() => deleteTodo(index)}
          editTodo={() => editTodo(index)}
          saveEditedTodo={(newText) => saveEditedTodo(index, newText)}
          editing={isEditing}
          cancelEdit={cancelEdit}
        />
      );
    });

  return <div className='todo-list'>{renderTodoItems()}</div>;
};

export default ToDoListComponent;
