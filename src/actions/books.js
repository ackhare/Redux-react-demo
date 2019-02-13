import database from '../firebase/firebase';

const _addBook = (book) => ({
    type: 'ADD_BOOK',
    book
});

export const addBook = (bookData = {
    title: '',
    description: '',
    author: '',
    published: 0
}) => {
    return (dispatch) => {
        const book = {
            title: bookData.title,
            description: bookData.description,
            author: bookData.author,
            published: bookData.published
        };

        return database.ref('books').push(book).then(ref => {
            dispatch(_addBook({
                id: ref.key,
                ...book
            }));
        });
    };
};

const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

export const removeBook = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`books/${id}`).remove().then(() => {
            dispatch(_removeBook({ id }));
        })
    }
};

const _editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});

export const editBook = (id, updates) => {
    return (dispatch) => {
        return database.ref(`books/${id}`).update(updates).then(() => {
            dispatch(_editBook(id, updates));
        });
    }
};

const _getBooks = (books) => ({
    type: 'GET_BOOKs',
    books
});

export const getBooks = () => {
    return (dispatch) => {
        return database.ref('books').once('value').then(snapshot => {
            const books = [];

            snapshot.forEach(item => {
                books.push({
                    id: item.key,
                    ...item.val()
                });
            });

            dispatch(_getBooks(books));
        });
    };
};