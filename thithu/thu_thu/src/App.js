import './App.css';
import {ProductComponent} from "./components/ProductComponent";
import {Create} from "./components/Create";
import {Edit} from "./components/Edit";
import React from "react";
import {Route, Routes} from "react-router";
import "bootstrap/dist/css/bootstrap.css"

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<ProductComponent/>}/>
                <Route path='/create' element={<Create/>}/>
                <Route path='/update/:id' element={<Edit/>}/>
            </Routes>
            {/*<ProductComponent/>*/}
        </>
    );
}

export default App;
