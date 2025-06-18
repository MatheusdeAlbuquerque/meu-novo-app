import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'
import ImagemAPI from './ImagemAPI';

const UsuariosStep = () => {
  const [dogImage, setDogImage] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        setDogImage(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
        setLoading(true);
      });
  }, []);
 
  if (loading) return <p>Carregando...</p>;
 
 
  return (
    <>
      <ImagemAPI></ImagemAPI>
      {dogImage.message}
    </>
  );
};
 
export default UsuariosStep;