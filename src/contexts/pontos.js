import { createContext, useEffect, useState } from "react";
import firebase from '../services/apifirebase'


export const PontosContext = createContext([])


function PontosProvider() {
  const [pontos, setPontos] = useState([])

  useEffect()

  
  return(
    <PontosContext.Provider>
    </PontosContext.Provider>
  )


}