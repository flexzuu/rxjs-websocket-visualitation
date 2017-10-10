import React from 'react';
import Row from './Row';
import { css } from 'react-emotion';

const boardStyle = css`
  display: flex;
  flex-direction: column;
`;

export default ({ board }) => (
  <div className={boardStyle}>
    {board.map((row, i) => <Row key={i} row={row} />)}
  </div>
);
