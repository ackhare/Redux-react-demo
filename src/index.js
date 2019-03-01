import React from "react";
import {render} from "react-dom";
import SignUpForm from './components/DemoOfYupWithSignUpForm/SignUpForm'

import ItemList from "./components/ItemList";
import MyForm from "./components/MyForm";
import MyFormWithFieldArray from './components/FieldArrayDemoFormik/MyFormWithFieldArray';
render(
    <SignUpForm />,
    document.getElementById('app')
);
