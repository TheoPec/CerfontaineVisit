import React from 'react';
import PageLayout from './PageLayout';
import activitesData from '../data/activites.json'; // Importer les données JSON

const Activites = () => {
  return (
    <PageLayout title="Activités">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
        {activitesData.map((activite) => (
          <div
            key={activite.id}
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
              src={activite.image}
              alt={activite.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{activite.name}</h3>
            <p style={{ fontSize: '1rem', color: '#ccc' }}>{activite.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Activites;