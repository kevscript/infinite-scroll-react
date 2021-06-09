import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import { AlbumsProvider } from "./hooks/useAlbums"

ReactDOM.render(
  <React.StrictMode>
    <AlbumsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlbumsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
