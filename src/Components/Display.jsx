import React from "react";
const Display=(props)=>{
    return(
        <>
        <h4>Hello {props.firstName} {props.lastName}{props.age}</h4>
        </>
    );
}

export default Display;