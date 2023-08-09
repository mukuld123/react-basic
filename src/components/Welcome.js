import React, {Component} from "react";

class Welcome extends Component{
    render() {
        return (
            <>
            <h1>This is Welcome Component</h1>
            {this.props.something}
            </>
        )
    }
}

export default Welcome;