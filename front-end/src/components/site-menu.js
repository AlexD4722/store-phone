import React from 'react';
import '../styles/site-menu.scss';
import '../styles/wrap-header.scss'
import '../styles/index.scss';

class SiteMenu extends React.Component {
    render() {
        return (
            <nav className='wrapper-menu'>
                <div className='xo-container'>
                    <ul className='site-menu'>
                        <li className='site-menu__item'>
                            <div className='site-menu__icon-item'>
                                <i className="bi bi-phone"></i>
                            </div>
                            <div className='site-menu__name-item'>
                                <span>cell phone</span>
                            </div>
                        </li>
                        <li className='site-menu__item'>
                            <div className='site-menu__icon-item'>
                                <i className="bi bi-file-spreadsheet"></i>
                            </div>
                            <div className='site-menu__name-item'>
                                <span>tablet</span>
                            </div>
                        </li>
                        <li className='site-menu__item'>
                            <div className='site-menu__icon-item'>
                                <i className="bi bi-headphones"></i>
                            </div>
                            <div className='site-menu__name-item'>
                                <span>accessory</span>
                            </div>
                        </li>
                        <li className='site-menu__item'>
                            <div className='site-menu__icon-item'>
                                <i className="bi bi-smartwatch"></i>
                            </div>
                            <div className='site-menu__name-item'>
                                <span>smartwatch</span>
                            </div>
                        </li>
                        <li className='site-menu__item'>
                            <div className='site-menu__name-item'>
                                <span>blog</span>
                            </div>
                        </li>
                        <li className='site-menu__item'>
                            <div className='site-menu__name-item'>
                                <span>contact</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default SiteMenu