import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
    //debugger
    alert("Hello IT-KAMASUTRA")
}
hello();
function App() {
    //debugger
    return (
        <div>
            <AppTitle />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    return <>This is App component</>
}
function Rating() {
    console.log("Rating rendered")
    return (
        <>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </>
    );
}


function Star() {
    console.log("Star rendered")
    return (
        <div>star</div>
    );
}

function Accordion() {
    debugger
    return <div>
        <h3>Меню</h3>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}


export default App;
