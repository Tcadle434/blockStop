import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { AboutContent } from "../../components/aboutComponent";
import CubeImg from "../../assets/pictures/cube.png";
import FyatImg from "../../assets/pictures/fyat.png";
import ChefImg from "../../assets/pictures/chef-pizza.jpeg"
import Fade from 'react-reveal/Fade';

const AboutContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 16, 31, 0.99);
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
  margin-block-start: 1.2em;
  margin-block-end: 1.2em;

  @media screen and (min-width: 925px) and (max-width: 1420px) {
    width: 80%;
  }
    @media screen and (max-width: 925px) {
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
    <Fade>
    <AboutContent
    title= "Welcome to BlockStop"
    descriptionOne="We are marketers, developers, artists, storytellers and blockchain enthusiasts preparing brands for the next generation of the internet"
    descriptionTwo="Our mission is to introduce and integrate Web3 and Blockchain technologies with proven industry leaders creating value and expanding their existing offerings. BlockStop has a proven track record successfully launching Web3 projects for celebrities, companies and their brands
    "
    imageUrl={CubeImg}
    />
   </Fade>
    </ContentContainer>
    </AboutContainer>

  );

}

export function FeaturedSection(props) {

  return (
    <AboutContainer name="featuredSection">
    <ContentContainer>
    <Fade>
    <AboutContent
    title= "Highlighted Client"
    subTitle="CHFTY Pizzas"
    descriptionOne="Driven by two culinary experts Tom Colicchio and Spike Mendelsohn, CHFTY is committed to building the largest community of chefs and foodies in Web3."
    descriptionTwo="The BlockStop team fully serviced this project and enabled a sellout of 2,777 NFTs"
    imageUrl={ChefImg}
    />
    </Fade>
    </ContentContainer>
    </AboutContainer>

  );

}

export { AboutSection as default } from "./aboutSection.jsx";
