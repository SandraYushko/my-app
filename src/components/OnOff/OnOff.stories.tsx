import {OnOff} from './OnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';



export default {
    title: 'OnOff stories',
    component: OnOff
};


export const On = () => <OnOff on={true} onChange={action('on or off clicked')}/>
export const Off = () => <OnOff on={false} onChange={action('on or off clicked')}/>
export const ChangeOnOff = () => {
    const [value, setValue] = useState(true)
    return <OnOff on={value} onChange={()=>setValue(!value)}/>
}




