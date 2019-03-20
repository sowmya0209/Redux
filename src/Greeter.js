import React, { Component } from 'react'

export default class Greeter extends Component {
    constructor(){
        super();
        this.state={message:"Welcome to my quote App Click the button to see a random quote"}

    }
   show(){
      let quotes=["Do or Die","All is well","Aim for the best","Truth alone Triumphs"]
       var random=Math.floor(Math.random() * quotes.length)
       alert(random)
    this.setState({message:quotes[random]})
    }
  render() {
    return (
      <div>
       {this.state.message} 
       <button onClick={()=>this.show()}>Show A Quote</button>
      </div>
    )
  }
}
