import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import Menu from './views/menu'
import reportWebVitals from './reportWebVitals';
import './styles/color.scss';
import './styles/font.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <App />
    <button type="" className='xo-btn xo-btn--xs'>
      <span className='xo-btn__content  xo-btn__content--xl'></span>
      <span className='xo-btn__loadding'></span>
    </button>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
