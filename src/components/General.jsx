import { useState } from 'react';

function General({onGen, index="false", name="", phone="", email=""}) {
    const [genData, setGenData] = useState({name, phone, email});

    return (
        <>
            <input
            type="text"
            value={genData.name}
            onChange={(e) => {
                setGenData({...genData, name: e.target.value});
            }}
            />
            <input
            type="text"
            value={genData.phone}
            onChange={(e) => {
                setGenData({...genData, phone: e.target.value});
            }}
            />
            <input
            type="text"
            value={genData.email}
            onChange={(e) => {
                setGenData({...genData, email: e.target.value});
            }}
            />
            <button
            onClick={() => {
                index==="false" ? onGen(genData) : onGen(genData, index);
               }}>
                Submit
            </button >
        </>
    );

};



export {General};