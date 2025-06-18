import './App.css'
import TextoFunction from './components/Aula01/TextoFunction'
import TextoClass from './components/Aula01/TextoClass'
import Saudacao from './components/Aula02/Saudacao'
import Contador from './components/Aula03/Contador'
import ContadorMultiplica from './components/ContadorMultiplica'
import FuncaoNormal from './components/FuncaoNormal'
import FuncaoArrowFunction from './components/FuncaoArrowFuncition'
import Greeting from './components/Greeting'
import Contador2 from './components/Aula03/Contador2'
import ListaUsuarios from './components/ListaUsuarios'
import ContadorAutomatico from './components/ContadorAutomatico'
import Parent from './components/Parent'
import Menu from './components/Menu'
import UserGreeting from './components/userGreeting'
import ApiTeste from './components/ApiTeste'
import UsuariosStep from './components/UsuariosStep'


function App() {
  let nomeUsuario = 'Fabio'
  let nomeUsuario2 = 'Patricia'
  return (
    <>
        <Saudacao nome="Fabio" sobrenome="mundo"></Saudacao>
        <UsuariosStep></UsuariosStep>
    </>
  )
}

export default App
