import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis react-router-dom

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed', // Rendre la barre fixe
        top: '1rem', // Éloigner la barre du haut du site
        left: '50%', // Centrer horizontalement
        transform: 'translateX(-50%)', // Ajuster pour le centrage
        width: '90%', // Ajuster la largeur
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        background: '#282c34',
        color: 'white',
        borderRadius: '10px', // Conserver les bords arrondis
        zIndex: 1000, // Assurer que la barre reste au-dessus du contenu
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Ajouter une ombre pour un effet esthétique
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: 'bold',
          fontSize: '1.2rem',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Cerfontaine
      </Link>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1rem',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/restaurants" style={{ color: 'white', textDecoration: 'none' }}>
            Restaurants
          </Link>
        </li>
        <li>
          <Link to="/logement" style={{ color: 'white', textDecoration: 'none' }}>
            Logements
          </Link>
        </li>
        <li>
          <Link to="/balades" style={{ color: 'white', textDecoration: 'none' }}>
            Balades
          </Link>
        </li>
        <li>
          <Link to="/activites" style={{ color: 'white', textDecoration: 'none' }}>
            Activités
          </Link>
        </li>
        <li>
          <Link to="/magasins" style={{ color: 'white', textDecoration: 'none' }}>
            Magasins
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;