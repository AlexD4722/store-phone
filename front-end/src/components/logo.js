import '../styles/logo.scss'
import LogoShop from '../assets/imgs/logo-dark.png'
import React from 'react';
function App() {
  return (
    <div className='logo-shop'>
        <img className='logo-shop__detail' src={LogoShop} alt="" />
    </div>
  );
}

export default App;
