import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import navimage from '../images/navimage.png';

const NavWrap = styled.div`
    width: 86%;
    height: 233px;
    margin-top: 49px;
    margin-bottom: 5vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: url(${navimage}) #3C5D64;
    background-position: 10% 23%;
    background-size: cover;
    background-repeat: no-repeat;

    border: 5px solid #F7ECE5;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
                0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.div`
    text-align: center;
    font-family: "Paytone One";
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const TextWrap = styled.a`
    width: 40%;
    height: 167px;
    border-radius: 60px;
    border: 1px solid #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Barlow", sans-serif;
    text-transform: uppercase;
    color: white;
    background: rgba(54, 58, 54, 0.96);

    transition: background-color 1s, color 1s;

    &:hover {
        background-color: #F7ECE5;
        color: #3C5D64;
    }
`;

const Next = styled.div`
    text-align: center;
    font-family: "Paytone One";
    font-size: 35px;
    font-style: normal;
    line-height: normal;

    a {
        text-decoration: none;
        color: inherit;
        &:hover {
        text-decoration: underline;
        }
    }
`;

const NavigationSec = ({ first, next, link }) => {
    return (
        <NavWrap>
        <TextWrap>
            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={link}>
            <Title>{first === true ? 'Begin Reading' : 'Continue'}</Title>
            <Next>
                {first === true ? 'Next: ' : 'Back to: '}
                {next}
            </Next>
            </Link>
        </TextWrap>
        </NavWrap>
    );
};

export default NavigationSec;
