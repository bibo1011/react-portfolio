import React from 'react';

function Project(props) {

    return (
        <section className="wrapper">
            <div className="card">
                <div className="img-container">
                    <img alt={props.title} src={require(`../../assets/images/${props.id}/${props.id}.png`).default} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <strong>title:</strong> {props.title}
                        </li>
                        <li>
                            <strong>link:<a href={props.link} target="_blank"> {props.link} </a></strong>
                            
                        </li>
                        <li>
                            <strong>github:<a href={props.github} target="_blank"> {props.github} </a></strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Project