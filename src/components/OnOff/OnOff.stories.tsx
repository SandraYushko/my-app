import {OnOff} from './OnOff';
import React, {useState} from 'react';



export default {
    title: 'OnOff stories',
    component: OnOff
};


export const On = () => <OnOff on={true} onChange={()=>{}}/>
export const Off = () => <OnOff on={false} onChange={()=>{}}/>
export const ChangeOnOff = () => {
    const [value, setValue] = useState(true)
    return <OnOff on={value} onChange={()=>setValue(!value)}/>
}




