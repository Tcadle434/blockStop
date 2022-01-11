import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import Fade from 'react-reveal/Fade';


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

const List = styled.ul`
  list-style: square;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
  display: list-item;
  flex-direction: column;
  padding: 3px 0px;
  color: #fff;
  :first-of-type {
    border-top: none;
  }
`;

export function ServiceSectionContent(props) {
  return(
      <PageContainer>
          <Navbar />
          <Title>Services</Title>
          <ContentContainer>
          <Details>BlockStop offers a variety of services to aid in your NFT projects creation and growth: Education, consulting, full marketing packages, development and artwork. 
              We have experience in all facets and want to ensure quality projects have the tools and insight needed to succeed
          </Details>

          <Fade top>
          <SubTitle>Consulting / Assessment</SubTitle>
          <List>
              <ListItem>Initial 1 hour intake + debrief of the projects goals + current status </ListItem>
              <ListItem>General roadmap creation + release strategy</ListItem>
              <ListItem>1x - 2x weekly meetings to provide guidance + feedback + advice moving forward</ListItem>
              <ListItem>SOPs regarding the best ways to grow follower counts + engagement and overall marketing strategy</ListItem>
          </List>
          </Fade>

          <Fade top>
          <SubTitle>Marketing Package</SubTitle>
            <List>
                <ListItem>Social Media Management and Posting</ListItem>
                <ListItem>Roadmap creation</ListItem>
                <ListItem>Content Creation + Release Strategy</ListItem>
                <ListItem>Project Collab introductions + tips</ListItem>
                <ListItem>Influencer partnership outreach + tips</ListItem>
                <ListItem>Brand Language development</ListItem>
                <ListItem>Twitter Spaces</ListItem>
                <ListItem>NFT + Whitelist Giveaways</ListItem>
            </List>
            </Fade>

            <Fade top>
            <SubTitle>Community Management</SubTitle>
            <List>
                <ListItem>Discord creation + management</ListItem>
                <ListItem>Discord announcements</ListItem>
                <ListItem>Custom role creation + assignment</ListItem>
                <ListItem>Exclusive discord channels</ListItem>
                <ListItem>Community only giveaways</ListItem>
            </List>
            </Fade>

            <Fade top>
            <SubTitle>Development</SubTitle>
            <List>
                <ListItem>Website Design + Development from in house devs</ListItem>
                <ListItem>Web3 Integration</ListItem>
                <ListItem>Seamless minting process on ETH or SOL</ListItem>
                <ListItem>Custom Smart Contracts (ETH)</ListItem>
                <ListItem>Audited Rust Programs (SOL)</ListItem>
            </List>
            </Fade>

            <Fade top>
            <SubTitle>Art (creation + generation)</SubTitle>
            <List>
                <ListItem>Unique and original art created from well connected artists</ListItem>
                <ListItem>Programmatic script to generate all unique NFT combos</ListItem>
                <ListItem>Creation of Metadata files associated with each NFT</ListItem>
                <ListItem>2D or 3D</ListItem>
                <ListItem>Custom Logo design + creation</ListItem>
                <ListItem>Custom graphics to use on Social Media</ListItem>
            </List>
            </Fade>
          </ContentContainer>
      </PageContainer>
    );
}