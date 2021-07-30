import React from 'react';
import image from '../../images/image.png'

import { SiGooglemaps } from "react-icons/si";
import { Nav,NavLink, NavIcon, Bars, NavbarContainer,SocialIconLink, SocialIcons,Navlogo } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
        <SocialIcons>
          <SocialIconLink 
              href='https://goo.gl/maps/K97xQNdYqoQxiKhn9' 
              target='_blank' 
              aria-label='Googlemaps'>
                <SiGooglemaps/>
              </SocialIconLink>
          
          </SocialIcons>
        <NavLink to='/'></NavLink>
        <Navlogo><img src={image} alt="" height={200} width={200} /></Navlogo>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
