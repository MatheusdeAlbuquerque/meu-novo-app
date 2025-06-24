import React, { useState } from "react";

function FormularioControlado() {
  const [nome, setNome] = useState("");


  //
  const handleChange = (event) => {
    setNome(event.target.value); // Atualiza o estado com o valor do campo
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o recarregamento da página, vai parar de fazer o submit e recarregar a página
    alert(`Olá, ${nome}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Escreve aqui seu Nome:
        <input
          type="text"
          value={nome}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioControlado;