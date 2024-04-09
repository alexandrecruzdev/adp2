import './Servico.css'
import React from 'react';

const Servico = ({ titulo, descricao, corDeFundo, index }) => {
  const animationDelay = `${index * 0.1}s`; // Calcula o atraso da animação

  return (
    <div className="servico relative rounded-lg overflow-hidden m-2" style={{ width: '200px', height: '200px', backgroundColor: corDeFundo }}>
      <div className={`descricao absolute inset-0 flex flex-col justify-center items-center text-white p-4 bg-opacity-75 pulse-animation delay-${index}`} style={{ animationDelay }}>
        <h2 className="text-2xl font-bold mb-2 text-center">{titulo}</h2>
        <p className="text-sm text-center">{descricao}</p>
      </div>
    </div>
  );
};

export default Servico;
