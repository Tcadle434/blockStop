import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import { AboutContent } from "../../components/aboutComponent";
import Fade from 'react-reveal/Fade';
import FyatImg from "../../assets/pictures/fyat.png";
import ChftyImg from "../../assets/pictures/chfty.png";


const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(1, 16, 31, 0.94);
    align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 60%;
  margin-block-start: 1.2em;
  margin-block-end: 1.2em;

  @media screen and (min-width: 480px) and (max-width: 1420px) {
    width: 80%;
  }
    @media screen and (max-width: 480px) {
      align-items: center;
      justify-content: center;
      display: inline-block;
      width: 90%;

  }
`;

const SubTitle = styled.h2`
  color: #FFFFFF;
  font-family: Oxanium-Regular;
  font-size: 32px;
  margin-block-end: 0.1em;
  line-height: 55px;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 18px;
  }
`;

const Title = styled.h2`
    color: #FFFFFF;
    font-family: Oxanium-Regular;
    font-size: 50px;
    margin-block-start: 1.5em;
    margin-block-end: 0.3em;
    line-height: 55px;

    @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 28px;
}
`;

const Details = styled.p`
  color: #FFFFFF;
  font-family: Oxanium-Regular;
  font-size: 20px;
  text-align: center;
  margin-block-end: 5em;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: center;
}
`;

export function PartnerSection(props) {
    return(
        <PageContainer>
        <Navbar />
        <Title>Our Work</Title>
        <ContentContainer>
        <Details>Our goal at BlockStop is to provide expertise in whichever facet you may need on your Web3 journey. Here are some highlighted projects we've worked with, including
            specifics on how we were able to help them
        </Details>

        <Fade top>
        <AboutContent
            title= "Fyat Lux"
            descriptionOne="Developed by a world-class team that has worked for MIT, Google, Nintendo, Riot, Activision Blizzard, Netflix, Vuforia, Wayfair, and Disney, Fyat Lux combines groundbreaking technologies with mind-blowing art to launch the next evolution of NFTs for world-building and storytelling"
            descriptionTwo="The Blockstop team propelled Fyat Lux to a sell out in < 24 hours with over 1000+ ETH in sales and 300% growth across Discord, Instagram and Twitter"
            imageUrl={FyatImg}
        />
        </Fade>

        <Fade top>
        <AboutContent
            title= "CHFTY Pizzas"
            descriptionOne="Led by two culinary experts who are excited to dive head first into the metaverse, Tom Colicchio and Spike Mendelsohn are building the largest chef and foodie community in NFTs"
            descriptionTwo="BlockStop is leading the product strategy and marketing efforts for CHFTY, with a focus to organically grow their community and provide long term value to the CHFTY Pizza holders"
            imageUrl={ChftyImg}
            isReversed
        />
        </Fade>

        </ContentContainer>
        </PageContainer>
      );
  }