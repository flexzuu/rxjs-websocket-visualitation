import React from 'react';
import Cell from './Cell';
import { css } from 'react-emotion';

const rowStyle = css`display: flex;`;
export default ({ row }) => (
  <div className={rowStyle}>
    {row.map((cell, i) => <Cell key={i} cell={cell} />)}
  </div>
);
