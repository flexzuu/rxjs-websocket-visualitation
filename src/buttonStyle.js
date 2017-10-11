import { css } from 'react-emotion';

export default css`
  position: relative;
  display: inline-block;
  letter-spacing: 1.2px;
  padding: 12px 32px;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
  margin-bottom: 30px;
  width: 500px;
  &:focus {
    outline: none;
  }

  color: lightslategray;

  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  box-sizing: border-box;

  transition-property: color;
  transition-duration: 0.5s;

  &.border.primary {
    border: 1px solid lightslategray;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: lightslategray;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    z-index: -1;
  }

  &:hover {
    color: white;

    &:before {
      transform: scaleX(1);
      transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66);
    }
  }
`;
