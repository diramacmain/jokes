import React from 'react'
function Joke(props){
    return(
        <div>
            <h2>{props.question} </h2>
            <p>{props.punchLine}</p>
            <hr></hr>
        </div>
    )
} export default Joke