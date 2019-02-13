import React from 'react';

const EditBook = (props) => (
    <div className='container__box'>
        Edit the Book with id = {props.match.params.id}
    </div>
);

export default EditBook;