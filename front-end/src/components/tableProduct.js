import { Link } from 'react-router-dom';
import '../styles/table-product.scss';
import { useState } from 'react';
import { useEffect } from 'react';
function TableProduct(props) {
    const [valueQuantity, setValueQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    // const [valueQuantity, setValueQuantity] = useState(props);
    const listReceipt = [];
    props.items.map((item, index) => {
        listReceipt.push(
            {
                id: item.product.id,
                images: item.product.images,
                name: item.product.name,
                price: item.product.selling_price,
                quantity: item.quantity,
                totalprice: parseFloat(item.selling_price) * parseFloat(item.quantity),
            }
        )
    });
    console.log("----------------------------", props)
    // useEffect(() => {
    //     if (listReceipt) {
    //         setCart(listReceipt);
    //     }
    // }, [])

    // const handleIncreseQuantity = (productId) => {
    //     setCart(prevCart => prevCart.map(product => {
    //         if (product.id === productId) {
    //             return { ...product, quantity: product.quantity + 1 };
    //         }
    //         return product;
    //     }));
    // };




    const handleChangeQuantity = (event) => {
        const inputValue = event.target.value;
        console.log("value", inputValue);
        if (inputValue < 0) {
            setValueQuantity(1);
        } else {
            setValueQuantity(inputValue);
        }
    };
    const handleDecreseQuantity = (event) => {
        if (parseInt(valueQuantity) < 0 || !valueQuantity) {
            setValueQuantity(1);
        }
        if (valueQuantity >= 2) {
            setValueQuantity((prevValue) => prevValue - 1);
        }
    };
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
                {
                    cart && cart.map((item, index) => {
                        // console.log(item.images, "||||||||||||||")
                        return (
                            <tr className='table-product__row-item' key={index}>
                                <td className='table-product__value-product' data-label="Product:">
                                    <div className='table-product__img-item'>
                                        <div className='table-product__img-detail'>
                                            <img src={""} alt="images product" />
                                        </div>
                                    </div>
                                    <div className='table-product__title-item'>
                                        <Link>
                                            <h3>{item.name}</h3>
                                        </Link>
                                    </div>
                                </td>
                                <td className='table-product__value-pice' data-label="Price:">
                                    <p><span>$</span>{item.selling_price}</p>
                                </td>
                                <td className='table-product__value-quantity' data-label="Quantity:">
                                    <div className="table-product__info-quantity-detail">
                                        <div
                                            className="table-product__btn-dash-quantity"
                                            onClick={handleDecreseQuantity}
                                        ></div>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min="0"
                                            step="1"
                                            onChange={handleChangeQuantity}
                                            value={valueQuantity}
                                        />
                                        <div
                                            className="table-product__btn-plus-quantity"
                                            // onClick={handleIncreseQuantity(item.id)}
                                        ></div>
                                    </div>
                                </td>
                                <td className='table-product__value-subtotal' data-label="Subtotal:">{ }</td>
                                <td className='table-product__btn-remove' data-label=""><span>Remove</span></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableProduct;