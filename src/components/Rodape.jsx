import React from 'react';

const Rodape = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="container mx-auto">
        <p className="mb-4">
          <i className="fas fa-envelope" style={{ fontSize: '20px', marginRight: '8px' }}></i>
          E-mail: patrick@adptmudancas.com.br
        </p>
        <p className="mb-4">
          <i className="fas fa-phone" style={{ fontSize: '20px', marginRight: '8px' }}></i>
          Telefone: (21) 21974889009
        </p>
        <p className="mb-4">
          <i className="fas fa-map-marker-alt" style={{ fontSize: '20px', marginRight: '8px' }}></i>
          Endereço: Rua Frolick, 169 - Apt 302 São Cristóvão CEP 20941-020 Rio de Janeiro/RJ
        </p>
        <p className="mb-4">CNPJ: 40368081/0001-00</p>
        <p>© 2021 - <a href="mailto:alexandrecruzprimeiro@gmail.com"><i className="fas fa-envelope" style={{ fontSize: '20px', marginRight: '8px' }}></i>alexandrecruzprimeiro@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Rodape;
