
import React, { useState } from "react";

function FormularioMultiCampos() {
  const [formData, setFormData] = useState({//Use state pode receber um objeto.
    nome: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Extrai o nome e valor do campo, pegue os atributos de name e value dentro do html
    setFormData({ ...formData, [name]: value }); // Atualiza o campo correspondente no estado
    //Alterar o objeto inicial passando.
    //...formData ta pegando todos os dados do objeto.
    // [name] vai pegar os value da cada input, pq sao eles que vamos pegar as informacoes do usuario.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${formData.nome}, Email: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioMultiCampos;
