import { useState } from 'react';
import { General } from './General';
import { School } from './School';
import { Experience } from './Experience';

function CVApp() {
    const [mainData, setMainData] = useState({general: [], education: [], experience: []});
    const [changes, setChanges] = useState({edit: [], delete: []});

    function setGeneral(info, index="None") {
        const newGen = [info];
        setMainData({...mainData, general: newGen });
    }

    function setSchool(info, index="None") {
        const newEdu = [...mainData.education];
        index === "None" ? newEdu.push(info): newEdu[index] = info;
        setMainData({...mainData, education: newEdu});
    }

    function setExperience(info, index="None") {
        const newExp = [...mainData.experience];
        index === "None" ? newExp.push(info): newExp[index] = info;
        setMainData({...mainData, experience: newExp});
    }


    return (
        <>
            <div>
                <School onEdu={setSchool} />
                <Experience onExp={setExperience} />
                <General onGen={setGeneral} />
            </div>
            <div>
                <div> {mainData.experience.length > 0 ? mainData.experience[0].companyName : null}
                </div>
                <div>{mainData.education.length > 0 ? mainData.education[0].school : null} </div>
                <div>{mainData.general.length > 0 ? mainData.general[0].name : null} </div>
            </div>

        </>
    )

};


export {CVApp};