import { useState } from 'react';

function EducationView({data, index, onEdit, onDelete}) {
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
            <h3>School Name</h3>
            <div>{data.school}</div>
            <h3>Title of Study</h3>
            <div>{data.titleOfStudy} </div>
            <h3>Date of Study</h3>
            <div>{data.dateOfStudy} </div>
        </div>
        {isHover && (
            <div>
                <button onClick={() => onEdit("education", index)}>Edit</button >
                <button  onClick={() => onDelete("education", index)}>Delete</button>
            </div>
        )}
    </div>

    )
};

export {EducationView};