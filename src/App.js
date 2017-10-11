import React, { Component } from 'react';
import GridWorld from './GridWorld';
import { css, injectGlobal, fontFace } from 'react-emotion';
import Rx from 'rxjs/Rx';
import io from 'socket.io-client';
import { rxConnect } from 'rx-connect';
import buttonStyle from './buttonStyle';

const socket = io.connect('ws://localhost:8080', { transports: ['websocket'] });
let obs = Rx.Observable
  .fromEventPattern(h => socket.on('state', h))
  .zip(Rx.Observable.timer(0, 300), x => x)
  .scan((acc, curr) => Object.assign({}, acc, curr), {});
const subscribe = obs.subscribe(val => console.log(val));
const ConnectedGame = rxConnect(obs)(GridWorld);
fontFace`
font-family: 'Oxygen';
font-style: normal;
font-weight: 400;
src: local('Oxygen Regular'), local('Oxygen-Regular'), url(https://fonts.gstatic.com/s/oxygen/v6/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2) format('woff2');
unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
`;

injectGlobal`
html,body{
  font-size: 30px;
  font-family: 'Oxygen';
}
`;
const appStyle = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Button = 'button';
class App extends Component {
  render() {
    return (
      <div className={appStyle}>
        <header>
          <h1>Gridworld Maschine</h1>
        </header>
        <Button className={buttonStyle} onClick={() => socket.emit('start')}>
          Start
        </Button>
        <section
          style={{
            minHeight: '346px',
          }}
        >
          <ConnectedGame />
        </section>
        <div
          style={{
            marginTop: '40px',
            width: '40px',
            border: '1px solid black',
          }}
        />
      </div>
    );
  }
}

export default App;
