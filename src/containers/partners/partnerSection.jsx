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
    font-size: 24px;
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
        <Title>Partners</Title>
        <ContentContainer>
        <Details>Our goal at BlockStop is to provide expertise in whichever facet our clients may need. Here are some highlighted projects we've worked with, including
            specifics on how we were able to help them
        </Details>

        <Fade top>
        <AboutContent
            title= "Fyat Lux"
            descriptionOne="Fyat Lux integrates AR technology with NFTs in an awesome artstic creation by Anthony Jones"
            descriptionTwo="We lead the marketing effort for Fyat Lux's NFT campaign, growing their Twitter and Discord followings from xxxx to xx,xxx and helping to ensure a sellout that raised over 1,000 ETH"
            imageUrl={FyatImg}
        />
        </Fade>

        <Fade top>
        <AboutContent
            title= "CHFTY Pizzas"
            descriptionOne="Led by two culinary experts who are excited to dive head first into the metaverse, Tom Colicchio and Spike Mendelsohn are building the largest chef and foodie community in NFTs"
            descriptionTwo="We are currently leading the marketing efforts for CHFTY, helping to get these incredible chefs surrounded by a supportive and excited NFT community"
            imageUrl={ChftyImg}
            isReversed
        />
        </Fade>

        </ContentContainer>
        </PageContainer>
      );
  }