import './App.css';
import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import {ListFacility} from "./components/facility/ListFacility";
import "./components/styleHeader.css"
import {CreateFacility} from "./components/facility/CreateFacility";
import {EditFacility} from "./components/facility/EditFacility";
function App() {
    return (
        <>
            <EditFacility />
        </>
    );
}

export default App;
