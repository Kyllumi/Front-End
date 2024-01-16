import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { authorizationBearer, urlApi } from '../dati/dati'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

// export default class CommentArea extends Component {

//     state = {
//         comments: []
//     }

//     componentDidMount() {
//         fetch(urlApi + this.props.book.asin + '/comments',
//             {
//                 method: 'GET',
//                 headers: {
//                     "Authorization": authorizationBearer
//                 }
//             }
//         )
//             .then(response => response.json())
//             .then(json => this.setState({ comments: json }))
//             .catch(err => console.error(err))
//     }

//     render() {
//         return (
//             <Card.Text>
//                 Comment Area
//                 <CommentsList comments={this.state.comments} selectedClosed={this.props.selectedClosed} />
//                 <AddComment book={this.props.book} />
//             </Card.Text>
//         )
//     }
// }

export default function CommentArea({ book, selectedClosed }) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(urlApi + book.asin + '/comments',
            {
                method: 'GET',
                headers: {
                    "Authorization": authorizationBearer
                }
            }
        )
            .then(response => response.json())
            .then(json => setComments(json))
            .catch(err => console.error(err))
    }, [book])

    return (
        <Card.Text>
            Comment Area
            <CommentsList comments={comments} selectedClosed={selectedClosed} />
            <AddComment book={book} />
        </Card.Text>
    )
}

