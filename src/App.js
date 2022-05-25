import Rotas from './routes';
import { BrowserRouter as Router } from "react-router-dom";
import EstiloGlobal from './styles/global'

function App() {
  return (
    <Router>
      <Rotas/>
      <EstiloGlobal/>
    </Router>
  );
}

export default App;
