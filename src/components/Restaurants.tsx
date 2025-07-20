import React from 'react';
import PageLayout from './PageLayout';
import restaurantsData from '../data/restaurants.json'; // Importer les données JSON

const Restaurants = () => {
  return (
    <PageLayout title="Restaurants">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
        {restaurantsData.map((restaurant) => (
          <div
            key={restaurant.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #555',
              borderRadius: '8px',
              padding: '1rem',
              maxWidth: '300px',
              backgroundColor: '#282c34', // Couleur gris foncé comme la navbar
              color: 'white', // Texte blanc
            }}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{restaurant.name}</h3>
            <p style={{ fontSize: '1rem', color: '#ccc' }}>{restaurant.location}</p>
          </div>
        ))}
      </div>
      <div style={{ height: '4rem' }}></div> {/* Ajouter un espace sous le contenu */}
    </PageLayout>
  );
};

export default Restaurants;