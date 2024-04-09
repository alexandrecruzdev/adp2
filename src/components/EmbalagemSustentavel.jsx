import React from 'react';
import embalagemImg from '../images/reciclagem.jpg';

function EmbalagemSustentavel() {
    return (
        <div className="py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <img src={embalagemImg} alt="Embalagem Sustentável - Embalagem de material reciclável" className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6" />
                <div>
                    <h2 className="text-3xl font-bold mb-4">Embalagem Sustentável</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                        Utilizamos embalagem de material reciclável e prezamos pela conscientização e preservação do meio ambiente.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EmbalagemSustentavel;
