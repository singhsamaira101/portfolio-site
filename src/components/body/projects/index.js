import React from 'react';
import {ProjectData} from '/Users/samairasingh/portfolio/src/components/data/projects'
import './projects.css';
import ProjectCard from './project-card';
import Separator from '/Users/samairasingh/portfolio/src/components/common/separator/index';

function Projects() {
    const data= ProjectData;
    return (
    <div className='projects'>
        <Separator />
        <label className='section-title'>Projects</label>
        <div>
            {data.map((project) => {
                return <ProjectCard project={project}/>;
            })}

        </div>
    </div>
    );
}
export default Projects;