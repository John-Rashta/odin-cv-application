import { useState } from 'react';
import { ExperienceView } from './ExperienceView';
import { GeneralView } from './GeneralView';
import { EducationView } from './EducationView';
import '../styles/applicationView.css';

function ApplicationView({data, onEdit, onDelete}) {

    return (
        <div className="cvView">
            <div>
                <h2>General</h2>
                {data.general.length > 0 && <GeneralView index={0} data={data.general} onEdit={onEdit} />}
            </div>
            <div>
                <h2>Education</h2>
                {data.education.length > 0 && data.education.map((value, index) => 
                <EducationView data={value} key={"school-" + index } onEdit={onEdit} onDelete={onDelete} index={index} />
                  )}
            </div>
            <div>
                <h2>Experience</h2>
                {data.experience.length > 0 && data.experience.map((value, index) => 
                <ExperienceView data={value} key={"experience-" + index} onEdit={onEdit} onDelete={onDelete} index={index} />  
                )}
            </div>
            
            
           
        </div>
    )

}

export {ApplicationView};