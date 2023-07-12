import React, { Component } from 'react'
class Timer extends Component {
    constructor() {
      super();
    
      this.state = {
         c:0
      };
    }

    increase(){
        this.setState(
            {
                c:this.setState.c+1
            },
            ()=>{
                console.log(this.setState.c);
            }
        );
    }

    
  render() {
    return (
      <div>
        <button onClick={()=>this.increase()}>Start Timer</button>
      </div>
    );
  }
}

export default Timer;