import React from 'react';
import Alive from './Alive';
import Board from './Board';
import Action from './Action';
import Learning from './Learning';
import Status from './Status';

const GridWorld = props => {
  const { board, alive, action, learning } = props;
  if (!board) return null;
  return [
    <Status key="status">
      <Learning key="learning" learning={learning} />
      <Alive key="alive" alive={alive} />
      <Action key="action" action={action} />
    </Status>,
    <Board key="board" board={board} />,
  ];
};

export default GridWorld;
