import React from "react";
import { Route, Routes } from "react-router-dom";
import { BatidaPonto } from "./pages/BatidaPonto";

export default function Rotas() {
  return(
    <Routes>
      <Route path="/" element=""/>
      <Route path="/batidaponto" element={<BatidaPonto/>}/>
    </Routes>
  )
}