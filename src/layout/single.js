import React from 'react';
import { useParams } from 'react-router-dom';
import procesadorData from '/workspaces/Carrusel/src/procesador.json';

const Single = () => {
  const { slug } = useParams();
  const procesador = procesadorData.find(it => it.slug === slug);

  if (!procesador) {
    return <div>Procesador no encontrado</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <div style={{ flex: '0 0 50%', textAlign: 'center' }}>
        <img 
          src={procesador.picture} 
          alt={procesador.name} 
          style={{ width: '300px', height: 'auto' }} 
        />
      </div>
      <div style={{ flex: '1', marginLeft: '20px' }}>
        <h1>{procesador.name}</h1>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{procesador.price}</p>
        <p style={{ fontSize: '16px' }}>{procesador.characteristics}</p>
      </div>
    </div>
  );
}

export default Single;