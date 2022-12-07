import React from "react";
import { Routes, Route } from 'react-router-dom';
import Briefing from "../Pages/Briefing";
import Home from "../Pages/Home";

function RoutesList(){
    return (
        <Routes>
            <Route index element={<Home/>} title="wcr.design"/>
            <Route path="/briefing" element={<Briefing/>} title="Briefing | wcr.design"/>
        </Routes>
    )
}

export default RoutesList;