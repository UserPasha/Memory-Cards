import React from 'react';
import './App.css';
import {AppRoutesWithHeader} from "./Components/Routes/AppRoutesWithHeader";
import {HashRouter} from "react-router-dom";
import {Header} from "./Components/Header/Header";




function App() {
    return (
            <HashRouter>
                <AppRoutesWithHeader/>
            </HashRouter>
    );
}

export default App;
