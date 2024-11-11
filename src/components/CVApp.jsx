import { useState } from 'react';
import { General } from './General';
import { School } from './School';
import { Experience } from './Experience';
import { ApplicationView } from './ApplicationView';


function CVApp() {
    const [mainData, setMainData] = useState({general: [], education: [], experience: []});
    const [changes, setChanges] = useState([]);
    

    function setGeneral(info, index="None") {
        const newGen = [info];
        if (index !== "None") {
            const newChang = [...changes];
            const changesIndex = changes.findIndex((val) => val[0] === "general" && val[1] === index);
            newChang.splice(changesIndex, 1);
            setChanges(newChang);
        }
        setMainData({...mainData, general: newGen });
    }

    function setSchool(info, index="None") {
        const newEdu = [...mainData.education];
        if (index === "None") {
            newEdu.push(info);
        } else {
            const newChang = [...changes];
            const changesIndex = changes.findIndex((val) => val[0] === "education" && val[1] === index);
            newChang.splice(changesIndex, 1);
            setChanges(newChang);
            newEdu[index] = info;
        }
        
        setMainData({...mainData, education: newEdu});
    }

    function setExperience(info, index="None") {
        const newExp = [...mainData.experience];
        
        if (index === "None") {
            newExp.push(info);
        } else {
            const newChang = [...changes];
            const changesIndex = changes.findIndex((val) => val[0] === "experience" && val[1] === index);
            newChang.splice(changesIndex, 1);
            setChanges(newChang);
            newExp[index] = info;
        }
        setMainData({...mainData, experience: newExp});
    }

    function onDelete(value, index) {
        const newVal = [...mainData[value]];
        newVal.splice(index, 1);
        setMainData({...mainData, [value]: newVal});
    }

    function onEdit(value, index) {
        if (changes.find((val => val[0] === value && val[1] === index))) {
            return;
        }
        const newEdit = [...changes];
        newEdit.push([value, index]);
        setChanges(newEdit);
    }


    return (
        <>
            <div>
                <School onEdu={setSchool} />
                <Experience onExp={setExperience} />
                {mainData.general.length < 1 && <General onGen={setGeneral} />}
                {changes.length > 0 && changes.map((val) => {
                    if (val[0] === "general") {
                        return <General key={val[0] + "-" + val[1]} onGen={setGeneral} index={val[1]} {...mainData.general[val[1]]} />
                    } else if (val[0] === "education") {
                        return <School key={val[0] + "-" + val[1]}  onEdu={setSchool} index={val[1]} {...mainData.education[val[1]]} />
                    } else {
                        return <Experience key={val[0] + "-" + val[1]} onExp={setExperience} index={val[1]} {...mainData.experience[val[1]]} />

                    }
                }) } 
            </div>
            <div>
                <ApplicationView data={mainData} onEdit={onEdit} onDelete={onDelete} />
            </div>

        </>
    )

};


export {CVApp};