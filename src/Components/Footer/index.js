import React from 'react';


import garçonete from "../../images/garçonete.png"


import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaGit,
  FaMailBulk,
  FaMailchimp
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  SidebarMenu,
  SidebarLink
} from './FooterElements';


function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
          <SocialLogo to='/'> 
          <img src={garçonete} alt="garçonete"/>        
                  MyDelivery                
          </SocialLogo> 
          <SidebarMenu>
                <SidebarLink to='/'>Cardápio</SidebarLink>
                <SidebarLink to='/'>Faça Seu Pedido</SidebarLink>
                <SidebarLink to='/'>Contato</SidebarLink>
            </SidebarMenu>                       
            <SocialIcons>
              <SocialIconLink href='https://web.whatsapp.com/' target='_blank' aria-label='WhatsApp'>
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/nayane.m.santos/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/Nayane-19' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://mail.google.com/mail/u/0/#inbox'
                target='_blank'
                aria-label='Gmail'
                rel='noopener noreferrer'
              >
                <FaMailBulk />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/nayane-menezes-dev-eng/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;