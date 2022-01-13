import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { MarketingService, DevService, ArtService, StrategyService, DeployService } from "../../components/homeService";
import KeyboardImg from "../../assets/pictures/keyboard.png";
import MessageImg from "../../assets/pictures/message.png";
import PencilImg from "../../assets/pictures/pencil.png";
import BrainImg from "../../assets/pictures/brain.png";
import RocketImg from "../../assets/pictures/rocket.png";
import Fade from 'react-reveal/Fade';
import { motion } from "framer-motion"


const ServiceContainer = styled(Element)`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 16, 31, 0.94);
  align-items: center;

`;

const ServiceFilter = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-block-end: 5em;

    background-color: rgba(84, 125, 166, 0.35);

    @media screen and (max-width: 480px) {
      margin-block-end: 0.5em;
  
  }
`;

const CenterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 480px) {
        display: inline-block;
    
    }
`;

export function ServiceSection(props) {

    return (
      <ServiceContainer name="serviceSection">
      <ServiceFilter>
      <Fade left>

     <CenterContainer>
      <ContentContainer>
      <StrategyService
      title="Strategy"
      description="Each NFT project is unique. Our team has the expertise to navigate your project vision and discover critical value adds through Web3 integration"
      imageUrl={ BrainImg }

      />
      <MarketingService
      title="Marketing"
      description="Your project will thrive. BlockStop prides itself on community building, partnerships, marketing, engagement and organic growth"
      imageUrl={ MessageImg }

      />
      <DevService
      title="Development"
      description="Custom websites with Web3 integration and minting capabilities on either the Ethereum or Solana Blockchain"
      imageUrl={ KeyboardImg }

      />
      <ArtService
      title="Artwork"
      description="Connections with top tier artists in the industry who can bring your project and ideas to life"
      imageUrl={ PencilImg }

      />
      </ContentContainer>
      </CenterContainer>
      </Fade>
      </ServiceFilter>
      </ServiceContainer>
  
    );
  
  }