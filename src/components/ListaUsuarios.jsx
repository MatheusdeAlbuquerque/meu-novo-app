import React, { useState, useEffect } from 'react';

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(reponse => reponse.json())
        .then(data => setUsuarios(data));
    }, [])

    return(
        <div>
            <h1>Usuários</h1>
            <ul>
                {usuarios.map(usuario => (<li key={usuario.id}>{usuario.name}</li>))}
            </ul>
        </div>
    )
}

export default ListaUsuarios;