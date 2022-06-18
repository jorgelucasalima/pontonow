import React from "react";
import { Route, Routes } from "react-router-dom";
import { BatidaPonto } from "./pages/BatidaPonto";
import { Login } from "./pages/Login";
import { LoginAdmin } from "./pages/LoginAdmin";
import { Administrativo } from "./pages/Administrativo";

export default function Rotas() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/loginadmin" element={<LoginAdmin/>}/>
      <Route path="/batidaponto" element={<BatidaPonto/>}/>
      <Route path="/admin" element={<Administrativo/>}/>
    </Routes>
  )
}