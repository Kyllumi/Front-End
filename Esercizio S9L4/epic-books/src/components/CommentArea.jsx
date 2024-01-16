import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentsList from './CommentsList'

export default class CommentArea extends Component {
    state = {
        comments: []
    }

    componentDidMount = () => {
        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTllYTZhNzZlYmM0YjAwMTg1MGYxYTYiLCJpYXQiOjE3MDQ4OTYxNjgsImV4cCI6MTcwNjEwNTc2OH0.YiW0bwgU0lxsqICR9PQdgFnCbnBYq61PV2_zigPX7dM"
            }
        })
            .then(response => response.json())
            .then(json => { this.setState({ comments: json }) })
            .catch(error => console.log(error))
    }


    render() {
        // console.log(this.props.asin);
        // console.log(this.state.comments);

        return (
            <Card.Text>
                <h5>Comments</h5>
                <ul>
                    <CommentsList commentsToShow={this.state.comments} bookAsin={this.props.asin}/>
                </ul>
            </Card.Text>
        )
    }
}
