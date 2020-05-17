import React, { useState } from 'react';
import Board, { addCard, addColumn, moveCard } from '@lourenci/react-kanban'
import {Modal, Button} from 'antd';

import ListEntry from '../ListEntry';
import './style.less';

const initialBoard = {
  columns: [
    {
      id: 0,
      title: 'Search',
      cards: [
        {
          id: 0,
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
      ]
    },
    {
      id: 1,
      title: 'Fall \'20',
      cards: [
        {
          id: 1,
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
      ]
    },
    {
      id: 2,
      title: 'Winter \'21',
      cards: [
        {
          id: 2,
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
      ]
    },
    {
      id: 3,
      title: 'Spring \'21',
      cards: [
        {
          id: 3,
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
      ]
    },
    {
      id: 4,
      title: 'Summer \'21',
      cards: [
        {
          id: 4,
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
      ]
    },
    {
      id: 5,
      title: 'Possible',
      cards: [
        {
          id: 5,
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
      ]
    },
  ]
}

const Planner = () => {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(initialBoard);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  const renderCard = (card, cardBag) => {
    return (
      <ListEntry setVisible={setVisible} dragging={cardBag.dragging} title={card.title} code={card.code} units={card.units} onClick={cardBag.removeCard} />
    );
  }

  const [visible, setVisible] = useState(false);
  
  const handleOk = e => {
    setVisible(false);
  };
  
  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <div className="planner">
        <Modal title="CSE 100" visible={visible} onCancel={handleCancel} footer={null}>
          <p>Advance Data Structures (4)</p>
          <p>Offered in Fall, Winter, Spring</p>
          <p>SPrerequisites: CSE 12, CSE 15L, CSE 21, CSE 30</p>
        </Modal>
      <Board renderCard={renderCard} onCardDragEnd={handleCardMove} disableColumnDrag>{controlledBoard}</Board>
    </div>
  );
};

export default Planner;