import { useEffect, useState } from "react";
import { BodyPonto } from "../../components/BodyPonto";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import firebase from '../../services/apifirebase'


export function BatidaPonto() {

  //estados
  const [usuario, setUsuario] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState({})
  
  //useEffect
  useEffect(() => {


    async function getUsuario() {
      await firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setUsuario(true)
          setUsuarioLogado({
            uid: user.uid,
            email: user.email,
          })
        } else {
          setUsuario(false)
          setUsuarioLogado({})
        }
      })
    }

    getUsuario()

  }, [])

  return(
    <Container>
      <Header email={usuarioLogado.email}/>
      <BodyPonto uid={usuarioLogado.uid}/>
    </Container>
  )
}