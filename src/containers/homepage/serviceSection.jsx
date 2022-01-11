import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { MarketingService, DevService, ArtService } from "../../components/homeService";
import KeyboardImg from "../../assets/pictures/keyboard.png";
import MessageImg from "../../assets/pictures/message.png";
import PencilImg from "../../assets/pictures/pencil.png";
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

    background-color: rgba(84, 125, 166, 0.35);
`;

const CenterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ContentContainer = styled.div`
    width: 70%;
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
      <MarketingService
      title="Marketing"
      description="Ensure your project is noticed by all the right eyes, with an emphasis on organic community growth"
      imageUrl={ MessageImg }

      />
      <DevService
      title="Development"
      description="Custom websites built in-house from the ground up, with web3 integration on either ETH or SOL"
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