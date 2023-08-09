import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
        formVal: ''
      }
      this.funcOnChange = this.funcOnChange.bind(this);
    }
    funcOnChange(event){
        this.setState({
            formVal: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(this.state.formVal);
        event.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label for='formVal'>Enter something</label>
        <input type='text' name='formVal' value={this.state.formVal} onChange={this.funcOnChange} />
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form