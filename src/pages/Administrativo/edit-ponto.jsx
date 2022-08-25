import { Header } from "./../../components/Header/index";
import { Container, ContentEditPonto } from "./styles";

export function EditarPonto() {
  return (
    <Container>
      <Header />
      <ContentEditPonto>
        <h1>Editar Hora do dia</h1>
        <h3>Dia</h3>
        <input type="time" />
        <button>Atualizar</button>
      </ContentEditPonto>
    </Container>
  );
}
