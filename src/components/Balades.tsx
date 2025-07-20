import React from 'react';
import PageLayout from './PageLayout';
import baladesData from '../data/balades.json'; // Importer les données JSON

const Balades = () => {
  return (
    <PageLayout title="Balades">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
        {baladesData.map((balade) => (
          <div
            key={balade.id}
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
              src={balade.image}
              alt={balade.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{balade.name}</h3>
            <p style={{ fontSize: '1rem', color: '#ccc' }}>{balade.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Balades;