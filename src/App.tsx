import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/Accordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    console.log("App rendering")
    return (
        <div className={"App"}>
           {/* //<Accordion titleValue={"Menu"} collapsed={true} />
            //<Accordion titleValue={"Users"} collapsed={false} />*/}
            <UncontrolledRating />

            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledAccordion titleValue={"Menu"}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1> {props.title} </h1>
}


export default App;
