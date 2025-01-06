import React from 'react';
import styled from 'styled-components';
import white_crown from '../images/white_crown 1.png';


const IconContainer = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
`;

const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
    fill: none;
`;

const StyledCircle = styled.circle`
    fill: black;
`;


const CenterImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 39px;
    height: 38px;
    border-radius: 50%;
`;

const CircleIcon = ({ imageUrl }) => {
    return (
        <IconContainer>
        <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
            <StyledCircle cx="35" cy="35" r="35" />
        </StyledSVG>
        <CenterImage src={imageUrl} alt="Centered icon" />
        </IconContainer>
    );
};

const HomepageIcon = () => {
    return (
        <div>
        <CircleIcon imageUrl={white_crown} />
        </div>
    );
};

export default HomepageIcon;
