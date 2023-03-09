import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from "./app/reducer";
import App from './App'


let store = createStore(reducer)



const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
