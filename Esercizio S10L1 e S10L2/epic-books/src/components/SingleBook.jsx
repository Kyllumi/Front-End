import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

// export default class SingleBook extends Component {

//     state = {
//         selected: false
//     }

//     selectedBook = () => {
//         this.setState((prevState) => ({ selected: !prevState.selected }))
//     }

//     render() {
//         return (
//             <Card style={{ width: '18rem' }} className={this.state.selected === true ? 'selectedBook' : ''}>
//                 <Card.Img
//                     variant="top"
//                     src={this.props.book.img}
//                     onClick={this.selectedBook} />
//                 <Card.Body>
//                     <Card.Title>{this.props.book.title}</Card.Title>
//                     {this.state.selected &&
//                         <CommentArea book={this.props.book} selectedClosed={this.selectedBook} />
//                     }
//                 </Card.Body>
//             </Card>
//         )
//     }
// }


export default function SingleBook({ books }) {

    const [selected, setSelected] = useState(false)

    const selectedBook = () => {
        setSelected(!selected)
    }

    return (
        <Card style={{ width: '18rem' }} className={selected === true ? 'selectedBook' : ''}>
            <Card.Img
                variant="top"
                src={books.img}
                onClick={selectedBook} />
            <Card.Body>
                <Card.Title>{books.title}</Card.Title>
                {selected &&
                    <CommentArea book={books} selectedClosed={selectedBook} />
                }
            </Card.Body>
        </Card>
    )
}