import React from "react";
import { Route, Routes } from "react-router-dom";
import { BatidaPonto } from "./pages/BatidaPonto";
import { Login } from "./pages/Login";

export default function Rotas() {
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/batidaponto" element={<BatidaPonto/>}/>
    </Routes>
  )
}