import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

const onDrop = (data) => {
  console.log(data); // eslint-disable-line
};

const DragAndDrop = () => (
  <div>
    <ul>
      <Draggable type="fruit" data="banana"><li>Banana</li></Draggable>
      <Draggable type="fruit" data="apple"><li>Apple</li></Draggable>
      <Draggable type="metal" data="silver"><li>Silver</li></Draggable>
    </ul>
    <Droppable
      types={['fruit']} // <= allowed drop types
      onDrop={onDrop}
      style={{ backgroundColor: 'red' }}
    // <ul className="Smoothie" />
    />
  </div>
);

DragAndDrop.propTypes = {

};

export default DragAndDrop;
