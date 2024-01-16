import React, { useState, useEffect } from 'react';
import Fantasy from '../books/fantasy.json';
import History from '../books/history.json';
import Horror from '../books/horror.json';
import Romance from '../books/romance.json';
import Scifi from '../books/scifi.json';
import BookList from './BookList';
import { Button, Col, Form, Row } from 'react-bootstrap';

// export class AllTheBooks extends Component {

//     state = {
//         books: [],
//         searchQuery: '',
//         filterBooks: []
//     }

//     componentDidMount() {

//         this.setState({
//             books: [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi]
//         }
//         )


//     }

//     getSearchQuery = () => {
//         //alert(this.state.searchQuery)
//         let filter = this.state.books.filter(book => book.title.includes(this.state.searchQuery))
//         this.setState({ filterBooks: filter })
//     }

//     render() {
//         // console.log({books}) 
//         return (
//             <>
//                 <Row className="my-3">
//                     <Col lg={10}>
//                         <Form.Control
//                             type="text"
//                             placeholder="Search Book Title..."
//                             onChange={(e) => this.setState({ searchQuery: e.target.value })}
//                         />
//                     </Col>
//                     <Col lg={2}>
//                         <Button variant="secondary" onClick={this.getSearchQuery}>Search</Button>
//                     </Col>
//                 </Row>
//                 <BookList books={this.state.filterBooks.length !== 0 ? this.state.filterBooks : this.state.books} />
//                 <h3>Total books: {this.state.books.length}</h3>
//             </>
//         )
//     }
// }



// Destrutturazione di un oggetto con lo spred Operator
/* let obj = {name: 'Mario', lastname: 'Rossi'}
let txt = {...obj, city: 'San Francisco'}
console.log(txt) */

export default function AllTheBooks() {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterBooks, setFilterBooks] = useState([]);

    useEffect(() => {
        setBooks([...Fantasy, ...History, ...Horror, ...Romance, ...Scifi])
    }, [])

    useEffect(() => {
        setFilterBooks(books.filter(book => book.title.toLowerCase().includes(searchQuery.toLowerCase())))
    }, [books, searchQuery])

    const getSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>
            <Row className="my-3">
                <Col lg={10}>
                    <Form.Control
                        type="text"
                        placeholder="Search Book Title..."
                        onChange={getSearchQuery}
                    />
                </Col>
                <Col lg={2}>
                    <Button variant="secondary" onClick={getSearchQuery}>Search</Button>
                </Col>
            </Row>
            <BookList books={filterBooks.length !== 0 ? filterBooks : books} />
            <h3>Total books: {books.length}</h3>
        </>
    )
}