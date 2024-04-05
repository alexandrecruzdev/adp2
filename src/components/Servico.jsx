import React from 'react';

const Servico = ({ imagemSrc, titulo, descricao }) => {
  return (
    <div className="servico relative rounded-lg overflow-hidden m-2" style={{ width: '200px', height: '200px' }}>
      <img
        src={imagemSrc}
        alt="Imagem do Serviço"
        className="object-cover w-full h-full filter brightness-50"
      />
      <div className="descricao absolute inset-0 flex flex-col justify-center items-center text-white p-4 bg-opacity-75">
        <h2 className="text-2xl font-bold mb-2 text-center">{titulo}</h2>
        <p className="text-sm text-center">{descricao}</p>
      </div>
    </div>
  );
};

export default Servico;
