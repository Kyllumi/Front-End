import React from 'react';
import Fantasy from '../json/fantasy.json';

import SingleBook from './SingleBook';


function AllTheBooks() {
    return (
        <>
            <h2 className='text-start mt-5 ms-3 text-white'>Fantasy</h2>
            <div className='container text-center flex-wrap d-flex justify-content-center'>
                {Fantasy.map((e) => (
                    <SingleBook key={e} book={e} />
                ))}
            </div>
        </>
    );
}

export default AllTheBooks;

