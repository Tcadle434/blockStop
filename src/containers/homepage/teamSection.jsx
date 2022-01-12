import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { TeamService } from "../../components/teamMember";
import ProfImg from "../../assets/pictures/profpic.png";
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

  @media screen and (max-width: 480px) {
    font-size: 16px;
    width: 90%;
    text-align: center;
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
          <Details>The team is comprised of crypto + NFT natives as well as marketing and techncial experts</Details>

          <ContentRow>
              <TeamService 
                imageUrl={ProfImg}
                name="Nick"
              />
              <TeamService 
                imageUrl={ProfImg}
                name="Jared"
              />
          </ContentRow>

          <ContentRow>
              <TeamService 
                imageUrl={ProfImg}
                name="Sean"
              />
              <TeamService 
                imageUrl={ProfImg}
                name="Thomas"
              />
          </ContentRow>
      </TeamContainer>
  
    );
  
  }