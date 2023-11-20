//import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
    component: Accordion
};

/*export default meta;
type Story = StoryObj<typeof Accordion>;
export const FirstStory:Story = {
    args: {
        titleValue: "hello",
        collapsed: true,
        onChange: ()=>{}
    },
}*/

const onChangeHandler = action('onChange')
export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={"CollapsedAccordion"}
        collapsed={true}
        onChange={onChangeHandler}/>
}
export const OpenedAccordion = () => {
    return <Accordion
        titleValue={"OpenedAccordion"}
        collapsed={false}
        onChange={onChangeHandler}/>
}
export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(true)
    return <Accordion
        titleValue={"AccordionDemo"}
        collapsed={collapsed}
        onChange={()=>{setCollapsed(!collapsed)}}/>
}