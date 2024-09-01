import React from 'react';
import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@redux/store';

const rootElement = document.getElementById('root');
const element = (
  <BrowserRouter>
    <React.StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </HelmetProvider>
    </React.StrictMode>
  </BrowserRouter>
);

rootElement?.hasChildNodes() ? hydrate(element, rootElement) : render(element, rootElement);

