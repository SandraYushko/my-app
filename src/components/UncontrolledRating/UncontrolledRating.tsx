import React, {useState} from 'react';

export function UncontrolledRating() {
    let [value, setValue] = useState(0);

    return <div>
        <Star selected = {value > 0} setValue={setValue}/>
        <Star selected = {value > 1} setValue={setValue}/>
        <Star selected = {value > 2} setValue={setValue}/>
        <Star selected = {value > 3} setValue={setValue}/>
        <Star selected = {value > 4} setValue={setValue}/>
    </div>
}

type StarPropsType = {
    selected: boolean
    setValue: (value: 1|2|3|4|5)=>void
}
function Star (props: StarPropsType) {
    return <span onClick={()=>{props.setValue(5)}}>
        {props.selected ? <b>star</b> : "star"}
    </span>
    }












/*let [value, setValue] = useState(0);

return <div>
    <Star selected = {value > 0} /><button onClick={()=>{setValue(1)}}>1</button>
    <Star selected = {value > 1} /><button onClick={()=>{setValue(2)}}>2</button>
    <Star selected = {value > 2} /><button onClick={()=>{setValue(3)}}>3</button>
    <Star selected = {value > 3} /><button onClick={()=>{setValue(4)}}>4</button>
    <Star selected = {value > 4} /><button onClick={()=>{setValue(5)}}>5</button>
</div>
}

type StarPropsType = {
    selected: boolean
}
function Star (props: StarPropsType) {
    console.log("Star rendering")
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/

