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
                color: item.product.color,
                capacity: item.product.capacity,
                selling_price: item.product.selling_price,
                quantity: item.quantity,
                totalPrice: parseFloat(item.product.selling_price) * parseFloat(item.quantity),
            }
        )
    });

    useEffect(() => {
        if (listReceipt) {
            setCart(listReceipt);
        }

    }, [props])
    // const test = document.querySelector(".table-product__btn-plus-quantity");
    // test.addEventListener("click", ("4") => {
    //     console.log("okokeokkoke")
    // });


    const increaseQuantity = (productId) => {
        setCart(prevProducts =>
            prevProducts.map(product => {
                if (product.id === productId) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                        totalPrice: parseFloat(product.selling_price) * parseFloat(product.quantity + 1),
                    };
                }
                return product;
            })
        );
    };
    const decreaseQuantity = (productId) => {
        setCart(prevProducts =>
            prevProducts.map(product => {
                if (product.id === productId && product.quantity > 1) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                        totalPrice: parseFloat(product.selling_price) * parseFloat(product.quantity - 1)
                    };
                }
                return product;
            })
        );
    };
    const handleChangeQuantity = (productId, newQuantity) => {
        setCart(prevProducts =>
            prevProducts.map(product => {
                if (product.id === productId) {
                    if (newQuantity <= 0) {
                        return {
                            ...product,
                            quantity: 1,
                            totalPrice: parseFloat(product.selling_price) * parseFloat(1),
                        };
                    }
                    return {
                        ...product,
                        quantity: newQuantity,
                        totalPrice: parseFloat(product.selling_price) * parseFloat(newQuantity),
                    };
                }
                return product;
            })
        );
    };
    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.totalPrice, 0);
    };

    // console.log("cart", cart)
    // const increaseQuantity = (productId) => {
    //     console.log("running", productId);
    // };



    // const handleChangeQuantity = (event,idProduct) => {
    //     const inputValue = event.target.value;
    //     cart.map((item)=>{
    //         if(item.quantity === idProduct){
    //             console.log("it is id of: ",item.quantity)
    //         }
    //     })
    //     if (inputValue < 0) {
    //         setValueQuantity(1);
    //     } else {
    //         setValueQuantity(inputValue);
    //     }
    // };
    // const handleDecreseQuantity = (event) => {
    //     if (parseInt(valueQuantity) < 0 || !valueQuantity) {
    //         setValueQuantity(1);
    //     }
    //     if (valueQuantity >= 2) {
    //         setValueQuantity((prevValue) => prevValue - 1);
    //     }
    // };
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
                        console.log(item, "||||||||||||||")
                        return (
                            <tr className='table-product__row-item' key={index}>
                                <td className='table-product__value-product' data-label="Product:">
                                    <div className='table-product__img-item'>
                                        <div className='table-product__img-detail'>
                                            <img src={item.images[0]} alt="images product" />
                                        </div>
                                    </div>
                                    <div className='table-product__title-item'>
                                        <Link>
                                            <h3>{item.name} {item.capacity} {item.color}</h3>
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
                                            onClick={() => decreaseQuantity(item.id)}
                                        ></div>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min="0"
                                            step="1"
                                            onChange={(e) => {
                                                const newValue = e.target.value;
                                                handleChangeQuantity(item.id, newValue)
                                            }}
                                            value={item.quantity}
                                        />
                                        <div
                                            onClick={() => increaseQuantity(item.id)}
                                            className="table-product__btn-plus-quantity"
                                        ></div>
                                    </div>
                                </td>
                                <td className='table-product__value-subtotal' data-label="Subtotal:"><span>$</span>{item.totalPrice}</td>
                                <td className='table-product__btn-remove' data-label=""><span>Remove</span></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <div className="cart-totals__box-comp">
                <div className="cart-totals__name-comp cart-totals__name-comp--total">
                    <h4>Total</h4>
                    <div className="cart-totals__total-price">
                        <p><span>$</span>{calculateTotalPrice()}</p>
                    </div>
                </div>
            </div>
        </table>
    )
}

export default TableProduct;