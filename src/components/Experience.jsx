import { useState } from 'react';

function Experience({onExp}) {
    const [expData, setExpData] = useState({school: "", titleOfStudy: "", dateOfStudy: ""});

    return (
        <>
            <input
            type="text"
            value={expData.school}
            onChange={(e) => {
                setExpData({...expData, school: e.target.value});
            }}
            />
            <input
            type="text"
            value={expData.titleOfStudy}
            onChange={(e) => {
                setExpData({...expData, titleOfStudy: e.target.value});
            }}
            />
            <input
            type="text"
            value={expData.dateOfStudy}
            onChange={(e) => {
                setExpData({...expData, dateOfStudy: e.target.value});
            }}
            />
            <button
            onClick={() => {
                onExp(expData);
               }}>
                Submit
            </button >
        </>
    );

};

export {Experience};