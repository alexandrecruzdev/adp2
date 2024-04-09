import React from 'react';
import Slider from 'react-slick';
import Banner from '../images/banner.gif';

// Importe os estilos do slick carousel
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
          <img src={Banner} alt="Serviços de Mudança Residencial - Empresa ADP TRANSPORTES E MUDANÇAS" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
        <div className="overflow-hidden">
          <img src={Banner} alt="Serviços de Mudança Interestadual - Empresa ADP TRANSPORTES E MUDANÇAS" style={{ maxHeight: '600px', width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
