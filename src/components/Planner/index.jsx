import React, { useState } from 'react';
import Board, { addCard, addColumn, moveCard } from '@lourenci/react-kanban'

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
        title: 'Fall',
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
        title: 'Winter',
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
        title: 'Spring',
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
        title: 'Summer',
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
    return(
        <ListEntry dragging={cardBag.dragging} title={card.title} code={card.code} units={card.units} onClick={cardBag.removeCard} />
    );
  }

    return (
        <div className="planner">
            <Board renderCard={renderCard} onCardDragEnd={handleCardMove} disableColumnDrag>{controlledBoard}</Board>
        </div>
    );
};

export default Planner;