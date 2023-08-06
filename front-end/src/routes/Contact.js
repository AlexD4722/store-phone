import React, { useState } from 'react';
import '../styles/contact.scss';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!name.trim()) {
            validationErrors.name = 'Please enter your name.';
        }

        if (!email.trim()) {
            validationErrors.email = 'Please enter your email address.';
        } else if (!isValidEmail(email)) {
            validationErrors.email = 'Please enter a valid email address.';
        }

        if (!subject.trim()) {
            validationErrors.subject = 'Please enter your subject.';
        }

        if (!message.trim()) {
            validationErrors.message = 'Please enter your message.';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setErrors({});
    };

    const isValidEmail = (email) => {
        // const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    };

    return (
        <>
            <div className="container mt-5">
                <div className='questions-and-contact'>
                    <span className='questions-and-contact__title'>You can ask us questions !</span>
                    <p className='questions-and-contact__description'>Contact us for all your questions and opinions, or you can solve your problems in a shorter time with our contact offices.</p>
                </div>
                <div className='contactus mt-5 mb-5'>
                    <div className="row">
                        <div className="col-4">
                            <div className='contactus'>
                                <p className='contactus__country'>United States</p>
                                <h4 className='contactus__country-office'>United States Office</h4>
                                <p className='contactus__address'>205 Middle Road, 2nd Floor, New York</p>
                                <p className='contactus__phone'>+1 1234 567 88</p>
                                <a className='contactus__link' href="#">info@example.com</a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='contactus'>
                                <p className='contactus__country'>United Kingdom</p>
                                <h4 className='contactus__country-office'>United Kingdom Office</h4>
                                <p className='contactus__address'>79 Manor Way, 2nd Floor, Great Fransham</p>
                                <p className='contactus__phone'>+49 1234 567 88</p>
                                <a className='contactus__link' href="#">contact@example.com</a>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className='contactus'>
                                <p className='contactus__country'>Germany</p>
                                <h4 className='contactus__country-office'>Germany Office</h4>
                                <p className='contactus__address'>Holstenwall 86, Sachsen-Anhalt, Zschornewitz</p>
                                <p className='contactus__phone'>+44 1234 567 88</p>
                                <a className='contactus__link' href="#">info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 p-3">
                        <div className="contact-form p-5">
                            <h3 className="contact_form_title">Get in Touch</h3>
                            <p className="contact_form_dec">Quisque mattis tortor eu tristique sodales. Aenean sit amet justo nec sem vestibulum.</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name :</label>
                                    {errors.name && <p className="error">{"* " + errors.name}</p>}
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    {errors.email && <p className="error">{"* " + errors.email}</p>}
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject:</label>
                                    {errors.subject && <p className="error">{errors.subject}</p>}
                                    <input
                                        type="text"
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    {errors.message && <p className="error">{errors.message}</p>}
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    ></textarea>

                                </div>
                                <button type="submit">SEND</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-6 p-5">
                        <div className="heading-title mb-5">
                            <p className="heading-title__description">Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod dictum elit.</p>
                        </div>

                        <div className='img_contact'>
                            <img src="https://k4j3j2s7.rocketcdn.me/machic/wp-content/uploads/2021/10/contact-1.jpg" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Contact;