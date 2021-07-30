import styled from 'styled-components';


export const HeroContainer = styled.div`
 bacground: #0c0c0c;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0 30px;
 height: 800px;
 position: relative;
 z-index: 1;
 @media screen and (max-width: 768px) {
  font-size: 24px;
}
@media screen and (max-width: 480px) {
  font-size: 20px;
}

`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }

`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;

  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroContent = styled.div`
z-index:3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display:flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 768px) {
  font-size: 24px;
}
@media screen and (max-width: 480px) {
  font-size: 18px;
}
`;

export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 0px) {
  width: 0%;
}
`;

export const HeroH1 = styled.h1`
  color:#fff
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const HeroP = styled.p`
margin-top: 24px;
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


