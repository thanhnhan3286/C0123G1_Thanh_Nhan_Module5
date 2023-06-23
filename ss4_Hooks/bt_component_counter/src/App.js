import './App.css';
import "bootstrap/dist/css/bootstrap.css"

import {Counter1} from "./component/Counter1";
import {Counter2} from "./component/Counter2";
import React from "react";


function App() {
    return (
        <>
            <div className="text-center">
                <Counter1/>
                <Counter2/>
            </div>

        </>
    )
}

export default App;
