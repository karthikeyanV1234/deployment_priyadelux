import React from 'react';
import image from '../../images/image.png'

import { SiGooglemaps } from "react-icons/si";
import { Nav,NavLink, NavIcon, Bars, NavbarContainer,SocialIconLink, SocialIcons,Navlogo,SidebarMenu } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
        
        <NavLink to='/'></NavLink>
        <Navlogo><img src={image} alt="" height={200} width={200} /></Navlogo>
        <SidebarMenu>
        <NavIcon onClick= {toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
        <SocialIcons>
          <SocialIconLink 
              href='https://goo.gl/maps/K97xQNdYqoQxiKhn9' 
              target='_blank' 
              aria-label='Googlemaps'>
                <SiGooglemaps/>
              </SocialIconLink>
          
          </SocialIcons>
          </SidebarMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
