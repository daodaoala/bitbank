import React from 'react'
import styled, { keyframes } from "styled-components";
import { useHistory } from "react-router-dom";
import { Zoom, Slide } from "react-awesome-reveal";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ranking from './../img/ranking.png'; 
import Grid from '@mui/material/Grid';

const Section3 = () => {

    return (
        <>
            <Container maxWidth="sm">
                <Box display="flex" justifyContent="center" alignItems="top">
                    <div>
                         <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <Wrapper>
                                    <TextDiv>
                                    <Zoom triggerOnce={false} duration={1500}>
                                        <Text>그 밖에 카드사 별</Text>
                                        <Text>1위부터 10위 인기 카드</Text>
                                    </Zoom>
                                    </TextDiv>
                                    <div>
                                      <Slide triggerOnce={false} direction={"right"} duration={1500}>
                                          <ChattImage src={ranking} alt="banner"/>
                                      </Slide>
                                    </div>
                                </Wrapper>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </>
    );

}

export default Section3;


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

export const Wrapper = styled.div`
  background-color: #F7F8E0;
  padding-top: 75px;
  height: 100vh;
  width: 100vw;
  padding: 0 20px;
  align-items: center;
  display: flex;
  @media (max-width: 710px) {
    display: block;
  }
  @media (max-width: 576px) {
    display: block;
  }
  @media (max-width: 400px) {
    display: block;
  }
`;

export const TextDiv = styled.div`
  margin-left: 20%;
  @media (max-width: 1100px) {
    margin-left: 13%;
  }
  @media (max-width: 710px) {
    margin-left: -100px;
  }
  @media (max-width: 576px) {
    margin-left: 17%;
  }
  @media (max-width: 400px) {
    margin-left: 14%;
  }
`;

export const Text = styled.div`
  color: #2167C2;
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 5px;
  @media (max-width: 770px) {
    font-size: 1.7rem;
    margin: 0 20px 0 -20px;
  }
  @media (max-width: 576px) {
    font-size: 1.7rem;
    padding-top: 10px;
  }
  @media (max-width: 400px) {
    text-align: center;
    font-size: 1.6rem;
    padding-top: 10px;
  }
`;

export const ChattImage = styled.img`
  margin-left: 180px;
  border-radius: 45px;
  height: 100%;
  @media (max-width: 1300px) {
    margin-left: 80px;
    height: 90vh;
    width: 25vw;
  }
  @media (max-width: 770px) {
    margin: 0 20px 0 -10px;
    display: block;
    height: 85vh;
    width: 55vw;
  }
  @media (max-width: 576px) {
    margin: 20px 0 0 9%;
    width: 85vw;
    height: 82vh;
  }
  @media (max-width: 400px) {
    margin-left: 12%;
    width: 85vw;
    height: 81vh;
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