import React from 'react';
import Project from '../Project'

function Portfolio(currentPage) {
    
    const { name } = currentPage;
    return (
        <section>
            <h1>{(name)}</h1>            
            <Project page={currentPage.name} />
        </section>
    );
}

export default Portfolio