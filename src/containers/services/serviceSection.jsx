import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/navbar";
import Fade from 'react-reveal/Fade';


const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000000;
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

const MidTitle = styled.h2`
  color: #FFFFFF;
  font-family: Oxanium-Regular;
  font-size: 46px;
  margin-block-start: 2em;
  line-height: 55px;
  margin-block-end: 0.4em;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
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
  margin-block-end: 2em;

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
          <Details>In an ever-changing digital world, BlockStop will seamlessly bridge your brand with the metaverse. From bringing your imagination to reality, to shaping your NFT project roadmap and growing an organic community, Blockstop offers a wide array of services aimed to fit your vision
          </Details>
          <Fade top>
          <MidTitle>How To Work With BlockStop?</MidTitle>
          <SubTitle>Audit / Assessment</SubTitle>
          <List>
              <ListItem>Our team will conduct an Initial onboarding & assessment - how can we help you?</ListItem>
              <ListItem>Internally, we will figure out the best  strategic solution for your project</ListItem>
              <ListItem>Our team will follow up with an audit and best next steps to work together and ensure your project is a success</ListItem>
          </List>
          </Fade>

          <Fade top>
          <MidTitle>What We Offer</MidTitle>

          <SubTitle>Marketing & Growth</SubTitle>
            <List>
                <ListItem>Social Media management, strategy, implementation and execution</ListItem>
                <ListItem>Roadmap creation & deployment</ListItem>
                <ListItem>Content creation & release strategy</ListItem>
                <ListItem>Project collaborations and partnerships</ListItem>
                <ListItem>General branding development</ListItem>
            </List>
            </Fade>

            <Fade top>
            <SubTitle>Community Management</SubTitle>
            <List>
                <ListItem>Discord creation & management</ListItem>
                <ListItem>Custom role creation & assignment</ListItem>
                <ListItem>Create verified holder discord channels</ListItem>
                <ListItem>Promote active community engagement</ListItem>
            </List>
            </Fade>

            <Fade top>
            <SubTitle>Development</SubTitle>
            <List>
                <ListItem>Full stack Web3 development from in-house devs</ListItem>
                <ListItem>Website design & deployment</ListItem>
                <ListItem>Seamless minting process on ETH or SOL</ListItem>
                <ListItem>Custom Smart Contracts (ETH)</ListItem>
                <ListItem>Audited Rust Programs (SOL)</ListItem>
            </List>
            </Fade>

            <Fade top>
            <SubTitle>Art (creation + generation)</SubTitle>
            <List>
                <ListItem>Network of proven NFT artists</ListItem>
                <ListItem>Programmatic script to generate all unique NFT generative combinations</ListItem>
                <ListItem>Creation of Metadata files associated with each NFT</ListItem>
            </List>
            </Fade>
          </ContentContainer>
      </PageContainer>
    );
}