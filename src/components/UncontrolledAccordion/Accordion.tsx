import React, {useState} from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true);

        return <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>


    type AccordionTitlePropsType = {
        title: string
    }
    function AccordionTitle(props: AccordionTitlePropsType) {
        console.log("AccordionTitle rendering")
        return <h3>---{props.title}---</h3>
    }
}

type AccordionBodyPropsType = {
}
    function AccordionBody(props: AccordionBodyPropsType) {
        console.log("AccordionBody rendering")
        return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    }


    //export default Accordion;
