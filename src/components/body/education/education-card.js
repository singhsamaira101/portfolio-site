import React from "react";
import './education-card.css';

function EducationCard({ item }) {
    return (
        <div className='education-card'>
            <div className='education-info'>
            <label className='school-name'>{item.school}</label>

                <div className='education-dates'>
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>

                <br></br>
                <div className='education-desc'>
                    <label>{item.course}</label>
                    <br></br>
                    <label>{item.work}</label>
                    
                </div>
            </div>

        </div>
    );
}

export default EducationCard;