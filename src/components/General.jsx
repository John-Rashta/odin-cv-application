import { useState } from 'react';
import '../styles/general.css';

function General({onGen, index="false", name="", phone="", email=""}) {
    const [genData, setGenData] = useState({name, phone, email});

    return (
        <div className="addGeneral">
            <h2>General</h2>
            <label >
                Name:
                <input
                type="text"
                value={genData.name}
                onChange={(e) => {
                    setGenData({...genData, name: e.target.value});
                }}
                />
            </label>
            <label >
                Phone:
                <input
                type="text"
                value={genData.phone}
                onChange={(e) => {
                    setGenData({...genData, phone: e.target.value});
                }}
                />
            </label>
            <label >
                Email:
                <input
                type="text"
                value={genData.email}
                onChange={(e) => {
                    setGenData({...genData, email: e.target.value});
                }}
                />
            </label>
            <button
            onClick={() => {
                index==="false" ? onGen(genData, "general") : onGen(genData, "general", index);
               }}>
                Submit
            </button >
        </div>
    );

};



export {General};