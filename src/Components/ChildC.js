import React  from "react";
import {data} from './Components/App';

const ChildC=()=>{
    return(
        <>
        <data.Consumer>
            {
                 (name)=>{
                    return(
                     {name}
                    );
                 }
            }
           
        </data.Consumer>
        </>
    );

}

export default ChildC;