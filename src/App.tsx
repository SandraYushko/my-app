import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function hello() {
    //debugger

    alert("Hello IT-KAMASUTRA")
}

hello();

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle />
            <Rating value={3} />
            <Accordion />
            <Rating value={4} />
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is App component</>
}


export default App;
