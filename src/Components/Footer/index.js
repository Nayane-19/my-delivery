import React from "react";
import { Link } from "react-router-dom";

import garçonete from "../../images/garçonete.png";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaMailBulk,
  } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SidebarMenu,
  SidebarLink,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <img src={garçonete} alt="garçonete" />
              MyDelivery
            </SocialLogo>
            <SidebarMenu>
              <Link to="/">
                <SidebarLink>Home</SidebarLink>
              </Link>
              <Link to="/Cardapio">
                <SidebarLink>Cardápio</SidebarLink>
              </Link>
              <Link to="/Cadastro">
                <SidebarLink>Cadastro</SidebarLink>
              </Link>
            </SidebarMenu>
            <SocialIcons>
              <SocialIconLink
                href="https://web.whatsapp.com/"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/nayane.m.santos/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Nayane-19"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://mail.google.com/mail/u/0/#inbox"
                target="_blank"
                aria-label="Gmail"
                rel="noopener noreferrer"
              >
                <FaMailBulk />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/nayane-menezes-dev-eng/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
