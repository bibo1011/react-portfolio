import React from 'react';

function Nav() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <nav>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#about">:about</a>
                        </li>
                        <li>
                            {/* <span>:work</span> */}
                        </li>
                        {/* {categories.map((category) => (
                            <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                                }`} key={category.name}>
                                <span
                                    onClick={() => {
                                        setCurrentCategory(category)
                                    }}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li> */}
                        {/* ))} */}
                    </ul>
                </div>
            </nav>
            <h2><a href="/">BLUE RAMAILA ABAD</a></h2>
        </header>
    );
}

export default Nav;