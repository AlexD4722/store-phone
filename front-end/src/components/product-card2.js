import '../styles/product-flex.scss';
import React from 'react';
function ProductFlex(props) {
    return (
        <div>
            <div className='product-flex'>
                <div className='product-flex__wrapper'>
                    <div className='product-flex__img-wrapper'>
                        <div className='product-flex__img-default'>
                            <img src={props.imgDefault} alt="" />
                        </div>
                        <div className='product-flex__img-sub'>
                            <img src={props.imgHover} alt="" />
                        </div>
                    </div>
                    <div className='product-flex__content'>
                        <h3 className='product-flex__product-title'>
                            {props.title}
                        </h3>
                        <div className='product-flex__product-rating'>
                            <div className='product-flex__box-start-rating'>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <span className='product-flex__count-rating'>
                                1
                            </span>
                        </div>
                        <div class="product-flex__price">
                            <span class="product-flex__price-new">{props.priceNew}</span>
                            <span class="product-flex__price-old">{props.priceOld}</span>
                        </div>
                        <ul>
                            <li>Unlocked for All Carriers</li>
                            <li>6.1-inch (15.5 cm diagonal)</li>
                            <li>12MP TrueDepth front camera</li>
                        </ul>
                    </div>
                </div>
                <div className='product-flex__footer'>
                    <div className='product-flex__footer-wrapper'>
                        <div className='product-flex__footer-btn-add'>
                            <button type="button">
                                <span>add to card</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductFlex