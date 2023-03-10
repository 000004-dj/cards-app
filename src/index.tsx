import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter >
        <App/>
    </HashRouter >
);


reportWebVitals();
