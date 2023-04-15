import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: true|false
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed === true) {
        return <AccordionTitle title={props.titleValue}/>
    } else {
        return <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    }

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
