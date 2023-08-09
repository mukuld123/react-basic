import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
        this.incrementFive = this.incrementFive.bind(this);   
        // added because this is not defined in event handler

        
    }
    increment(){
        this.setState((prevState,props) => ({
            count: prevState.count + 1
            // count: prevState.count + props.addValue
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
        <h1>You clicked {this.state.count} times</h1>
        {/* <button onClick={ this.incrementFive.bind(this) }>Increase</button> */}
        {/* <button onClick={ () => this.incrementFive() }>Increase</button> */}
        
        {/* Best way to address the issue */}
        <button onClick={ this.incrementFive }>Increase</button>  
        
      </div>
    )
  }
}

export default Counter