import { useState } from 'react';
import '../styles/education.css';

function School({onEdu, index="false", school="", titleOfStudy="", dateOfStudy=""}) {
    const [eduData, setEduData] = useState({school, titleOfStudy, dateOfStudy});

    return (
        <div className="addEducation">
            <h2>Education</h2>
            <label >
                School Name:
                <input
                type="text"
                value={eduData.school}
                onChange={(e) => {
                    setEduData({...eduData, school: e.target.value});
                }}
                />
            </label>
            <label >
                Title of Study:
                <input
                type="text"
                value={eduData.titleOfStudy}
                onChange={(e) => {
                    setEduData({...eduData, titleOfStudy: e.target.value});
                }}
                />
            </label>
            <label >
                Date of Study:
                <input
                type="text"
                value={eduData.dateOfStudy}
                onChange={(e) => {
                    setEduData({...eduData, dateOfStudy: e.target.value});
                }}
                />
            </label>
            <button
            onClick={() => {
                index==="false" ? onEdu(eduData, "education") : onEdu(eduData, "education", index);
                setEduData({school:"", titleOfStudy:"", dateOfStudy:""});
               }}>
                Submit
            </button >
        </div>
    );

};

export {School};