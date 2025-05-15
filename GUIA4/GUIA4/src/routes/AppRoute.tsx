import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import  Login from '../page/auth/Login';
import { AuthContext } from "../context/AuthContext";

import type { JSX } from "react/jsx-dev-runtime";

function PrivateRoute({children}: {children: JSX.Element}){
    const {user} = useContext(AuthContext);
        return user ? children : <Navigate to="/login" replace />
}

export default function AppRoute(){
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}