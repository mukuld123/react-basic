import React, { Component } from 'react'
import ChildComp from './ChildComp';

class ParentComp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
      console.log('this is a log from parent');
  }
  render() {

    return (
      <div>
        <ChildComp clickHandle = { this.clickHandler } hi="hello" />
      </div>
    )
  }
}

export default ParentComp