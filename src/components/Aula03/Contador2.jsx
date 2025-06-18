import React, {useState} from 'react';

const Contador2 = () => {
    const [contador, setContador] = useState(0);

    function cacular(contador){
        return contador
    }

   return (
    <div>
        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
   ) 
}

export default Contador2;