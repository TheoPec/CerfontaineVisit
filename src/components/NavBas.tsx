import React from 'react';

const NavBas = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '1rem',
        backgroundColor: '#282c34',
        color: 'white',
        marginTop: 'auto',
      }}
    >
      <hr
        style={{
          border: 'none',
          borderTop: '1px solid #555',
          marginBottom: '1rem',
        }}
      />
      <p style={{ margin: 0 }}>Email: team@hexinoxservices.com</p>
      <p style={{ margin: 0 }}>Téléphone: +32 123 45 67 89</p>
    </footer>
  );
};

export default NavBas;