import { useEffect, useState } from "react";
import { useCartContext } from "../store/hooks";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/checkout.scss';
function CheckOut() {
    const [formData, setFormData] = useState({
        userName: '',
        phone: '',
        address: ''
    });
    const [errors, setErrors] = useState({
        userName: "",
        phone: "",
        address: "",
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validateUserName = () => {
        if (!formData.userName) {
            setErrors((prev) => {
                return {
                    ...prev,
                    userName: 'Username is required',
                }
            });
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    userName: '',
                }
            });
        }
    }

    const validatePhone = () => {
        let phoneNumberRegex = /^0\d{9}$/;
        if (!formData.phone) {
            setErrors((prev) => {
                return {
                    ...prev,
                    phone: 'Phone is required',
                }
            });
        } else if (!(phoneNumberRegex).test(formData.phone)) {
            setErrors((prev) => {
                return {
                    ...prev,
                    phone: 'Invalid phone format',
                }
            });
        }
    }

    const validateAddress = () => {
        if (!formData.address) {
            setErrors((prev) => {
                return {
                    ...prev,
                    address: 'Address is required'
                }
            });
        } else {
            setErrors((prev) => {
                return {
                    ...prev,
                    address: ''
                }
            });
        }
    }




    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        // Validate username

        if (!formData.userName) {
            newErrors.userName = 'Username is required';
            isValid = false;
        }

        // Validate phone
        let phoneNumberRegex = /^0\d{9}$/;
        if (!formData.phone) {
            newErrors.phone = 'Phone is required';
            isValid = false;
        } else if (!(phoneNumberRegex).test(formData.phone)) {
            newErrors.phone = 'Invalid phone format';
            isValid = false;
        }

        // Validate password
        if (!formData.address) {
            newErrors.address = 'Address is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (validateUserName()) {
            console.log()
        }
        if (validateForm()) {
            // Do something with the valid data
            console.log('Form is valid:', formData);
        } else {
            console.log('Form is invalid');
        }
    };
    useEffect(() => {
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
    }, []);

    const cart = useCartContext()[0];
    return (
        <>
            {
                cart.length ?
                    <div className="xo-container">
                        <div className="checkout">
                            <div className="checkout__wrapper-form">
                                <form className="checkout__form-delivery-info" onSubmit={handleSubmit}>
                                    <div className="checkout__title-form">
                                        <h2>delivery information</h2>
                                    </div>
                                    <div className="checkout__main">
                                        <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>Enter your name</h3>
                                                </div>
                                                <input
                                                    onChange={handleChange}
                                                    onBlur={validateUserName}
                                                    type="text"
                                                    name="userName"
                                                    value={formData.userName}
                                                    className="checkout__input-fill" />
                                            </label>
                                            {errors.userName && <p className="checkout__messenger-error">{errors.userName}</p>}
                                        </div>
                                        <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>phone number</h3>
                                                </div>
                                                <input
                                                    onChange={handleChange}
                                                    onBlur={validatePhone}
                                                    name="phone"
                                                    value={formData.phone}
                                                    type="text" className="checkout__input-fill" />
                                            </label>
                                            {errors.phone && <span className="checkout__messenger-error">{errors.phone}</span>}
                                        </div>
                                        <div className="checkout__fill-box">
                                            <label>
                                                <div className="checkout__title-fill">
                                                    <h3>delivery address</h3>
                                                </div>
                                                <textarea
                                                    onChange={handleChange}
                                                    onBlur={validateAddress}
                                                    name="address"
                                                    value={formData.address}
                                                    className="checkout__input-fill checkout__input-fill--area"></textarea>
                                            </label>
                                            {errors.address && <span className="checkout__messenger-error">{errors.address}</span>}
                                        </div>
                                    </div>
                                    <Link to="/OrderReceived">
                                        <div className="checkout__box-btn-footer">
                                            <button type="submit" className="checkout__btn-checkout">
                                                <span className="checkout__btn-checkout-content">
                                                    continue
                                                </span>
                                            </button>
                                        </div>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <h1>Errol</h1>
            }
        </>
    );
}

export default CheckOut;
