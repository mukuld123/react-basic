import React, { Component } from 'react'

class ChildComp extends Component {
  render() {
    return (
      <div>
        <button onClick={ this.props.clickHandle }>Clickkk</button>
        {/* {this.props.hi} */}
      </div>
    )
  }
}

export default ChildComp