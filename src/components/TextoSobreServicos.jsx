import React from 'react';

function TextoSobreServicos() {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Serviços</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Completo</h3>
                    <p>
                        Nossa empresa faz absolutamente tudo, oferece o serviço de A a Z. Veja como ficam as etapas do processo:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Desmontagem dos móveis (quando aplicável)</li>
                        <li>Embalagem</li>
                        <li>Inventário</li>
                        <li>Carregamento do caminhão</li>
                        <li>Transporte até o destino final</li>
                        <li>Descarregamento</li>
                        <li>Desembalagem</li>
                        <li>Montagem dos móveis (exceto novos)</li>
                        <li>Retirada do resíduo no mesmo dia da entrega</li>
                    </ul>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Econômico</h3>
                    <p>
                        Muitas vezes, os clientes precisam reduzir custos e personalizar o serviço para atender às suas necessidades. Desta forma, os clientes podem escolher quais etapas do processo eles mesmos realizarão e quais serão realizadas pela empresa. Veja abaixo como ficam as etapas, destacando apenas as que obrigatoriamente são feitas pela nossa empresa. As demais ficam livres para serem ou não executadas pelo cliente. Cada etapa terá seu adicional:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Desmontagem dos móveis (quando aplicável)</li>
                        <li>Embalagem</li>
                        <li>Inventário - (EMPRESA)</li>
                        <li>Carregamento do caminhão</li>
                        <li>Transporte até o destino final - (EMPRESA)</li>
                        <li>Descarregamento</li>
                        <li>Desembalagem</li>
                        <li>Montagem dos móveis (exceto novos)</li>
                        <li>Retirada do resíduo no mesmo dia da entrega</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TextoSobreServicos;
