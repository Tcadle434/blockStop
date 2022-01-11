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
    subTitle="what is"
    title= "VSPR Blockchain"
    descriptionOne="Our aim is to integrate industry leading names and brands into web3 + NFTs. With experts in product strategy, marketing and development, we have all the resources needed to help grow and deploy quality projects. The new age of the internet is advancing rapidly, but there are still countless opportunities for innovation"
    descriptionTwo="In such a fast moving environment, we are here to educate and seamlessly bridge companies and top tier talent into an expanding digital world. From shaping your NFT project roadmap, to organic community growth across social media platforms, and completed with custom websites + deployment processes, we are ready to guide those who want to make their mark on the blockchain"
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
    subTitle="Recently Featured Client"
    title= "Fyat Lux"
    descriptionOne="Fyat Lux integrates AR technology with NFTs in an awesome artstic creation by Anthony Jones"
    descriptionTwo="We lead the marketing effort for Fyat Lux's NFT campaign, growing their Twitter and Discord followings from xxxx to xx,xxx and helping to ensure a sellout that raised over 1,000 ETH"
    imageUrl={FyatImg}
    />

    </ContentContainer>
    </AboutContainer>

  );

}