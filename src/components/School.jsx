import { useState } from 'react';

function School({onEdu, index="false", school="", titleOfStudy="", dateOfStudy=""}) {
    const [eduData, setEduData] = useState({school, titleOfStudy, dateOfStudy});

    return (
        <>
            <input
            type="text"
            value={eduData.school}
            onChange={(e) => {
                setEduData({...eduData, school: e.target.value});
            }}
            />
            <input
            type="text"
            value={eduData.titleOfStudy}
            onChange={(e) => {
                setEduData({...eduData, titleOfStudy: e.target.value});
            }}
            />
            <input
            type="text"
            value={eduData.dateOfStudy}
            onChange={(e) => {
                setEduData({...eduData, dateOfStudy: e.target.value});
            }}
            />
            <button
            onClick={() => {
                index==="false" ? onEdu(eduData) : onEdu(eduData, index);
               }}>
                Submit
            </button >
        </>
    );

};

export {School};