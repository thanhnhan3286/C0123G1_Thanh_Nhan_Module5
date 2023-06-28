import './App.css';
import React from "react";
import {ListUser} from "./components/ListUser";
import {Route, Routes} from "react-router";
import {UserComponent} from "./components/UserComponent";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<UserComponent/>}/>
                <Route path='/getList' element={<ListUser/>}/>
            </Routes>

        </>
    );
}

export default App;
