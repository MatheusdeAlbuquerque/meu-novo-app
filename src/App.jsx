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
import FormularioControlado from './components/Aula10/FormularioControlado'
import FormularioMultiCampos from './components/Aula10/FormularioMultiCampos'
import Home from './components/Aula11/Home'
import About from './components/Aula11/About'
import User from './components/Aula11/User'
import ButtonNavigate from './components/Aula11/ButtonNavigate'
import PrivateRoute from './components/Aula11/PrivateRoute'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  let nomeUsuario = 'Fabio'
  let nomeUsuario2 = 'Patricia'
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Aqui ele vai direcionar para home mesmo que vc tentar entrar sem o /home no final da url */}
          <Route path='/home' element={<Home />} /> {/*O path puxa o Url pq todo site que esta em home nao tem nada ex: apple.com/ 
            O element é o que vai puxar o component que vc quer*/}
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />{/*aqui ele ta pegando o parametro que é o id, o react sabe que o dois pontos e que vc ta pegando um parametro em outro componente*/}
          <Route path="/navigate" element={<ButtonNavigate />} />
           {/* Aqui é uma rota privada para nao conseguir acessar a url novamente estando deslogado do site */}
           <Route path="/home" element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
