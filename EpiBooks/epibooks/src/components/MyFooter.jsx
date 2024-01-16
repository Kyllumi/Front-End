import React from 'react'
import {  Card } from 'react-bootstrap'

export default function MyFooter() {
    return (
        <Card className="text-center bg-dark text-secondary rounded-0">
            <Card.Body>
                <Card.Text>
                    &copy; EpiBooks 2024
                </Card.Text>
            </Card.Body>
        </Card>

    )
}
