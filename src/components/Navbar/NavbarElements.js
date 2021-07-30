import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiCoconuts } from 'react-icons/gi';

export const Nav = styled.nav`
background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavbarContainer = styled.div`
  display: flex;
 
  height: 80px;
  z-index: 1;
  width: 100%;
 
  max-width: 1100px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;


export const NavIcon = styled.div`
display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color:#FFFF00;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const Navlogo = styled.div`
margin-top: -260px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
  font-size: 24px;
}
@media screen and (max-width: 480px) {
  font-size: 18px;
}
  
`;
  
export const Bars = styled(GiCoconuts)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
export const SocialIconLink = styled.a`
  color: #FFFF00;
  font-size: 38px;
`;
export const SocialIcons = styled.div`
display: block;
  position: absolute;
  top: 10px;
  right:150px;
  cursor: pointer;
  color: #000080;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  
`;
  

