import logo from './logo.svg';
import './App.css';
import {Library} from "./components/Library";
import React from "react";
import {AddBook} from "./components/AddBook";
import {NavLink} from "react-router-dom";
import {Route, Routes} from "react-router";
import {ToastContainer} from "react-toastify";
import {UpdateBook} from "./components/UpdateBook";

function App() {
    return (
        <>
            {/*<NavLink to:'/'>Home</NavLink>*/}
            <Routes>
                <Route path='/' element={<Library/>}/>
                <Route path='/add' element={<AddBook/>}/>
                <Route path='/update/:id' element={<UpdateBook/>}/>
                {/*<Route path='/delete/:id' element={<Delete/>}/>*/}
            </Routes>
            {/*<AddBook/>*/}
            <ToastContainer/>
        </>
    );
}

export default App;
