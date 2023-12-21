import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function baseRouter (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path='/' element={<Navigate to="/home"/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default baseRouter