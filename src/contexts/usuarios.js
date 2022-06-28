import { createContext, useEffect, useState } from 'react'
import firebase from '../services/apifirebase'

export const UsuariosContext = createContext([])


function UsuarioProvider({ children }) {

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function carregarUsuarios() {
      await firebase.firestore().collection('usuarios')
      .onSnapshot((doc) => {
        let arrayUsuarios = []

        doc.forEach((item) => {
          arrayUsuarios.push({
            uid: item.data().uid,
            nome: item.data().nome,
            email: item.data().email,
            cargo: item.data().cargo,
            status: item.data().status
          })
        })

        setUsuarios(arrayUsuarios)
      })
    }
    carregarUsuarios()
  }, [])

  return (
    <UsuariosContext.Provider value={ {usuarios} }>
      {children}
    </UsuariosContext.Provider>
  )
}

export default UsuarioProvider
