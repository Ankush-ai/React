import React ,{Component} from 'react';


class Welcome extends Component{
    constructor(){
        super();
        this.state={
            name:"John Doe",
            age:35

        };
    }
    ChangeData(){
        this.setState({
            name:"Steve Rogers",
            age:110
        });
    }

    render(){
        return(
            <div>
                <h1> Hello, the name is{this.state.name} and the age is{this.state.age}</h1>
                <button onClick={()=>this.ChangeData()}>Change Details</button>
            </div>
        )
    }
}

export default Welcome;

