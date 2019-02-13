import { connect } from 'react-redux';
import { removeBook } from '../actions/books';
import React from 'react';

const Book = ({ title, description, author, published }) => (
    <div>
        <h4>{title} ({published})</h4>
        <p>Author: {author}</p>
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</button>

    </div>
);

//Below connect is used so that dispatch can be called diretly 
export default connect()(Book);