import {UncontrolledOnOff} from './UncontrolledOnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    component: UncontrolledOnOff
};

const onChangeHandler = action('onChange')
export const OffMode = () => {
    return <UncontrolledOnOff onChange={onChangeHandler} defaultOn={false}/>
}
export const OnMode = () => {
    return <UncontrolledOnOff onChange={onChangeHandler} defaultOn={true}/>
}
