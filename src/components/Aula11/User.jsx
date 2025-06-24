import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); //id é um objeto que recebe useParams
  return <h1>Usuário ID: {id}</h1>;
}

export default User;