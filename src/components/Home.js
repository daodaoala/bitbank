import React, { useState, useEffect, useRef } from 'react'
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { Slide, Zoom } from "react-awesome-reveal";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Section1 from './main/Section1';
import Section2 from './main/Section2';
import Section3 from './main/Section3';


const Home = () => {

    return (
        <>
            <Container maxWidth="sm">
                <Section1 />
                <Section2 />
                <Section3 />
            </Container>
        </>
    );

}

export default Home;

const slideUp = keyframes`
  0% {
      transform: translateX(0%);
  }
  10% {
      transform: translateX(10%);
      transform: translateY(10%);
  }
  20% {
      transform: translateX(20%);
      transform: translateY(20%);
  }
  50% {
      transform: translateX(50%);
     
  }
  75% {
      transform: translateX(75%);
    
  }
  100% {
      transform: translateX(100%);
      
  }
`;

export const ImageDiv = styled.div`
  @media (max-width: 710px) {
  }
  @media (max-width: 576px) {
  }
  @media (max-width: 400px) {
  }
`;

export const ChattImage = styled.img`
  margin-left: 180px;
  @media (max-width: 1100px) {
    margin-left: 10px;
  }
  @media (max-width: 770px) {
    margin-left: 10px;
    display: block;
  }
  @media (max-width: 576px) {
    margin-left: 2px;
    display: block;
  }
  @media (max-width: 400px) {
    margin-left: 7px;
    width: 85vw;
  }
`;

export const FoodImgDiv = styled.div`
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

export const Img = styled.img`
  position: relative;
`;
export const Div = styled.div``;