import React, { useEffect, useState } from 'react';

const ApiTeste = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.bry.com.br/api/people')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
    </div>
  );
}

export default ApiTeste;