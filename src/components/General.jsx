import { useState } from 'react';

function General({onGen}) {
    const [genData, setGenData] = useState({companyName: "", position: "", responsibilities: "", dateStart: "", dateEnd: ""});

    return (
        <>
            <input
            type="text"
            value={genData.companyName}
            onChange={(e) => {
                setGenData({...genData, companyName: e.target.value});
            }}
            />
            <input
            type="text"
            value={genData.position}
            onChange={(e) => {
                setGenData({...genData, position: e.target.value});
            }}
            />
            <textarea
            rows="5"
            cols="30"
            value={genData.responsibilities}
            onChange={(e) => {
                setGenData({...genData, responsibilities: e.target.value});
            }}
            />
            <input
            type="text"
            value={genData.dateStart}
            onChange={(e) => {
                setGenData({...genData, dateStart: e.target.value});
            }}
            />
            <input
            type="text"
            value={genData.dateEnd}
            onChange={(e) => {
                setGenData({...genData, dateEnd: e.target.value});
            }}
            />
            <button
            onClick={() => {
                onGen(genData);
               }}>
                Submit
            </button >
        </>
    );

}

export {General};