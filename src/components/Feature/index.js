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
      <p>Email: priyadeluxvelmurugan@gmail.com</p>
      <h2>Since Our company is established 1987, Around 34years we are succeed in this field. We provide pure and natural traditional Chekku Coconut Oil. </h2>
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
