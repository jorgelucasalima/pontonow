import { useEffect, useState } from "react";
import { BodyPonto } from "../../components/BodyPonto";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import firebase from '../../services/apifirebase'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export function BatidaPonto() {

  const rota = useNavigate();

  const [usuario, setUsuario] = useState(false)
  const [usuarioLogado, setUsuarioLogado] = useState({})
  console.log(usuarioLogado)
  
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
      <Header email={usuarioLogado.email} uid={usuarioLogado.uid}/>
      <BodyPonto/>
    </Container>
  )
}