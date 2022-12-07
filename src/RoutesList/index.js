import React from "react";
import { Routes, Route } from 'react-router-dom';
import Briefing from "../Pages/Briefing";
import Home from "../Pages/Home";

function RoutesList(){
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path="/briefing" element={<Briefing/>} />
        </Routes>
    )
}

export default RoutesList;