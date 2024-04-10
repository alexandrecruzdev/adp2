import React from 'react';
import Slider from 'react-slick';
import Banner from '../images/banner.gif';
import Img1 from '../images/img1.jpeg'
import Img5 from '../images/img5.jpeg'
import Img6 from '../images/img6.jpeg'
import Img8 from '../images/img8.jpeg'
import Img9 from '../images/img9.jpeg'
import Img11 from '../images/img11.jpeg'
import Img12 from '../images/img12.jpeg'
import Img13 from '../images/img13.jpeg'
import Img14 from '../images/img14.jpeg'
import Img15 from '../images/img15.jpeg'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Definindo apenas uma imagem por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="overflow-hidden">
          <img src={Banner} alt="Serviços de Mudança Residencial - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças Rio de Janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img1} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj  Mudanças Rio de Janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img5} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj  Mudanças Rio de Janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img6} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img8} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img9} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img11} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img12} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img13} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img14} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Img15} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS Mudanças Rj Frete e Mudança Caminhão de mudança Frete rio mudanças rj Mudanças  Rio de janeiro" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
