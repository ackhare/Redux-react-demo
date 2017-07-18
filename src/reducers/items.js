//now write reducers that take these actions and return a new state of our application.
//n Redux, all reducers get called regardless of the action,
// so inside each one you have to return the original state if the action is not applicable.


/*
 Each reducer takes 2 parameters: the previous state (state) and an actionobject.
 We can also use an ES6 feature called default parameters to set the default initial state.
 */
export function itemsHasErrored(state = false, action) {
    //we use a switch statement to determine when an action.type matches.
    //, your reducers could theoretically have a lot of conditions, so if/else if/else will get messy fast.

    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;//inside each one you have to //return the original state if the action is not applicable.

    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;//inside each one you have to //return the original state if the action is not applicable.

    }
}


/*
 have multiple conditions which would always return an array of items: it could return all in
 the case of a fetch success, it could return a subset of items after a delete action is dispatched,
 or it could return an empty array if everything is deleted.

 */
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        case 'ITEMS_REMOVE_ITEM':
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];

        default:
            return state;//inside each one you have to //return the original state if the action is not applicable.

    }
}
/*
 When an action is dispatched, a Reducer is the function that actually changes
 the state appropriate to that action – or
 returns the existing state if the action is not applicable to that reducer.
 Reducers are “pure functions”. They should
 not have any side-effects nor mutate the state — they must return a modified copy.
 */