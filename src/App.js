import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BannerSlider from './components/BannerSlide';
import Comment from './components/Comment';
import TextoSobreServicos from './components/TextoSobreServicos';
import EmbalagemEspecial from './components/EmbalagemEspecial';
import Sobre from './components/Sobre';
import Rodape from './components/Rodape';
import Auth from './Auth';
import WhatsAppButton from './components/WhatsAppButton';
import ServicosContainer from './components/ServicoContainer';
import imgSrc from './images/materialembalagem.jpeg'

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App" style={{ scrollBehavior: 'smooth' }}>
      <Navbar user={user} setUser={setUser} />
      <div id="home">
        <BannerSlider />
      </div>
<ServicosContainer imgSrc={imgSrc}/>
      <TextoSobreServicos />
      <div id="comentarios">
        <EmbalagemEspecial />
        <Comment user={user} setUser={setUser} />
        <Auth user={user} setUser={setUser} buttonText={'Entrar com o Google para deixar um comentário'} />
      </div>
      <div id="sobre">
        <Sobre />
      </div>
      <Rodape />
      <WhatsAppButton />
    </div>
  );
}

export default App;
