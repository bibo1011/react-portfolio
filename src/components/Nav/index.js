import React from 'react';

function Nav(props) {
    const {  pages = [], currentPage, setCurrentPage, contactSelected, setContactSelected } = props
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#about" onClick={() => setContactSelected(false)} >:about</a>
                        </li>

                        {pages.map((page) => (
                            <li className={`nav-item active ${currentPage.name === page.name && 'navActive'}`} key={page.name}>
                                <a href={page.name} className="nav-link" onClick={() => {setContactSelected(false); setCurrentPage(page)}}
                                >
                                    {page.name}
                                </a>
                            </li>
                        ))}

                        <li className={`nav-item active ${contactSelected && 'navActive'}`}>
                            <a href="#contact" className="nav-link" onClick={() => { setContactSelected(true) }} >:contact</a >
                        </li>

                        
                    </ul>
                    <h2><a href="/"><span className="bluenav">BLUE  </span>RAMAILA ABAD</a></h2>
                </div>
            </nav>

        </div>
    );
}

export default Nav;