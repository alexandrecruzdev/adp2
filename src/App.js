import React, { useState } from 'react';
import Auth from './Auth';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlide';
import Servico from './components/Servico';
import Comment from './components/Comment';
import imgSrc from './images/materialembalagem.jpeg'
import TextoSobreServicos from './components/TextoSobreServicos';
import EmbalagemEspecial from './components/EmbalagemEspecial';
import Sobre from './components/Sobre';
import Rodape from './components/Rodape';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}> {/* Aplicando scroll suave ao corpo do documento */}
      <Navbar user={user} setUser={setUser} />
      <div id="home">
      <BannerSlider />
      </div>
      <div id="servicos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Servico imagemSrc={imgSrc} titulo="Mudança Residencial" descricao="" />
        <Servico imagemSrc={imgSrc} titulo="Mudança Interestadual" descricao="" />
        <Servico imagemSrc={imgSrc} titulo="Mudança Empresarial" descricao="" />
      </div>
      <TextoSobreServicos />
      <EmbalagemEspecial />
      <Comment user={user} setUser={setUser} />
      <div id="sobre">
        <Sobre />
      </div>
      <Rodape/>
    </div>
  );
}

export default App;
