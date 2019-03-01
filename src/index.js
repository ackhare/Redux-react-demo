import React from "react";
import {render} from "react-dom";


import ItemList from "./components/ItemList";
import MyForm from "./components/MyForm";
import MyFormWithFieldArray from './components/FieldArrayDemoFormik/MyFormWithFieldArray';
render(
    <MyFormWithFieldArray />,
    document.getElementById('app')
);
