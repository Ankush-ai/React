import React,{Component} from "react";
import TextInput from "./TextInput";
class  FormComponent extends Component{
    handleLogin=(e)=>{
        e.preventDefault();
        alert("Welcome" + this.name.ref);

    }

render(){
    return(
<>

 <form onSubmit={this.handleLogin}>
    <textInput nameRef={input=>this.nameRef=input}></textInput><br></br>
    <button type="submit">Submit</button>
 </form>
</>
    );
}}
export default FormComponent;