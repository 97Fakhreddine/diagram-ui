import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/graphics/Graphics.jsx';
// import { Provider } from 'react-redux';
// import createStore from './core/store/store';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.clear();

root.render(
  // <React.StrictMode>
  //   <Provider store={createStore()}>
  //     <App />
  //   </Provider>
  // </React.StrictMode>

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
