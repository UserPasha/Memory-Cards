import React from 'react';
import './App.css';
import {RoutesPages} from "./Components/Routes/RoutesPages";
import {HashRouter} from "react-router-dom";



function App() {
    return (
        <>
            <HashRouter>
                <RoutesPages/>
            </HashRouter>
        </>
    );
}

export default App;
