import { useState } from 'react';
import '../styles/experience.css';

function Experience({onExp, index="false", companyName="", position="", responsibilities="", dateStart="", dateEnd=""}) {
    const [expData, setExpData] = useState({companyName, position, responsibilities, dateStart, dateEnd});

    return (
        <div className="addExperience">
            <h2>Experience</h2>
            <label>
                Company Name:
                <input
                type="text"
                value={expData.companyName}
                onChange={(e) => {
                    setExpData({...expData, companyName: e.target.value});
                }}
                />
            </label>
            <label>
                Position:
                <input
                type="text"
                value={expData.position}
                onChange={(e) => {
                    setExpData({...expData, position: e.target.value});
                }}
                />
            </label>
            <label className="responsiDiv">
                Responsibilities:
                <textarea
                rows="3"
                cols="30"
                value={expData.responsibilities}
                onChange={(e) => {
                    setExpData({...expData, responsibilities: e.target.value});
                }}
                />
            </label>
            <div className="dateDiv">
                <label>
                    Start Date:
                    <input
                    type="date"
                    value={expData.dateStart}
                    onChange={(e) => {
                        setExpData({...expData, dateStart: e.target.value});
                    }}
                    />
                </label>
                <label>
                    End Date:
                    <input
                    type="date"
                    value={expData.dateEnd}
                    onChange={(e) => {
                        setExpData({...expData, dateEnd: e.target.value});
                    }}
                    />
                </label>
            </div>
            <button
            onClick={() => {
                index==="false" ? onExp(expData, "experience") : onExp(expData, "experience", index);
                setExpData({companyName:"", position:"", responsibilities:"", dateStart:"", dateEnd:""});
               }}>
                Submit
            </button >
        </div>
    );

}

export {Experience};