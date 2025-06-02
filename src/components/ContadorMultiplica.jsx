import React, { useState } from 'react';
const ContadorMultiplica = () => {
    const [contador, setContador] = useState(2);
    const incrementar = () => {
        setContador(contador * 2);
    };
    return (
        <div>
            <h1>Contador X2: {contador}</h1>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
};
export default ContadorMultiplica;