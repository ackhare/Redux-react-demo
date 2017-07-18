/**
 * Created by chetan on 18/7/17.
 */
//This file consisits of our  action craeators defined
//State has been splitted into 3 actions which will be called
// create an actions/items.js file to contain our action creators.
// 'We'll start with our 3 simple actions.


//action creators are functions that return an action.
// We export each one so we can use them elsewhere in our codebase.

//first 3 actions which will represent our state,
export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
/*
 The first 2 action creators take a bool (true/false) as their argument
 and return an object with a meaningful type and
 the bool assigned to the appropriate property
 */
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items     // magic of ES6 property value shorthands,return an object with a property called items
        // whose value will be the array of items;

    };
}

/*
 convert our original component’s fetchDatamethod(In Itemlist) to an itemsFetchData() action creator.

 Redux action creators don’t support asynchronous actions like fetching data,
 so here’s where we utilise Redux Thunk.
 Thunk allows you to write action creators that return a function instead of an action.
 The inner function can receive
 the store methods dispatch and getState as parameters, but we'll just use dispatch.

 */

//This action will drive above 3 actions so calls our 3 other action (creators)
// depending on the status of fetching the data.
export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                /*
                 The inner function can receive
                 the store methods dispatch and getState as parameters, but we'll just use dispatch.
                 */
                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsRemoveItem(index) {
    return {
        type: 'ITEMS_REMOVE_ITEM',
        index
    };
}

/*
 The only way to modify the state is through emitting an action, which is an object that
 describes what should change.
 Action Creators are the functions that are dispatched to emit a
 change – all they do is return an action.

 */