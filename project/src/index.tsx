import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const props = {
  offersCount: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersCount = {props.offersCount} />
  </React.StrictMode>,
  document.getElementById('root'));
