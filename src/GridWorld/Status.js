import React from 'react';
import { css } from 'react-emotion';

const style = css`
  display: flex;
  justify-content: space-around;
  div {
    min-width: 40px;
  }
`;
export default ({ children }) => <div className={style}>{children}</div>;
