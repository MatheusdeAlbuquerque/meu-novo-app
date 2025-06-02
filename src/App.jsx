import './App.css'
import TextoFunction from './components/TextoFunction'
import TextoClass from './components/TextoClass'
import Saudacao from './components/Saudacao'
import Contador from './components/Contador'
import ContadorMultiplica from './components/ContadorMultiplica'
import FuncaoNormal from './components/FuncaoNormal'
import FuncaoArrowFunction from './components/FuncaoArrowFuncition'
import Greeting from './components/Greeting'
import Contador2 from './components/Contador2'
import ListaUsuarios from './components/ListaUsuarios'
import ContadorAutomatico from './components/ContadorAutomatico'
function App() {
  return (
    <>
        <Saudacao nome="Matheus" sobrenome="Cavallero"></Saudacao>
        <Greeting name="Fabio" age={23} isStudent={false}></Greeting>
        <Contador></Contador>
        <ContadorMultiplica></ContadorMultiplica>
        <FuncaoNormal></FuncaoNormal>
        <FuncaoArrowFunction></FuncaoArrowFunction>
        <Contador2></Contador2>
        <ListaUsuarios></ListaUsuarios>
        <ContadorAutomatico></ContadorAutomatico>
    </>
  )
}

export default App
