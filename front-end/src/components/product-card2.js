import '../styles/product-flex.scss';
import React from 'react';
import product01 from '../assets/imgs/newapple2-400x400.jpg';
import product02 from '../assets/imgs/newapple3-400x400.jpg';
function ProductFlex() {
    return (
        <div>
            <div className='product-flex'>
                <div className='product-flex__wrapper'>
                    <div className='product-flex__img-wrapper'>
                        <div className='product-flex__img-default'>
                            <img src={product02} alt="" />
                        </div>
                        <div className='product-flex__img-sub'>
                            <img src={product01} alt="" />
                        </div>
                    </div>
                    <div className='product-flex__content'>
                        <h3 className='product-flex__product-title'>
                            New Apple iPhone 12 (128GB – 4GB RAM) – White
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
                            <span class="product-flex__price-new">$629.99</span>
                            <span class="product-flex__price-old">$699.99</span>
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