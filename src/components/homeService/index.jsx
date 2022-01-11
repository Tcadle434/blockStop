import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: inline-block;

}

`;

const Title = styled.h3`
  color: #FFFFFF;
  font-family: Oxanium-Regular;
  font-size: 30px;
  margin-block-start: 0.1em;
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
  max-width: 90%;

  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

const Img = styled.img`
  height: 5em;
  width: 10em;
`;

const ImgTwo = styled.img`
  height: 5em;
  width: 7em;
`;

const ImgThree = styled.img`
  height: 5em;
  width: 5em;
`;

export function MarketingService(props) {
    const { title, imageUrl, description } = props;
    
      return (
        <ServiceContainer >
              <Title> {title} </Title>
              <ImgTwo src = {imageUrl} />
              <Details> {description} </Details>
        </ServiceContainer>
      );
    
}

export function DevService(props) {
    const { title, imageUrl, description } = props;
    
      return (
        <ServiceContainer >
              <Title> {title} </Title>
              <Img src = {imageUrl} />
              <Details> {description} </Details>
        </ServiceContainer>
      );
    
}


export function ArtService(props) {
    const { title, imageUrl, description } = props;
    
      return (
        <ServiceContainer >
              <Title> {title} </Title>
              <ImgThree src = {imageUrl} />
              <Details> {description} </Details>
        </ServiceContainer>
      );
    
}