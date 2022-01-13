import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { TeamService } from "../../components/teamMember";
import ThomasImg from "../../assets/pictures/forevclone.png";
import SeanImg from "../../assets/pictures/tion.png";
import NickImg from "../../assets/pictures/nick.png";
import JaredImg from "../../assets/pictures/jared.png";
import TestImg from "../../assets/pictures/chfty.png";


const TeamContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(1, 16, 31, 0.94);
  align-items: center;
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
  width: 60%;
  text-align: center;

  @media screen and (min-width: 480px) and (max-width: 1420px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
    font-size: 16px;
    width: 80%;
}
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;
    display: inline-block;
    width: 90%;

}
`;

export function TeamSection(props) {

    return (
      <TeamContainer name="teamSection">
          <Title>Meet The Team </Title>
          <Details>BlockStop is a strategic group of like-minded individuals  focused on disrupting the NFT space. Our team of crypto + NFT natives have extensive marketing and technical expertise in strategy, development and overall marketing implementation. With cross-industry experience ranging from major financial institutions to the entertainment industry, the BlockStop team can translate the technical complexities to best suit your business</Details>

          <ContentRow>
              <TeamService 
                imageUrl={NickImg}
                name="Nick Poto"
              />
              <TeamService 
                imageUrl={JaredImg}
                name="Jared Nozick"
              />
          </ContentRow>

          <ContentRow>
              <TeamService 
                imageUrl={SeanImg}
                name="Sean Funke"
              />
              <TeamService 
                imageUrl={ThomasImg}
                name="Thomas Cadle"
              />
          </ContentRow>
      </TeamContainer>
  
    );
  
  }