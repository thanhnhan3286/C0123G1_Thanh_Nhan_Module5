import './App.css';
import {Library} from "./components/Library";
import React from "react";
import {AddBook} from "./components/AddBook";
import {Route, Routes} from "react-router";
import {ToastContainer} from "react-toastify";
import {UpdateBook} from "./components/UpdateBook";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Library/>}/>
                <Route path='/add' element={<AddBook/>}/>
                <Route path='/update/:id' element={<UpdateBook/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;