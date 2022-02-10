import React from 'react';
import './education.css';
import Separator from '/Users/samairasingh/portfolio/src/components/common/separator/index';
import { EducationData} from '/Users/samairasingh/portfolio/src/components/data/education';
import EducationCard from './education-card';

function Education() {
    const data= EducationData;
    return ( <div className='education'>
        <Separator />
        <label className='section-title'>Education</label>
        <div className='education-list'>
            {data.map((item)=>{
                return (
                    <EducationCard item={item} />
                )
            })}
            

        </div>
    </div>
    );
}
export default Education;