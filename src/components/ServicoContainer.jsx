import React from 'react';
import Servico from './Servico'; // Importe o componente Servico aqui

const ServicosContainer = () => {
  return (
    <div id="servicos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Servico titulo="Mudança Residencial" descricao="" corDeFundo="#007bff" index={0} />
      <Servico titulo="Mudança Interestadual" descricao="" corDeFundo="#dc3545" index={1} />
      <Servico titulo="Mudança Empresarial" descricao="" corDeFundo="#007bff" index={2} />
    </div>
  );
};

export default ServicosContainer;
