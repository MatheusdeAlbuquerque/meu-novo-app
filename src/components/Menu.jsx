import React, { useState } from 'react';
import Texto from './Texto';

const Menu = (props) =>{
    const [message, setMessage] = useState('Olá, ');
    
    const handleClick = () => {
    setMessage('Você deslogou do sistema');
  };

return (
    <div>
      <h1>{message} {props.nome}</h1>
      <Texto onButtonClick={handleClick} />
    </div>
  );

}

export default Menu