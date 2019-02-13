import React from 'react';
import BookList from './BookList';
import BookFilter from './BookFilters';

const DashBoard = () => (
    <div className='container__list'>
        <BookFilter />
        <BookList />
    </div>
);

export default DashBoard;