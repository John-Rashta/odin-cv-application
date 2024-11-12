import { useState } from 'react';
import '../styles/experienceView.css';

function ExperienceView({data, index, onEdit, onDelete}) {
    const [isHover, setIsHover] = useState(false);
    const whenMouseOver = () => {
        setIsHover(true);
    };
    
      const whenMouseOut = () => {
        setIsHover(false);
    };

    return (
        <div onMouseOver={whenMouseOver} onMouseOut={whenMouseOut}>
            <div > 
                <h3>Company Name</h3>
                <div>{data.companyName}</div>
                <h3>Position</h3>
                <div>{data.position}</div>
                <h3>Responsibilities</h3>
                <div>{data.responsibilities}</div>
                <div className="experienceDates">
                    <div>
                        <h3>Start Date</h3>
                        <div>{data.dateStart}</div>
                    </div>
                    <div>
                        <h3>End Date</h3>
                        <div>{data.dateEnd}</div>
                    </div>
                </div>
            </div>
            {isHover && (
                <div>
                    <button onClick={() => onEdit("experience", index)}>Edit</button >
                    <button  onClick={() => onDelete("experience", index)}>Delete</button>
                </div>
            )}
        </div>

    )

};

export {ExperienceView};