import React from 'react';

function TextoSobreServicos() {
    return (
        <div className="container mx-auto py-8">
            <title>Serviços de Mudança Completa e Econômicos - ADP Transportadora</title>
            <h2 className="text-3xl font-bold text-center mb-6">Serviços de Mudança Completa e Econômicos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Serviços de Mudança Completa</h3>
                    <p>
                        Conheça nossos serviços de mudança completa. Da desmontagem dos móveis à montagem no destino final, oferecemos uma solução abrangente para sua mudança.
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Desmontagem dos móveis (quando aplicável)</li>
                        <li>Embalagem profissional</li>
                        <li>Inventário detalhado</li>
                        <li>Carregamento seguro do caminhão</li>
                        <li>Transporte até o destino final</li>
                        <li>Descarregamento cuidadoso</li>
                        <li>Desembalagem e montagem dos móveis</li>
                        <li>Remoção de resíduos</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Serviços Econômicos de Mudança</h3>
                    <p>
                        Descubra nossas opções econômicas de mudança, onde você pode personalizar os serviços de acordo com suas necessidades e orçamento.
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Escolha quais etapas do processo realizar</li>
                        <li>Opções flexíveis de embalagem</li>
                        <li>Inventário parcial (se necessário)</li>
                        <li>Transporte seguro e eficiente</li>
                        <li>Assistência na descarga e montagem</li>
                        <li>Opções de remoção de resíduos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TextoSobreServicos;
