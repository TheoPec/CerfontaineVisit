import React from 'react';
import backgroundImage from '../images/background.jpg';
import cerfImage from '../images/cerf.png'; // Importer l'image cerf.png

const Home = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', margin: 0, paddingTop: '4rem' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'black', opacity: 0.5 }}></div>
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start', // Positionner le contenu en haut
          height: '90vh', // Réduire la hauteur pour indiquer qu'il y a du contenu en bas
          color: 'white',
          textAlign: 'center', // Centrer le texte horizontalement
          paddingTop: '2rem', // Ajouter un espace entre la navbar et le contenu
        }}
      >
        <img
          src={cerfImage}
          alt="Cerf"
          style={{
            width: '150px', // Ajuster la largeur de l'image
            marginBottom: '1rem', // Ajouter un espace entre l'image et le texte
          }}
        />
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Bienvenue à Cerfontaine</h1>
        <p style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '2rem', fontSize: '1.2rem' }}>
          Découvrez les merveilles de notre commune belge : restaurants, logements, balades, activités et magasins.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '2rem',
          color: 'white',
          maxWidth: '800px',
          margin: '0 auto',
          marginTop: '-9rem', // Remonter légèrement le texte du bas
        }}
      >
        <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🌿 Cerfontaine, un écrin de nature au cœur de la Wallonie
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Nichée entre lacs et forêts, la commune de Cerfontaine séduit par son environnement naturel préservé. Avec ses
            paysages verdoyants, ses vastes plans d’eau et ses promenades pittoresques, elle offre un véritable havre de
            paix aux amoureux de la nature. Que vous soyez adepte de randonnées, de VTT ou simplement en quête de
            tranquillité, Cerfontaine vous invite à respirer et à vous ressourcer.
          </p>
        </section>
        <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🌊 Un patrimoine riche et une histoire à découvrir
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Cerfontaine ne se résume pas à ses paysages : elle est aussi riche d’un patrimoine historique et culturel. Son
            blason, qui arbore fièrement un cerf buvant à une fontaine, rappelle l’importance de l’eau et de la forêt dans
            l’identité de la région. Le village et ses entités regorgent de petites églises, de chapelles et de monuments
            qui témoignent d’un passé vibrant.
          </p>
        </section>
        <section style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            🚤 Des activités pour tous les goûts
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Entre les barrages de l’Eau d’Heure, les rives accueillantes pour la pêche, les plages aménagées et les
            nombreuses activités nautiques, Cerfontaine est le lieu idéal pour un séjour actif ou relaxant. Les familles
            apprécieront les aires de jeux et les sentiers balisés, tandis que les gourmands pourront savourer la
            gastronomie locale dans les restaurants et pubs du coin.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;