import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ArtContainer from './component/ArtContainer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ArtContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
