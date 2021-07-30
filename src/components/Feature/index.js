import React from 'react';
import { FeatureContainer,SocialIconLink,SocialIcons } from './FeatureElements';
import {
  
  FaWhatsappSquare,
  FaTelegram,
  
} from 'react-icons/fa';

const Feature = () => {
  return (
    <FeatureContainer>
      
      <h1>Phone: 9442059218 </h1>
      <p>Email: priyadeluvelmurugan@gmail.com</p>
      <h2>Since Our company is established 1988,Around 33years we are successed in this filed . we provide pure and natural traditional Chekku Coconut oil. </h2>
      <SocialIcons>
      <SocialIconLink 
              href=' https://wa.me/qr/GFIYDZYYWSLII1' 
              target='_blank' 
              aria-label='Whatsapp'>
                <FaWhatsappSquare />
              </SocialIconLink>
     <SocialIconLink 
              href='https://t.me/priyadelux_customer_care' 
              target='_blank' 
              aria-label='Telegram'>
                <FaTelegram />
              </SocialIconLink>
      </SocialIcons>
    </FeatureContainer>
  );
};

export default Feature;
