// import React from 'react';
// import Addons from '../components/addons';
// import LogoShop from '../components/logo';
// import LogoShopLight from '../components/logo-light';
// import FormSearch from '../components/form-search';
// import '../styles/wrap-header.scss'
// import '../styles/index.scss';

// class Header extends React.Component {
//     handleOpenMenuExtend = () => {
//         const layout = document.querySelector(".wrapper-header-layout");
//         const menuExtend = document.querySelector(".wrapper-header-menu-extend");
//         layout.style.display = "block";
//         menuExtend.style.transform = "translateX(0)";
//     }
//     handleCloseMenuExtend = () => {
//         const layout = document.querySelector(".wrapper-header-layout");
//         const menuExtend = document.querySelector(".wrapper-header-menu-extend");
//         layout.style.display = "none";
//         menuExtend.style.transform = "translateX(-100%)";
//     }
//     render() {
//         return (
//             <header>
//                 <div className='xo-container'>
//                     <div className='wrapper-header wrapper-header--tablet'>
//                         <LogoShop />
//                         <FormSearch />
//                         <Addons />
//                     </div>
//                     <div className='wrapper-header-mobile'>
//                         <div onClick={(event) => this.handleOpenMenuExtend()} className='wrapper-header-mobile__btn-toggle-open'>
//                             <i className="bi bi-list"></i>
//                         </div>
//                         <LogoShop />
//                         <div className="header-addons__icon">
//                             <i className="bi bi-cart"></i>
//                             <span className='header-addons__icon-quantity'>
//                                 <span className='header-addons__icon-quantity-detail header-addons__icon-quantity-detail--cart'>
//                                     0
//                                 </span>
//                             </span>
//                         </div>
//                     </div>
//                     <div onClick={(event) => this.handleCloseMenuExtend()} className='wrapper-header-layout'>
//                     </div>
//                     <div onClick={(event) => this.handleCloseMenuExtend()} className='wrapper-header-menu-extend'>
//                         <div className='wrapper-header-menu-extend__row wrapper-header-menu-extend__header'>
//                             <LogoShopLight />
//                             <div className='wrapper-header-menu-extend__btn-close-menu'>
//                                 <i className="bi bi-x"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         );
//     }
// }
// export default Header
import React from 'react';
import Addons from '../components/addons';
import LogoShop from '../components/logo';
import LogoShopLight from '../components/logo-light';
import FormSearch from '../components/form-search';
import '../styles/wrap-header.scss'
import '../styles/index.scss';
function Header() {
    function handleOpenMenuExtend(){
        const layout = document.querySelector(".wrapper-header-layout");
        const menuExtend = document.querySelector(".wrapper-header-menu-extend");
        layout.style.display = "block";
        menuExtend.style.transform = "translateX(0)";
    }
    function handleCloseMenuExtend(){
        const layout = document.querySelector(".wrapper-header-layout");
        const menuExtend = document.querySelector(".wrapper-header-menu-extend");
        layout.style.display = "none";
        menuExtend.style.transform = "translateX(-100%)";
    }
    return (
        <header>
            <div className='xo-container'>
                <div className='wrapper-header wrapper-header--tablet'>
                    <LogoShop />
                    <FormSearch />
                    <Addons />
                </div>
                <div className='wrapper-header-mobile'>
                    <div onClick={(event) => handleOpenMenuExtend()} className='wrapper-header-mobile__btn-toggle-open'>
                        <i className="bi bi-list"></i>
                    </div>
                    <LogoShop />
                    <div className="header-addons__icon">
                        <i className="bi bi-cart"></i>
                        <span className='header-addons__icon-quantity'>
                            <span className='header-addons__icon-quantity-detail header-addons__icon-quantity-detail--cart'>
                                0
                            </span>
                        </span>
                    </div>
                </div>
                <div onClick={(event) => handleCloseMenuExtend()} className='wrapper-header-layout'>
                </div>
                <div onClick={(event) => handleCloseMenuExtend()} className='wrapper-header-menu-extend'>
                    <div className='wrapper-header-menu-extend__row wrapper-header-menu-extend__header'>
                        <LogoShopLight />
                        <div className='wrapper-header-menu-extend__btn-close-menu'>
                            <i className="bi bi-x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
