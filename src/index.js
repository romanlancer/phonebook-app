import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize/modern-normalize.css';

import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
