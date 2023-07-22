import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import Menu from './views/menu'
import reportWebVitals from './reportWebVitals';
import './styles/color.scss';
import './styles/font.scss';
import '../src/boostrap/css/bootstrap.css';
import '../src/boostrap/css/bootstrap.css';
import SearchForm from './components/form-search';
import Logo from './components/logo';
import './assets/imgs/logo-dark.png';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logo/>
    <SearchForm/>
    <Menu />
    <App />
    <div class="container text-center">
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col-6">
          2 of 3 (wider)
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col-5">
          2 of 3 (wider)
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
