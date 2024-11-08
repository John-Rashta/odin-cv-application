import { useState } from 'react';

function Education({onEdu}) {
    const [eduData, setEduData] = useState({name: "", phone: "", email: ""});

    return (
        <>
            <input
            type="text"
            value={eduData.name}
            onChange={(e) => {
                setEduData({...eduData, name: e.target.value});
            }}
            />
            <input
            type="text"
            value={eduData.phone}
            onChange={(e) => {
                setEduData({...eduData, phone: e.target.value});
            }}
            />
            <input
            type="text"
            value={eduData.email}
            onChange={(e) => {
                setEduData({...eduData, email: e.target.value});
            }}
            />
            <button
            onClick={() => {
                onEdu(eduData);
               }}>
                Submit
            </button >
        </>
    );

};



export {Education};