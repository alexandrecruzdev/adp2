import React from 'react';

const Sobre = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md container mx-auto py-8 mt-8 mb-8">
      <h2 className="text-2xl font-semibold mb-4">Sobre nós</h2>
      <p className="text-lg mb-4">
        Muito mais do que uma simples mudança ou transporte, residencial ou comercial, com a ADP Transportadora você vive uma experiência diferenciada de serviço.
      </p>
      <p className="text-lg mb-4">
        A ADP conta com profissionais qualificados, materiais exclusivos de embalagens, atendimento e serviços customizados e de alto padrão, criados para atender as diversas necessidades de nossos clientes.
      </p>
      <p className="text-lg mb-4">
        Temos soluções de coletas e entregas porta a porta em todo o território nacional e internacional. Embalamos e realizamos sua mudança com todo cuidado.
      </p>
      <p className="text-lg mb-4">
        Os serviços de entrega de obras de arte são realizados com caixas e embalagens sob medida, armazenagem climatizada e monitoramento. Surpreenda-se com os nossos serviços – faça uma cotação gratuita!
      </p>
      
      {/* Adicionando estrutura semântica para SEO */}
      <div className="hidden" aria-hidden="true">
        <h3>Serviços de Mudança e Transporte com a ADP Transportadora</h3>
        <p>
          A ADP Transportadora oferece serviços diferenciados de mudança e transporte residencial e comercial. Nossa equipe é composta por profissionais qualificados e dedicados, prontos para fornecer um serviço de alto padrão, adaptado às necessidades específicas de cada cliente.
        </p>
        <p>
          Utilizamos materiais de embalagem de alta qualidade e tecnologia avançada para garantir a segurança e proteção dos itens durante o transporte. Além disso, oferecemos soluções personalizadas de coleta e entrega, tanto nacional quanto internacionalmente.
        </p>
        <p>
          Com a ADP Transportadora, você pode ter certeza de que sua mudança será realizada com cuidado e profissionalismo. Entre em contato conosco hoje mesmo para uma cotação gratuita e surpreenda-se com a qualidade dos nossos serviços.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
