import React from "react";
import styled from "styled-components/macro";

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  text-align: center;
  width: 25%;
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
    text-align: center;
    max-width: 100%;

}
`;

const DescriptionContainer = styled.div`
  height: 7em;

  @media screen and (min-width: 900px) and (max-width: 1440px) {
    height: 15em;

  }

  @media screen and (min-width: 480px) and (max-width: 900px) {
    height: 20em;

  }

  @media screen and (max-width: 480px) {

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

export function StrategyService(props) {
  const { title, imageUrl, description } = props;
  
    return (
      <ServiceContainer >
            <Title> {title} </Title>
            <ImgThree src = {imageUrl} />
            <DescriptionContainer>
            <Details> {description} </Details>
            </DescriptionContainer>
      </ServiceContainer>
    );
  
}

export function MarketingService(props) {
    const { title, imageUrl, description } = props;
    
      return (
        <ServiceContainer >
              <Title> {title} </Title>
              <ImgTwo src = {imageUrl} />
              <DescriptionContainer>
            <Details> {description} </Details>
            </DescriptionContainer>        
            </ServiceContainer>
      );
    
}

export function DevService(props) {
    const { title, imageUrl, description } = props;
    
      return (
        <ServiceContainer >
              <Title> {title} </Title>
              <Img src = {imageUrl} />
              <DescriptionContainer>
            <Details> {description} </Details>
            </DescriptionContainer>        
            </ServiceContainer>
      );
    
}


export function ArtService(props) {
    const { title, imageUrl, description } = props;
    
      return (
        <ServiceContainer >
              <Title> {title} </Title>
              <ImgThree src = {imageUrl} />
              <DescriptionContainer>
            <Details> {description} </Details>
            </DescriptionContainer>        
            </ServiceContainer>
      );
    
}

export function DeployService(props) {
  const { title, imageUrl, description } = props;
  
    return (
      <ServiceContainer >
            <Title> {title} </Title>
            <ImgThree src = {imageUrl} />
            <DescriptionContainer>
            <Details> {description} </Details>
            </DescriptionContainer>
            </ServiceContainer>
    );
  
}