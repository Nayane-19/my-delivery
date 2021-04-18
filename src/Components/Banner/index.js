import React from 'react';

import { Link } from "react-router-dom";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from '../Banner/BannerElements';

import garçonete from "../../images/garçonete.png";

function Banner() { 

  return (
    <HeroContainer>        
     <HeroContent>
        <HeroItems>
            <img src={garçonete} alt="garçonete" />
          <HeroH1>O melhor Delivery</HeroH1>
          <HeroP>Entrega em 30 min</HeroP>
          <Link to='/Pedido'>
          <HeroBtn>Faça seu pedido</HeroBtn>
          </Link>
          
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Banner;