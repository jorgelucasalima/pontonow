import React from "react";
import { Route, Routes } from "react-router-dom";
import { BatidaPonto } from "./pages/BatidaPonto";
import { Login } from "./pages/Login";
import { LoginAdmin } from "./pages/LoginAdmin";
import { Administrativo } from "./pages/Administrativo";
import { ViewUser } from "./pages/Administrativo/view";
import { EditUser } from "./pages/Administrativo/edit";
import { EditarPonto } from "./pages/Administrativo/edit-ponto";

export default function Rotas() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/loginadmin" element={<LoginAdmin/>}/>
      <Route path="/batidaponto" element={<BatidaPonto/>}/>
      <Route path="/admin" element={<Administrativo/>}/>
      <Route path="/view/:id" element={<ViewUser/>}/>
      <Route path="/edit/:id" element={<EditUser/>}/>
      <Route path="/edit-ponto/:id" element={<EditarPonto/>}/>
    </Routes>
  )
}