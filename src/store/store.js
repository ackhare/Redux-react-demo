import { createStore, combineReducers } from "redux";
import booksReducer from '../reducers/books';
import filtersReducer from '../reducers/filters';
//This state is defined and will be used ,generally it can come from some external api
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
//contains Redux Store Component which is created from result of combineReducers(books, filters).
export default () => {
    return createStore(
        combineReducers({
            books: booksReducer,
            filters: filtersReducer
        }
    ));
};