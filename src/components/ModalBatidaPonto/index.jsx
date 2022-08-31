import {Container} from './styles'
import Modal from 'react-modal'
import firebase from '../../services/apifirebase'
import { toast } from 'react-toastify';
import { useState } from 'react';


export function ModalBatidaPonto(props) {


  //funções
  async function registrarPonto() {

    // instacia datas
    const instaciaData = new Date()
    const dia = instaciaData.getDate()
    const mes = instaciaData.getMonth() + 1
    const ano = instaciaData.getFullYear()
    const dataString = (dia+'-'+mes+'-'+ano).toString()

    //instanciando o banco de dados firebase
    const db = firebase.firestore();

    //colletion usuarios
    const DocumentRefUsuario = db.collection('usuarios').doc(props.uid.toString());
    const docUsuario = await DocumentRefUsuario.get();

    //colletion ponto / verifica se é o usuário logado e a data é hoje
    const DocumentRefPontos = db.collection('pontos')
    const docPonto = await DocumentRefPontos
    .where('uid_usuario', '==', docUsuario.data().uid)
    .where('data', '==', dataString)
    .get()

    //consulta os documentos do dia de acordo o usuario e com status inicio expediente
    const docPontoInicioExpediente = await DocumentRefPontos
    .where('uid_usuario', '==', docUsuario.data().uid)
    .where('data', '==', dataString)
    .where('status', '==', 'inicio_expediente')
    .get()

    docPontoInicioExpediente.docs.forEach(doc => {
      console.log('ID: ',doc.id)
    })




    // verificando se o usuario ja bateu o ponto no dia de acordo array de pontos do dia
    if(docPonto.docs.length === 0) {
      await db.collection('pontos')
        .add({
          uid_usuario: docUsuario.data().uid,
          uid_documento: '',
          nome_usuario: docUsuario.data().nome,
          email_usuario: docUsuario.data().email,
          data: dataString,
          ponto: props.dataAtual,
          status: 'inicio_expediente'
        })
        .then(() => {
          props.onRequestClose()
          toast.success('Ponto registrado com sucesso!')
        })
        .catch(() => {
          toast.error('Erro ao registrar ponto!')
        })
    } else if(docPonto.docs.length === 1) {
        await db.collection('pontos')
          .add({
            uid_usuario: docUsuario.data().uid,
            nome_usuario: docUsuario.data().nome,
            email_usuario: docUsuario.data().email,
            data: dataString,
            ponto: props.dataAtual,
            status: 'inicio_intervalo'
          })
          .then(() => {
            props.onRequestClose()
            toast.success('Ponto registrado com sucesso!')
          })
          .catch(() => {
            toast.error('Erro ao registrar ponto!')
          })
    } else if(docPonto.docs.length === 2) {
        await db.collection('pontos')
          .add({
            uid_usuario: docUsuario.data().uid,
            nome_usuario: docUsuario.data().nome,
            email_usuario: docUsuario.data().email,
            data: dataString,
            ponto: props.dataAtual,
            status: 'fim_intervalo'
          })
          .then(() => {
            props.onRequestClose()
            toast.success('Ponto registrado com sucesso!')
          })
          .catch(() => {
            toast.error('Erro ao registrar ponto!')
          })
    } else if(docPonto.docs.length === 3) {
      await db.collection('pontos')
        .add({
          uid_usuario: docUsuario.data().uid,
          nome_usuario: docUsuario.data().nome,
          email_usuario: docUsuario.data().email,
          data: dataString,
          ponto: props.dataAtual,
          status: 'fim_expediente'
        })
        .then(() => {
          props.onRequestClose()
          toast.success('Ponto registrado com sucesso!')
        })
        .catch(() => {
          toast.error('Erro ao registrar ponto!')
        })
      } else {
        props.onRequestClose()
        toast.info('Você já registrou todos pontos de hoje!')
      }
  }
 

  return(
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="eact-modal-content"
    >
      <Container>
        <h2>Confirme seu registro!</h2>
        <strong>{ (new Intl.DateTimeFormat('pt-BR', { hour: 'numeric', minute:'numeric' }).format(props.dataAtual)) }</strong>
        <p>{new Intl.DateTimeFormat('pt-BR', { weekday:'long', month:'long', day:'numeric', year:'numeric' }).format(props.dataAtual)}</p>
        <button className='cancelar' onClick={props.onRequestClose}>Cancelar</button>
        <button onClick={registrarPonto}>Registrar</button>
      </Container>
    </Modal>
  )

}