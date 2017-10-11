import React from 'react';
import { css } from 'react-emotion';
import { readableColor } from 'polished';

const colorMap = {
  //   2: 'paleolivered',
  //   4: 'lightblue',
  //   8: 'orange',
  //   16: 'green',
  //   32: 'brown',
  //   64: 'purple',
};

const cellStyle = number => {
  const mainColor = colorMap[number] || 'beige';
  return css`
    background-color: ${mainColor};
    color: ${readableColor(mainColor)};
    margin: 0.2em;
    text-decoration: none;
    width: 3em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.2em;
  `;
};
const numberStyle = css`font-size: 1.25rem;`;

const Number = ({ number }) => <div className={numberStyle}>{number}</div>;
export default ({ cell }) => (
  <div className={cellStyle(cell)}>{cell && <Number number={cell} />}</div>
);
