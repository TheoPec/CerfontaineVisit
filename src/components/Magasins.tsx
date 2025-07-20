import React from 'react';
import PageLayout from './PageLayout';
import magasinsData from '../data/magasins.json'; // Importer les données JSON

const Magasins = () => {
  return (
    <PageLayout title="Magasins">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
        {magasinsData.map((magasin) => (
          <div
            key={magasin.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #555',
              borderRadius: '8px',
              padding: '1rem',
              maxWidth: '300px',
              backgroundColor: '#282c34',
              color: 'white',
            }}
          >
            <img
              src={magasin.image}
              alt={magasin.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{magasin.name}</h3>
            <p style={{ fontSize: '1rem', color: '#ccc' }}>{magasin.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Magasins;