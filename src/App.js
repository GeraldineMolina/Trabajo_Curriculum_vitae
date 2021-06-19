import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Perfil from './pages/perfil_profesional/PerfilProfesional';
import Informacion from './pages/informacion_personal/InformacionPersonal';
import Formacion from './pages/formacion_academica/FormacionAcademica';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/perfil" exact component={Perfil}/>
        <Route path="/informacion" exact component={Informacion}/>
        <Route path="/formacion" exact component={Formacion}/>      
      </Switch>
      </Router>
    </div>
  );
}

export default App;
