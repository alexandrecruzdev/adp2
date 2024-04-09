import './WhatsAppButton.css'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/5521974889009'; 
  };

  return (
    <div>
<div
      className="whatsapp-button" // Adicionando a classe para a animação de pulsação
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
      }}
      onClick={handleWhatsAppClick}
      alt="Botão do WhatsApp"
      title="Clique para entrar em contato via WhatsApp"
    >
      <i className="fab fa-whatsapp" style={{ fontSize: '44px' }}></i>
    </div>
    </div>
    
  );
};

export default WhatsAppButton;
