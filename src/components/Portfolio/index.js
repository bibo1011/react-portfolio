import React, {useState} from 'react';
import Project from '../Project'
import projects from '../../projects.json'


function Portfolio() {
    
    const [projectList, setProjectList] = useState(projects)
    return (
        <section>
            {projectList.map(project => (            
                <Project
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    link={project.link}
                    github={project.github}
                />
            ))}  
        </section>
    );
}

export default Portfolio