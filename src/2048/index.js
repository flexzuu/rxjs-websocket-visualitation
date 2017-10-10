import React from 'react';
import Score from './Score';
import Board from './Board';

const Game2048 = ({ score, board }) => {
  if (!score || !board) return 'Loading...';
  return [
    <Score key="score" score={score} />,
    <Board key="board" board={board} />,
  ];
};

export default Game2048;
