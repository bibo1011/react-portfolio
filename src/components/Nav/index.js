import React from 'react';

function Nav(props) {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {tabs.map(tab => (
                            <li className="nav-item active" key={tab}>
                                <a href={'#' + tab.toLowerCase()}
                                    // Whenever a tab is clicked on,
                                    // the current page is set through the handlePageChange props.
                                    onClick={() => props.handlePageChange(tab)}
                                    className={
                                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                    }
                                > {tab}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <h2><a href="/"><span className="bluenav">BLUE  </span>RAMAILA ABAD</a></h2>
                </div>
            </nav>

        </div>
    );
}

export default Nav;