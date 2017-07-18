import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";

import ItemList from "./components/ItemList";

const store = configureStore();
/*
 For using Redux in React,
 the <Provider /> component wraps t
 he entire application and passes the store down to all children.

 */
render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('app')
);
