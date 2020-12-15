import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // contact form validation
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
        console.log('errorMessage', errorMessage);
        
    }
    console.log(formState)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <h3>Contact Me</h3>
                {/* // name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                {/* // email input */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                {/* // message text area */}
                <div>
                    <label htmlFor="name">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;