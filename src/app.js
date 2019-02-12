import { createStore } from "redux";

// functions that return Redux Actions
// Action is payload of information that is sent to Store using store.dispatch(action).

//Action must have a type property that should typically be defined as string constants. It indicates the type of action being performed


//We have 4 Action creators, each creator simply returns object which contains type and payload.
const add = ({ number = 1 } = {}) => ({
    type: 'ADD',
    number
});

const minus = ({ number = 1 } = {}) => ({
    type: 'MINUS',
    number
});

const set = ({ count }) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET'
});




// Redux Reducer
// Reducer is a pure function that generates a new state based on 
// an Action(type) it receives. These Actions only describe what happened, but don’t describe how state changes.
// Reducer must be a pure function:

//Reducer has switch statement that chooses what to do to return new 
//state based on action’s type and payload:
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                count: state.count + action.number
            };
        case 'MINUS':
            return {
                count: state.count - action.number
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
}


// With Redux Store, we can:
// – access to state via store.getState()
// – update state via store.dispatch(action)
// – register listeners via store.subscribe(listener)
// – unregister listeners via the function returned by store.subscribe(listener):

// Store   --->We only have a single store in a Redux application.
//import the createStore function from Redux, then pass it to Reducer:

const store = createStore(countReducer);

// listener (inside subscribe() function) will be invoked any time we call store.dispatch(),
//  we can call store.getState() in the console to read the current state inside the callback.

// Calling unsubscribe() is stopping listening to state updates.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(add());
store.dispatch(add({ number: 9 }));
store.dispatch(reset());
store.dispatch(minus({ number: 2 }));
store.dispatch(minus());
store.dispatch(set({ count: 99 }));

console.log('unsubscribe...');
unsubscribe();
store.dispatch(add({ number: 1 }));

