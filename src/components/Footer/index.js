import React from 'react';
import {
  FaFacebook,
  FaWhatsapp,
  FaTelegramPlane ,
  
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialAddress,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Priyadelux Coconut Oil Mill
            <SocialAddress>Address:4/41B,Ettayapuram Road, Mapillaioorani Main Rd, North, Om Shanti Nagar, Thoothukudi, Tamil Nadu 628002</SocialAddress>
            <SocialAddress>Phone:9442615293</SocialAddress>
            </SocialLogo>
            
            <SocialIcons>
              <SocialIconLink 
              href='https://www.facebook.com/priyadeluxvelmugan/'
              target='_blank' 
              aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink 
              href=' https://wa.me/qr/GFIYDZYYWSLII1' 
              target='_blank' 
              aria-label='Whatsapp'>
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink 
              href='https://t.me/priyadelux_customer_care' 
              target='_blank' 
              aria-label='Telegram'>
                <FaTelegramPlane />
              </SocialIconLink>
              
              
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
