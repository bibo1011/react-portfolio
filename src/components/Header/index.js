import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Nav from '../Nav';
import Resume from '../Resume';

function Header() {
    // Using useState, set the default value for currentPage to 'About'
    const [currentPage, handlePageChange] = useState('About');

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <ContactForm />;
            case 'Resume':
                return <Resume/>
            default:
                return <About/>;
        }
    };

    return (
        <header>
            {/* Pass the state value and the setter as props to Nav */}
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Call the renderPage function passing in the currentPage */}
            <div>{renderPage(currentPage)}</div>
        </header>
    );
}

export default Header