import { useState } from 'react';

function ApplicationView(data, onEdit, onDelete) {

    return (
        <div>
            <GeneralView data={data.general} onEdit={onEdit} />
            <div>
                {data.education.map((value, index) => 
                <EducationView key={"school-" + index } onEdit={onEdit} onDelete={onDelete} index={index} />
                  )}
            </div>
            <div>
                {data.experience.map((value, index) => 
                <ExperienceView key={"experience-" + index} onEdit={onEdit} onDelete={onDelete} index={index} />  
                )}
            </div>
            
            
           
        </div>
    )

}


function ExperienceView(data, index, onEdit, onDelete) {
    const [isHover, setIsHover] = useState(false);
    const whenMouseOver = () => {
        setIsHover(true);
    };
    
      const whenMouseOut = () => {
        setIsHover(false);
    };

    return (
        <div onMouseOver={whenMouseOver} onMouseEnter={whenMouseOut}>
            <div > 
                <div>{data.companyName}</div>
                <div>{data.position}</div>
                <div>{data.responsibilities}</div>
                <div>{data.dateStart}</div>
                <div>{data.dateEnd}</div>
            </div>
            {isHover && (
                <div>
                    <button onClick={() => onEdit(["experience", index])}>Edit</button >
                    <button  onClick={() => onDelete(["experience", index])}>Delete</button>
                </div>
            )}
        </div>

    )

}


function EducationView(data, index, onEdit, onDelete) {
    const [isHover, setIsHover] = useState(false);
    const whenMouseOver = () => {
        setIsHover(true);
    };
    
      const whenMouseOut = () => {
        setIsHover(false);
    };

    return (
        <div onMouseOver={whenMouseOver} onMouseEnter={whenMouseOut}>
        <div > 
            <div>{data.school}</div>
            <div>{data.titleOfStudy} </div>
            <div>{data.dateOfStudy} </div>
        </div>
        {isHover && (
            <div>
                <button onClick={() => onEdit(["education", index])}>Edit</button >
                <button  onClick={() => onDelete(["education", index])}>Delete</button>
            </div>
        )}
    </div>

    )
}

function GeneralView(data, index, onEdit) {
    const [isHover, setIsHover] = useState(false);
    const whenMouseOver = () => {
        setIsHover(true);
    };
    
      const whenMouseOut = () => {
        setIsHover(false);
    };

    return (
        <div onMouseOver={whenMouseOver} onMouseEnter={whenMouseOut}>
        <div > 
            <div>{data[0].name}</div>
            <div>{data[0].phone} </div>
            <div>{data[0].email} </div>
        </div>
        {isHover && (
            <div>
                <button onClick={() => onEdit(["general", index])}>Edit</button >
            </div>
        )}
    </div>
    )
}

export {ApplicationView};