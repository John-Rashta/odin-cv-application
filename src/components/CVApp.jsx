import { useState } from 'react';
import { General } from './General';
import { School } from './School';
import { Experience } from './Experience';
import { ApplicationView } from './ApplicationView';
import '../styles/CVApp.css';

function CVApp() {
    const [mainData, setMainData] = useState({general: [], education: [], experience: []});
    const [changes, setChanges] = useState([]);

    function setData(info, dataVal, index="None") {
        const newInfo = dataVal === "general" ? [info] : [...mainData[dataVal]];
        if (index === "None" && dataVal !== "general") {
            newInfo.push(info);
        } else if (index !== "None") {
            helperRemoveEdit(dataVal, index);
            if (dataVal !== "general") {
                newInfo[index] = info;
            }

        }
        setMainData({...mainData, [dataVal]: newInfo});
    }

    function helperRemoveEdit(dataVal, index) {
        const newChang = [...changes];
        const changesIndex = changes.findIndex((val) => val[0] === dataVal && val[1] === index);
        if (changesIndex === -1) {
            return;
        }
        newChang.splice(changesIndex, 1);
        setChanges(newChang);
    }

    function onDelete(value, index) {
        const newVal = [...mainData[value]];
        helperRemoveEdit(value, index);
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
        <div className="mainContainer">
            <header>
                <h1>CV Application</h1>
            </header>
            <main>
                <div className="sideBar">
                    {mainData.general.length < 1 && <General onGen={setData} />}
                    <School onEdu={setData} />
                    <Experience onExp={setData} />
                    {changes.length > 0 && changes.map((val) => {
                        if (val[0] === "general") {
                            return <General key={val[0] + "-" + val[1]} onGen={setData} index={val[1]} {...mainData.general[val[1]]} />
                        } else if (val[0] === "education") {
                            return <School key={val[0] + "-" + val[1]}  onEdu={setData} index={val[1]} {...mainData.education[val[1]]} />
                        } else {
                            return <Experience key={val[0] + "-" + val[1]} onExp={setData} index={val[1]} {...mainData.experience[val[1]]} />

                        }
                    }) } 
                </div>
                <div className="mainView">
                    <ApplicationView data={mainData} onEdit={onEdit} onDelete={onDelete} />
                </div>
            </main>

        </div>
    )

};


export {CVApp};