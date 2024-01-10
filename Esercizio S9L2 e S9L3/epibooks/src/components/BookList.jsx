import React from 'react';
import SingleBook from './SingleBook';


export default function BookList({Fantasy}) {
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