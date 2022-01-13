import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { AboutContent } from "../../components/aboutComponent";
import CubeImg from "../../assets/pictures/cube.png";
import FyatImg from "../../assets/pictures/fyat.png";
import Fade from 'react-reveal/Fade';

const AboutContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 16, 31, 0.94);
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


export function AboutSection(props) {

  return (
    <AboutContainer name="aboutSection">
    <ContentContainer>
    <AboutContent
    title= "Welcome to BlockStop"
    descriptionOne="You have heard of NFTs, you have heard of the metaverse; but how do you get involved? Welcome to Blockstop - a group of marketers, developers, artists, storytellers and blockchain enthusiasts. Our mission is to introduce and integrate Web3 and Blockchain technologies with proven industry leaders to expand their existing offerings"
    descriptionTwo="With experts in product strategy, marketing, and development, BlockStop serves as a creative hub to grow, build and deploy NFT projects for your business. A new rapidly advancing era of the internet has begun and BlockStop is ready to be your guide to this frontier"
    imageUrl={CubeImg}
    />

    </ContentContainer>
    </AboutContainer>

  );

}

export function FeaturedSection(props) {

  return (
    <AboutContainer name="featuredSection">
    <ContentContainer>
    <AboutContent
    title= "Our Recent Work"
    subTitle="Fyat Lux"
    descriptionOne="Developed by a world-class team that has worked for MIT, Google, Nintendo, Riot, Activision Blizzard, Netflix, Vuforia, Wayfair, and Disney, Fyat Lux combines groundbreaking technologies with mind-blowing art to launch the next evolution of NFTs for world-building and storytelling"
    descriptionTwo="The Blockstop team propelled Fyat Lux to a sell out in < 24 hours with over 1000+ ETH in sales and 300% growth across Discord, Instagram and Twitter"
    imageUrl={FyatImg}
    />

    </ContentContainer>
    </AboutContainer>

  );

}