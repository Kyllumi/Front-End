import React from 'react'
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

export default function CommentsList({comments, selectedClosed}) {
  return (
    <ListGroup>
        {comments.map((c,i) => <SingleComment key={i} c={c} selectedClosed={selectedClosed} />)}  
    </ListGroup>
  )
}
