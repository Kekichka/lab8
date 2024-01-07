import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ToDoItemComponent = ({text,createdAt,deleteTodo,editTodo,saveEditedTodo,editing,cancelEdit}) => {
    
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => saveEditedTodo(editedText);

  const renderEditControls = () => (
    <>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <ControlButton icon={faCheck} onClick={handleSave} />
      <ControlButton icon={faTimes} onClick={cancelEdit} />
    </>
  );

  const renderReadOnlyControls = () => (
    <>
      <span className="todo-text">{text}</span>
      <ControlButton icon={faPen} onClick={editTodo} />
    </>
  );

  return (
    <div className='todo-item'>
      <div>{editing ? renderEditControls() : renderReadOnlyControls()}</div>
      <span className="todo-text">{createdAt.toDateString()}</span>
      <ControlButton icon={faTrash} onClick={deleteTodo} />
    </div>
  );
};

const ControlButton = ({ icon, onClick }) => (
  <span className="span-button" onClick={onClick}>
    <FontAwesomeIcon icon={icon} />
  </span>
);

export default ToDoItemComponent;