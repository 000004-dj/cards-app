import React from 'react';
import './App.scss';
import {Header} from "../features/Header/Header";
import {Main} from "../features/Main/Main";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export const App = () => {
    return (
        <Provider store={store}>
            <div className="app">
                <Header/>
                <Main/>
            </div>
        </Provider>
    );
}

export default App;


