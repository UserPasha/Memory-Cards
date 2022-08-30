import React, {useEffect} from 'react';
import './App.css';
import {AppRoutesWithHeader} from "./Components/Routes/AppRoutesWithHeader";
import {HashRouter} from "react-router-dom";
import {useAppDispatch} from "./Store";
import {fetchProfileTC} from "./Store/Reducers/profileReducer";


function App() {
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(fetchProfileTC())
    // },[])
    return (
        <HashRouter>
            <AppRoutesWithHeader/>
        </HashRouter>
    );
}

export default App;
