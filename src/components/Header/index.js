import React, { useState } from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Nav from '../Nav';
import Resume from '../Resume';

function Header(){
    const [contactSelected, setContactSelected] = useState(false)
    const [pages] = useState ([
        {
        name: ':portfolio'
        },
        {
        name: ':resume' 
        }
    ]);
    const [currentPage, setCurrentPage] = useState(pages[0])
    return (
        <div>
            <header>
                <Nav
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}
                ></Nav>
            </header>
            <main>
                {!contactSelected ? (
                    <>
                    <About></About>
                    <Portfolio></Portfolio>
                    <Resume></Resume>
                    </>
                ):(<ContactForm></ContactForm>)}
            </main>
        </div>    
    )
}

export default Header