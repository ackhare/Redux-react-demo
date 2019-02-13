import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
import { addBook } from './actions/books';
import { filterText, startYear, endYear, sortBy, clear } from './actions/filters';
import getVisibleBooks from './selectors/books';


import { Provider } from 'react-redux';

const store = getAppStore();

// setTimeout(() => {
    store.dispatch(addBook({
        title: 'Origin',
        description: 'Origin thrusts Robert Langdon into the dangerous intersection of humankind’s two most enduring questions.',
        author: 'Dan Brown',
        published: 2017
    }))
// }, 1000);

// setTimeout(() => {
    store.dispatch(addBook({
        title: 'Harry Potter and the Deathly Hallows',
        description: 'The seventh and final novel of the Harry Potter series.',
        author: 'J. K. Rowling',
        published: 2007
    }))
// }, 2000);

// setTimeout(() => {
    store.dispatch(addBook({
        title: 'The 100-Year-Old Man Who Climbed Out the Window and Disappeared',
        author: 'Jonas Jonasson',
        published: 2009
    }))
// }, 3000);
// Provider make the Redux store available to the connect() call in the Component hierarchy below. \
//We will wrap a parent or ancestor Component in Provider.

// Provider is an high order component that wraps up React application and makes it 
//aware of the entire Redux store. That is, it provides the store to its child components.

// So if we want our entire React App to access the store, 
//just put the App Component within Provider.
const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
//Once we connected Redux state to React Component props, 
//every time state is updated, props changes.
ReactDOM.render(template, document.getElementById('app'));
