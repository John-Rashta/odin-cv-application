import { useState } from 'react';

function GeneralView({data, index, onEdit}) {
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
            <h3>Name</h3>
            <div>{data[0].name}</div>
            <h3>Phone</h3>
            <div>{data[0].phone} </div>
            <h3>Email</h3>
            <div>{data[0].email} </div>
        </div>
        {isHover && (
            <div>
                <button onClick={() => onEdit("general", index)}>Edit</button >
            </div>
        )}
    </div>
    )
};

export {GeneralView};