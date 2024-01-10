import React from 'react'
import { Card } from 'react-bootstrap';
import { Component } from 'react';

export default class SingleBook extends Component {
    state = {
        selected: false
    }

    render() {
        const { selected } = this.state

        return (
            <Card style={{ width: '10rem', height: '100%', border: selected ? '3px solid red' : 'none', }}
                className='mx-1 my-3'
                onChange={() => {
                    this.setState((prevState) => ({ selected: !prevState.selected }));
                }}>
                <Card.Img variant="top" className='img-fluid' src={this.props.book.img} style={{ height: '100%' }} />
                <Card.Body>
                    <Card.Title className='text-start fs-6'>{this.props.book.title}</Card.Title>
                </Card.Body>
            </Card>
        )
    }
}
