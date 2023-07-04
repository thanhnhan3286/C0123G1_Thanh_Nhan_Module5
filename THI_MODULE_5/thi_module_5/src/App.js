import logo from './logo.svg';
import './App.css';
import {ListOrder} from "./components/ListOrder";
import React from "react";
import {Route, Routes} from "react-router";
import {CreateOrder} from "./components/CreateOrder";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<ListOrder/>}/>
                <Route path={'/create'} element={<CreateOrder/>}/>
            </Routes>

        </>
    );
}

export default App;
