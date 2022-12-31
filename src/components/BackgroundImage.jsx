import React from 'react'
import Background from '../assets/login.jpg';
import Styled from "styled-components";
const BackgroundImage = () => {
  return (
    <Container>
            <img src={Background} alt="background image" />
    </Container>



    
  )
}
const Container = Styled.div`
height: 100vh;
width: 100vw;
img {
    height:100vh;
    width:100vw;
}
`;
export default BackgroundImage