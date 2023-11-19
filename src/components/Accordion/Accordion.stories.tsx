

import type { Meta } from '@storybook/react';

import {Accordion} from './Accordion';
import React, {useState} from 'react';

const meta: Meta<typeof Accordion> = {
    component: Accordion,
};

export default meta;
export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={"CollapsedAccordion"}
        collapsed={true}
        onChange={()=>{}}/>
}
export const OpenedAccordion = () => {
    return <Accordion
        titleValue={"OpenedAccordion"}
        collapsed={false}
        onChange={()=>{}}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion
        titleValue={"AccordionDemo"}
        collapsed={collapsed}
        onChange={()=>{setCollapsed(!collapsed)}}/>
}