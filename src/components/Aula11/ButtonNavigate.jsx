
import { useNavigate } from 'react-router-dom';

function ButtonNavigate() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/about')}>Ir para Sobre </button>
}

export default ButtonNavigate;
            