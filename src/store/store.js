import { createStore, combineReducers, applyMiddleware } from "redux";
import booksReducer from '../reducers/books';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const demoState = {
    books: [
        {
            id: '123abcdefghiklmn',
            title: 'Origin',
            description: 'Origin thrusts Robert Langdon into the dangerous intersection of humankind’s two most enduring questions.',
            author: 'Dan Brown',
            published: 2017
        }
    ],
    filters: {
        text: 'ori',
        sortBy: 'published', // published or title
        startYear: undefined,
        endYear: undefined
    }
};

export default () => {
    return createStore(
        combineReducers({
            books: booksReducer,
            filters: filtersReducer
        }),
        applyMiddleware(thunk));
};