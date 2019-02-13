import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import getVisibleBooks from '../selectors/books';

const BookList = (props) => (
    
    <div>
        Book List:
        <ul>
            {
                props.books.map(book => {
                return (
                    <li key={book.id}>
                        <Book {...book} />
                    </li>
                );
            })}
        </ul>
    </div>
);
//https://zhenyong.github.io/react/docs/jsx-spread.html
const mapStateToProps = (state) => {
    return {
        books: getVisibleBooks(state.books, state.filters)
    };
}
//console.log(mapStateToProps);
// The most important function is connect() that:
// – connects a React Component with a Redux Store.
// – returns a new connected Component class without modifying the Component class passed to it
export default connect(mapStateToProps)(BookList);
// mapStateToProps get books props from state.

// -> connect() function get the function as parameter and apply to BookList  //connect(mapStateToProps)(BookList);

//BookList Component to return a new connected React Component that can work with React state.

//We have 2 important arguments:

// – mapStateToProps(state) function connects a part of Redux state to React Component props.
// The returned props(books here) of this function must be a plain object, which will be merged into the 
// connected Component’s props, now it will have access to the exact part of Redux store.