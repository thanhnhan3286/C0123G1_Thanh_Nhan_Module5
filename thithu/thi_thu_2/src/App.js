import './App.css';
import {ProductList} from "./components/List";
import React from "react";
import {Route, Routes} from "react-router";
import {CreateProduct} from "./components/Create";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductList/>}/>
                <Route path={'/create'} element={<CreateProduct/>}/>
            </Routes>
        </>
    );
}

export default App;
