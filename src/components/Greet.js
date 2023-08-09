import React from "react";

// function Greet(){
//     return <h1>Helloooo People</h1>
// }

const Greet = props => {
    console.log(props)
    return (
    <>
        <h1>{props.something}</h1>
        {props.children}
    </>
    )
}

export default Greet;