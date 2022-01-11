import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import TwitterImg from "../../assets/pictures/twitter.png";
import DiscordImg from "../../assets/pictures/discord.png";

const FooterContainer = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(1, 16, 31, 0.94);
  text-align: center;
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
}
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialMediaImg = styled.img`
  width: 4m;
  height: 3em;
  @media screen and (max-width: 480px) {
  width: 4em;
  height: 3em;
  align-items: center;
}
`;

const ButtonWrap = styled.button`
  align-items: center;
  color: transparent;
  background-color: transparent;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  padding: 15px 15px;
  &:hover {
    border: none;
    transform:scale(1.3, 1.3);
  }
  @media screen and (min-width: 1024px) and (max-width: 1680px) {
}
  @media screen and (max-width: 480px) {
    align-items: center;
}
`;

export function FooterSection(props) {
  
    return (
      <FooterContainer name="footerSection">
        <Title>Contact Us</Title>
        <ContentRow>
        <ButtonWrap>
            <a href = "https://discord.gg/Vk26nVgTMk">
            <SocialMediaImg src={DiscordImg} />
            </a>
          </ButtonWrap>
          <ButtonWrap>
            <a href="https://twitter.com/AntiSocialBots">
            <SocialMediaImg src={TwitterImg} />
            </a>
          </ButtonWrap>
        </ContentRow>
        <Details>
            Twitter: @abcdefg <br />
            Discord: inv.link/kjklc <br />
            Email: vspr.agency@gmail.com <br /> <br />
            @ 2022 VSPR Blockchain
        </Details>
      </FooterContainer>
  
    );
  
  }