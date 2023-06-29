
import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import {ListFacility} from "./components/facility/ListFacility";
import {CreateFacility} from "./components/facility/CreateFacility";
import {EditFacility} from "./components/facility/EditFacility";
import {ListCustomer} from "./components/customer/ListCustomer";
import {Route, Routes} from "react-router";
import {EditCustomer} from "./components/customer/EditCustomer";
import {ToastContainer} from "react-toastify";
import {CreateCustomer} from "./components/customer/CreateCustomer";
import {ListContract} from "./components/contract/ListContract";
import {CreateContract} from "./components/contract/CreateContract";
import {HeaderAdmin} from "./components/HeaderAdmin";
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<ListFacility/>}/>
                <Route path='/createFacility' element={<CreateFacility/>}/>
                <Route path='/editFacility/:id' element={<EditFacility/>}/>
                <Route path='/customer' element={<ListCustomer/>}/>
                <Route path='/editCustomer/:id' element={<EditCustomer/>}/>
                <Route path='/createCustomer' element={<CreateCustomer/>}/>
                <Route path='/contract' element={<ListContract/>}/>
                <Route path='/createContract' element={<CreateContract/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </>
    );
}

export default App;
