import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    value: boolean
}

export function OnOff(props: OnOffPropsType) {

        return <div>
            {props.value && <span>
                <button className = {s.on}>{'On'}</button>
                <button>{'Off'}</button>
                <input type={'radio'} className={s.on}/>
            </span>}
            {!props.value && <span>
                <button>{'On'}</button>
                <button className = {s.off}>{'Off'}</button>
                <input type={'radio'} className={s.off}/>
            </span>}
        </div>
}



