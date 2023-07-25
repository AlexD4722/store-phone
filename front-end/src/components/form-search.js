import '../styles/logo.scss'
import '../styles/form-search.scss'
import React from 'react';
function FormSearch() {
    return (
        <form className='form-search'>
            <div className='form-search__wrapper-search'>
                <div className='form-search__box-input'>
                    <input type="text" placeholder="Search your favorite product..." />
                </div>
                <div className='form-search__button'>
                    <button className='form-search__button-detail' type="button">
                        <span>search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default FormSearch;
