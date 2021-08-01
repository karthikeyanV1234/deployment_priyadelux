import React from 'react';
import image from '../../images/image.png'

import { Nav,NavLink, NavIcon, Bars,SidebarMenu, NavbarContainer,SocialIconLink, SocialIcons,Navlogo,Maps  } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
        
        <NavLink to='/'></NavLink>
        <Navlogo><img src={image} alt="" height={200} width={200} /></Navlogo>
        
        <NavIcon onClick= {toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <SidebarMenu>
        <SocialIcons>
          <SocialIconLink 
              href='https://goo.gl/maps/K97xQNdYqoQxiKhn9' 
              target='_blank' 
              aria-label='Googlemaps'>
                <Maps  />
              </SocialIconLink>
          
          </SocialIcons>
          </SidebarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
