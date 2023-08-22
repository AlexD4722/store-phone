import { Link } from 'react-router-dom';
import '../styles/table-product.scss';
function TableProduct(props) {
    return (
        <table className='table-product'>
            <thead>
                <tr>
                    <th className='table-product__colum-product'>Product</th>
                    <th className='table-product__colum-pice'>Price</th>
                    <th className='table-product__colum-quantity'>Quantity</th>
                    <th className='table-product__colum-subtotal'>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item, index) => {
                    console.log(item.product, "||||||||||||||")
                    return (
                        <tr className='table-product__row-item' key={index}>
                            <td className='table-product__value-product' data-label="Product:">
                                <div className='table-product__img-item'>
                                    <div className='table-product__img-detail'>
                                        <img src={item.product.images[0]} alt="images product" />
                                    </div>
                                </div>
                                <div className='table-product__title-item'>
                                    <Link>
                                        <h3>{item.product.name}</h3>
                                    </Link>
                                </div>
                            </td>
                            <td className='table-product__value-pice' data-label="Price:">
                                <p><span>$</span>{item.product.selling_price}</p>
                            </td>
                            <td className='table-product__value-quantity' data-label="Quantity:">
                                <div className="table-product__info-quantity-detail">
                                    <div
                                        className="table-product__btn-dash-quantity"
                                    // onClick={handleDecreseQuantity}
                                    ></div>
                                    <input
                                        type="number"
                                        name="quantity"
                                        min="0"
                                        step="1"
                                    // onChange={handleChangeQuantity}
                                    // value={valueQuantity}
                                    />
                                    <div
                                        className="table-product__btn-plus-quantity"
                                    // onClick={handleIncreseQuantity}
                                    ></div>
                                </div>
                            </td>
                            <td className='table-product__value-subtotal' data-label="Subtotal:">item Subtotal</td>
                            <td className='table-product__btn-remove' data-label=""><span>Remove</span><i className="bi bi-x"></i></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableProduct;