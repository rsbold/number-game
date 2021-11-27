import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NumberGuessingGame  from './NumberGuessingGame';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <NumberGuessingGame />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
