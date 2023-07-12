import { useState, useEffect } from "react";
function UseEffectDemo1(){
    const[name,setName]=useState("Jack")
    const[age,setAge]=useState(20)

    useEffect(()=>{
        console.log("UseEffect called");
    })

     return(
        <>
        <h3>Name: { name }</h3><br/>
        <h3>Age:{age}</h3>

        <button onClick={()=>setName("John")}>Change Name</button>
        <button onClick={()=>setAge(21)}>Change Age</button>
        </>
     );

}

export default  UseEffectDemo1;
