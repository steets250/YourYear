import React, { useState } from 'react';
import Board, { moveCard } from '@lourenci/react-kanban'
import { Modal } from 'antd';

import ListEntry from '../ListEntry';
import './style.less';

const initialBoard = {
  columns: [
    {
      id: 0,
      title: 'Search',
      cards: [
      ]
    },
    {
      id: 1,
      title: 'Fall \'20',
      cards: [
        {
          id: 'F1',
          title: 'Linear Algebra',
          code: 'MATH 18',
          units: 4,
        },
        {
          id: 'F2',
          title: 'Mathematics for Algorithms',
          code: 'CSE 21',
          units: 4,
        },
        {
          id: 'F3',
          title: 'Systems Programming',
          code: 'CSE 30',
          units: 2,
        },
        {
          id: 'F4',
          title: 'Intro to Music Theory',
          code: 'MUS 1A',
          units: 4,
        },
      ]
    },
    {
      id: 2,
      title: 'Winter \'21',
      cards: [
        {
          id: 'W1',
          title: 'Personal Financial Management',
          code: 'MGT 12',
          units: 4,
        },
        {
          id: 'W2',
          title: 'Advanced Data Structures',
          code: 'CSE 100',
          units: 4,
        },
        {
          id: 'W3',
          title: 'Theory of Computability.',
          code: 'CSE 105',
          units: 4,
        },
                {
          id: 'W4',
          title: 'Fundamentals of Music',
          code: 'MUS 1B',
          units: 4,
        },
      ]
    },
    {
      id: 3,
      title: 'Spring \'21',
      cards: [
        {
          id: 'S1',
          title: 'Digital Design Techniques',
          code: 'CSE 140',
          units: 4,
        },
        {
          id: 'S2',
          title: 'Digital Systems Lab',
          code: 'CSE 140L',
          units: 4,
        },
        {
          id: 'S3',
          title: 'Making of the Modern World',
          code: 'MMW 1',
          units: 4,
        },
      ]
    },
    {
      id: 4,
      title: 'Summer \'21',
      cards: [
        {
          id: 'Su1',
          title: 'Introduction to Computer Architecture',
          code: 'CSE 141',
          units: 4,
        },
      ]
    },
    {
      id: 5,
      title: 'Possible',
      cards: [

      ]
    },
  ]
}

const Planner = () => {
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

  const handleCancel = e => {
    setVisible(false);
  };

  return (
    <div className="planner">
      <Modal title="CSE 100: Advance Data Structures" visible={visible} onCancel={handleCancel} footer={null}>
        <p style={{textAlign: 'center', width: '100%'}}>Units: 4</p>
        <p style={{textAlign: 'center', width: '100%'}}>Offered In: Fall, Winter, Spring</p>
        <p style={{textAlign: 'center', width: '100%'}}>Prerequisites: CSE 12, CSE 15L, CSE 21, CSE 30</p>
        <p>High-performance data structures and supporting algorithms. Use and implementation of data structures like (un)balanced trees, graphs, priority queues, and hash tables. Also, memory management, pointers, recursion. Theoretical and practical performance analysis, both average case and amortized. Uses C++ and STL.</p>
      </Modal>
      <Board renderCard={renderCard} onCardDragEnd={handleCardMove} disableColumnDrag>{controlledBoard}</Board>
    </div>
  );
};

export default Planner;