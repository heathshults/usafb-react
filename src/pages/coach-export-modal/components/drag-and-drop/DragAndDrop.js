import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import './dragAndDrop.css';

const onDrop = (data) => {
  console.log(data); // eslint-disable-line
};

const DragAndDrop = () => (
  <div className="dragAndDrop">
    <ul>
      <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
      <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
      <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
    </ul>
    <Droppable
      className="drop-area"
      types={['fruit']} // <= allowed drop types
      onDrop={onDrop}
    >
      <ul className="Smoothie" />
    </Droppable>
  </div>
);

DragAndDrop.propTypes = {

};

export default DragAndDrop;
