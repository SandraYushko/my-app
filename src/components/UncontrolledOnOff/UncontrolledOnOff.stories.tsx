import {UncontrolledOnOff} from './UncontrolledOnOff';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    component: UncontrolledOnOff
};

const onChangeHandler = action('onChange')
export const CollapsedAccordion = () => {
    return <UncontrolledOnOff onChange={onChangeHandler}/>
}
