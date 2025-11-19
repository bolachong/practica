"use client"

import Button from "./Button"
import Input from "./Input"

export default function Editar(props){
    return(
        <>
            <Input onChange={props.onChange} placeholder={props.placeholder} value={props.value}></Input>
            <br></br>
            <Input onChange={props.onChange2} placeholder={props.placeholder2} value={props.value2}></Input>
            <br></br>
            <Button onClick={props.onClick} text={props.text}></Button>
        </>
    )
}