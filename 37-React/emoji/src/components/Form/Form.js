import React from 'react';


export default function Form({ term, update }) {
    return (
        <div className='searchForm'>
            <input value={term} type='text' placeholder='Search by title or keywords' onChange={update} />
        </div>
    );
};
