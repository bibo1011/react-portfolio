import React from 'react';

function Resume() {
    return(
        <div className="resume">
            <div className="list">
                <h6>List of proficiencies</h6>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>Javascript</li>
                    <li>API</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>ORM</li>
                    <li>MVC</li>
                    <li>PWA</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="download">
                <h6> download my resume here <a target="_blank" href={require(`../../assets/documents/blue VehTestOps.pdf`).default} ><i class="far fa-file"></i></a></h6>
            </div>
        </div>
    )   
}

export default Resume