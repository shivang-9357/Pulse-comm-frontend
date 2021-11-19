import React from "react";
import './Input.css'

const Input = (props)=>{
    return <div className="input-container">
        {props.isLabel && <label for={props.id}>{props.label}{props.isRequired && '*'}</label>}
        <input id={props.id} type={props.type} name={props.name} onChange={props.onChange} required={props.isRequired}></input>
    </div>
}

export default Input;