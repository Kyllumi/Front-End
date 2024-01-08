import { Component } from "react";
import { Paragraph } from "./QuartoComp";

export default class TerzoComp extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <h1>{this.props.title}</h1>
                {this.props.list.map(ele => <Paragraph user={ele} />)}
                <p><strong>Tot: {this.props.list.length}</strong></p>

            </>
        )
    }
}

// export default TerzoComp