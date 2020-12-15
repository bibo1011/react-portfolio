import React from 'react';

function About() {
    return (
        <section>
            <div className="brand">
                <p>
                    Hi! I'm <span className="blue">Blue</span>... <br></br>
                As of this moment, I'm a Spacecraft Technician at Lockheed Martin <br></br>
                At the same time, a student of UC Berkeley Full Stack Coding Bootcamp <br></br>
                Mechanically inclined, a handyman, future of software...
                </p >
                <img className="iam" alt="blue" src={require('../../assets/images/me.png').default }/>
            </div >
        </section >
    )
}

export default About
