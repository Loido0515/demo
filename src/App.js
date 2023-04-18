import React from "react";
import AdminPage from "./pages/AdminPage/adminPage";
import ProductPage from "./pages/ProductPage/productPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/loginPage";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<ProductPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"/login"} element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App;
