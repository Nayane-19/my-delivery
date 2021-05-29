import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ListaElements";

import pizza from "../../images/pizza.jpg";
import pizza4 from "../../images/pizza4.jpg";
import hamburguer1 from "../../images/hamburguer1.jpg";
import Hamburguer2 from "../../images/Hamburguer2.jpg";
import batata1 from "../../images/batata1.jpg";
import batata2 from "../../images/batata2.png";

function Lista() {
  return (
    <ProductsContainer>
      <ProductsHeading>Faça seu Pedido!</ProductsHeading>
      <ProductWrapper>
        <ProductCard>
          <ProductImg src={pizza} />
          <ProductInfo>
            <ProductTitle>Moda da Casa</ProductTitle>
            <ProductDesc>Pizza gourmet</ProductDesc>
            <ProductPrice>R$ 59,90</ProductPrice>
            <ProductButton>Comprar</ProductButton>
          </ProductInfo>
        </ProductCard>

        <ProductCard>
          <ProductImg src={pizza4} />
          <ProductInfo>
            <ProductTitle>Marguerita</ProductTitle>
            <ProductDesc>Pizza Especial</ProductDesc>
            <ProductPrice>R$ 45,00</ProductPrice>
            <ProductButton>Comprar</ProductButton>
          </ProductInfo>
        </ProductCard>
      </ProductWrapper>

      <ProductWrapper>
        <ProductCard>
          <ProductImg src={hamburguer1} />
          <ProductInfo>
            <ProductTitle>Picanha Burguer</ProductTitle>
            <ProductDesc>Hamburguer Artesanal</ProductDesc>
            <ProductPrice>R$ 29,90</ProductPrice>
            <ProductButton>Comprar</ProductButton>
          </ProductInfo>
        </ProductCard>

        <ProductCard>
          <ProductImg src={Hamburguer2} />
          <ProductInfo>
            <ProductTitle>Duplo Burguer</ProductTitle>
            <ProductDesc>Hamburguer Tradicional </ProductDesc>
            <ProductPrice>R$ 19,90</ProductPrice>
            <ProductButton>Comprar</ProductButton>
          </ProductInfo>
        </ProductCard>
      </ProductWrapper>

      <ProductWrapper>
        <ProductCard>
          <ProductImg src={batata1} />
          <ProductInfo>
            <ProductTitle>Bacon</ProductTitle>
            <ProductDesc>Batata Recheada</ProductDesc>
            <ProductPrice>R$ 29,90</ProductPrice>
            <ProductButton>Comprar</ProductButton>
          </ProductInfo>
        </ProductCard>

        <ProductCard>
          <ProductImg src={batata2} />
          <ProductInfo>
            <ProductTitle>Frango</ProductTitle>
            <ProductDesc>Batata Recheada</ProductDesc>
            <ProductPrice>R$ 29,90</ProductPrice>
            <ProductButton>Comprar</ProductButton>
          </ProductInfo>
        </ProductCard>
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default Lista;
