import React from 'react';


export default function Form(term, data, update) {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        const filter = data.filter(emoji => {
            return emoji.title.toLowerCase().includes(value)
        })
        update({
            data: filter,
            term: value    
        });
    };
    return (
        <div className='searchForm'>
            <input value={term} type='text' placeholder='Search by title or keywords' onChange={dataSearch} />
        </div>
    );
};