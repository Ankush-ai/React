import React,{useState} from 'react';
function UseStateDemo1() {
    const[name,setName]=useState("Jack");
    return(
        <div>
            your name is :{name}
            <button onClick={()=>setName("Jill")}>change</button>
        </div>
    );
}

export default  UseStateDemo1;