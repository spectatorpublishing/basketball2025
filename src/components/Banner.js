import React from 'react';
import styled from 'styled-components';
import backgroundImage from  '../images/backgroundimg.png'
import HomepageIcon from './HomepageIcon'

// Styled Component for the background image
const BackgroundImage = styled.div`
    width: 100%;
    height: 100vh;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: 50% 70%;

    position: relative; 
`;


const IconWrapper = styled.a`
    display: block;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    
    position: absolute;
    right: 0;
    top: 51px;
    padding-right: 45px;

    cursor: pointer; 
    text-decoration: none; 
`;



const Banner = () => {
  return(
    <BackgroundImage>
        <IconWrapper href="https://www.columbiaspectator.com/" >
            <HomepageIcon/>
        </IconWrapper>
    </BackgroundImage>
  );
};

export default Banner;
