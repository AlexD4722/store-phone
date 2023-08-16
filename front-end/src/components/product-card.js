import '../styles/product-card.scss';
import React from 'react';
function Product(props) {
    return (
        <div className='product-card'>
            <div className='product-card__img-wrap'>
                <div className='product-card__img-default'>
                    <img src={props.imgDefault} alt="" />
                </div>
                <div className='product-card__img-sub'>
                    <img src={props.imgHover} alt="" />
                </div>
                <button type="button" className="product-card__box-wishlist">
                    <i class="bi bi-heart"></i>
                </button>
            </div>
            <div className='product-card__main'>
                <div className='product-card__content-wrapper'>
                    <h3 class="product-card__product-title"> {props.title}</h3>
                    <div className='product-card__product-rating'>
                        <div className='product-card__box-start-rating'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>
                        <span className='product-card__count-rating'>
                            {1}
                        </span>
                    </div>
                    <div className='product-card__product-price-cart'>
                        <div className='product-card__price'>
                            <span className='product-card__price-old'>
                                ${props.priceOld}
                            </span>
                            <span className='product-card__price-new'>
                                ${props.priceNew}
                            </span>
                        </div>
                        <div className='product-card__box-btn-add'>
                            <div className='product-card__btn-add-cart'>
                                <i className="bi bi-cart"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-card__footer'>
                <ul className='product-footer-details'>
                    <li>Screen Size 10.9 in</li>
                    <li> Operating System Apple iOS</li>
                    <li>Product Length 9.74 in</li>
                </ul>
            </div>
        </div >
    );
}
export default Product