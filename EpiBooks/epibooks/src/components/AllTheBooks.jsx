import React from 'react'
import Fantasy from '../books/fantasy.json'
import History from '../books/history.json'
import Horror from '../books/horror.json'
import Romance from '../books/romance.json'
import Scifi from '../books/scifi.json'
import { Card, CardGroup } from 'react-bootstrap'

export default function AllTheBooks() {
    const allBooks = [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]

    return (
        <>
            <h4>Tutti i libri disponibili: {allBooks.length}</h4>
            <div className='container text-center flex-wrap d-flex justify-content-between'>
                {allBooks.map((book) => (
                    <Card style={{ width: '15rem' }} key={book.asin} className="my-3">
                        <Card.Img variant="top" src={book.img} />
                        {/* <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body> */}
                    </Card>

                ))}
            </div>
        </>
    )
}
