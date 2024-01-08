import React from "react"

function PrimoComp(props) {
    console.log(props);
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            {props.list.map(ele => <p>{ele.name} {ele.lastName} - {ele.city}</p>)}
            <p><strong>Tot: {props.list.length}</strong></p>
        </React.Fragment>
    )
}

export default PrimoComp