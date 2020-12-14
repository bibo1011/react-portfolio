import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // isValid conditional statement


    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
                // } else {
                //     setErrorMessage('');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
        console.log('errorMessage', errorMessage);
        // setFormState(
        //     {...formState, name: e.target.value}, 
        // )
    }
    console.log(formState)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
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

                    {/* conditional statement is the same above. */}
                    {/* if(errorMessage) {
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    } */}

                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
    // JSX
}

export default ContactForm;