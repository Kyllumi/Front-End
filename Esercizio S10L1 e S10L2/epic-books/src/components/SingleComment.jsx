import React from 'react'
import { Button, ListGroup } from 'react-bootstrap'
import { authorizationBearer } from '../dati/dati'

export default function SingleComment({ c, selectedClosed }) {

    const deleteComment = () => {
        fetch('https://striveschool-api.herokuapp.com/api/comments/' + c._id, {
            method: 'DELETE',
            headers: {
                "Authorization": authorizationBearer
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                selectedClosed()
            })
            .catch(err => console.error(err))
    }

    return (
        <ListGroup.Item >
            {c.comment} Rate: {c.rate}
            <Button
                variant="outline-danger"
                size="sm"
                className='float-end'
                onClick={deleteComment}
            >x</Button>
        </ListGroup.Item>
    )
}
