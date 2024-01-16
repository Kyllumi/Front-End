import React from 'react'
// import SingleComment from './SingleComment'

const CommentsList = ({ commentsToShow }) => {
    return (
        <ul>
            {commentsToShow.map((ele) => (
                ele.elementId === this.props.asin ? <li key={ele._id}>{ele.comment}</li> : null
            ))}
        </ul>
    )
}

export default CommentsList
