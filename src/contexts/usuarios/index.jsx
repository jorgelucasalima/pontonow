import { createContext, useEffect, useState } from 'react'
import firebase from '../../services/apifirebase'

export const usuariosContext = createContext()

export function usuarioProvider() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function carregarUsuarios(params) {
      await firebase.firestore().collection('usuarios')
      .onSnapshot((doc) => {
        let arrayUsuarios = []

        doc.forEach((item) => {
          arrayUsuarios.push({
            uid: item.uid,
            nome: item.data().nome,
            email: item.data().email,
            
          })
        })
      })
    }
  }
  , [])
}
