import {combineReducers} from "redux";
import {items, itemsHasErrored, itemsIsLoading} from "./items";
/*
 Individual reducers are combined into a single rootReducer to create the discrete properties of the state.
 */

/*
 As our reducer names are identical to what we want to use
 for a store's property names, we can use the ES6 shorthand.


 I intentionally prefixed my reducer names, so that when the application grows in complexity,
 I’m not constrained by having a “global” hasErrored or isLoading property
 */
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});
