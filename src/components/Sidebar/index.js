import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SocialIcons,
  SocialIcons1,

  SocialIconLink
 
} from './SidebarElements';
import {
  
  FaWhatsappSquare,
  FaTelegram,
  
} from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      
      <SidebarMenu>
      <SocialIcons1>
      <SocialIconLink 
              href=' https://wa.me/qr/GFIYDZYYWSLII1' 
              target='_blank' 
              aria-label='Whatsapp'>
                <FaWhatsappSquare />
              </SocialIconLink>
              </SocialIcons1>
    <SocialIcons>
     <SocialIconLink 
              href='https://t.me/priyadelux_customer_care' 
              target='_blank' 
              aria-label='Telegram'>
                <FaTelegram />
              </SocialIconLink>
      </SocialIcons>
      </SidebarMenu>
    
      
    </SidebarContainer>
  );
};

export default Sidebar;
