import React from 'react';
import backgroundImage from '../images/background.jpg';

const PageLayout = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh', // Assurer que la page occupe toute la hauteur de l'écran
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Positionner le contenu en haut
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10, // Assurer que le contenu est au-dessus du fond noir
          paddingTop: '4rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>{title}</h1>
        {children}
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'black',
          opacity: 0.5,
          zIndex: 5, // Placer le fond noir en dessous du contenu
        }}
      ></div>
    </div>
  );
};

export default PageLayout;