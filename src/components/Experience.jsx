import { useState } from 'react';

function Experience({onExp, index="false", companyName="", position="", responsibilities="", dateStart="", dateEnd=""}) {
    const [expData, setExpData] = useState({companyName, position, responsibilities, dateStart, dateEnd});

    return (
        <>
            <input
            type="text"
            value={expData.companyName}
            onChange={(e) => {
                setExpData({...expData, companyName: e.target.value});
            }}
            />
            <input
            type="text"
            value={expData.position}
            onChange={(e) => {
                setExpData({...expData, position: e.target.value});
            }}
            />
            <textarea
            rows="5"
            cols="30"
            value={expData.responsibilities}
            onChange={(e) => {
                setExpData({...expData, responsibilities: e.target.value});
            }}
            />
            <input
            type="text"
            value={expData.dateStart}
            onChange={(e) => {
                setExpData({...expData, dateStart: e.target.value});
            }}
            />
            <input
            type="text"
            value={expData.dateEnd}
            onChange={(e) => {
                setExpData({...expData, dateEnd: e.target.value});
            }}
            />
            <button
            onClick={() => {
                index==="false" ? onExp(expData) : onExp(expData, index);
               }}>
                Submit
            </button >
        </>
    );

}

export {Experience};