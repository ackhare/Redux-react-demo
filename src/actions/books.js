import uuid from 'uuid';

export const addBook = ({
    title = '',
    description = '',
    author = '',
    published = 0
} = {}) => ({
    type: 'ADD_BOOK',
    book: {
        id: uuid(),
        title,
        description,
        author,
        published
    }
});

export const removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});