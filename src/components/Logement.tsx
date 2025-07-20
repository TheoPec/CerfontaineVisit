import React from 'react';
import PageLayout from './PageLayout';
import logementData from '../data/logement.json'; // Importer les données JSON

const Logement = () => {
  return (
    <PageLayout title="Logement">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
        {logementData.map((logement) => (
          <div
            key={logement.id}
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
              src={logement.image}
              alt={logement.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{logement.name}</h3>
            <p style={{ fontSize: '1rem', color: '#ccc' }}>{logement.location}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Logement;