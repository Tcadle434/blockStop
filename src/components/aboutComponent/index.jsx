import React from "react";
import styled from "styled-components/macro";



const RowContainer = styled.div`
  display: flex;
  align-items: center;
  margin-block-end: 7em;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};

  @media screen and (max-width: 925px) {
    display: inline-block;
    align-items: center;

}

`;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  webkit-align-items: left !important;
  padding: 20px;

  @media screen and (max-width: 480px) {
    align-items: center;
}

`;


const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
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

  @media screen and (max-width: 480px) {
    font-size: 16px;
}
`;

const Img = styled.img`
  height: 23em;
  width: 23em;


  @media screen and (max-width: 1000px) {
    height: 15em;
    width: 15em;
    margin: auto
}
`;


export function AboutContent(props) {
const { subTitle, title, descriptionOne, descriptionTwo, imageUrl, isReversed } = props;

  return (
    <RowContainer isReversed={isReversed}>
    <ServiceContainer >
          <Title> {title} </Title>
          <SubTitle>{subTitle}</SubTitle>
          <DescriptionContainer>
          <Details> {descriptionOne} </Details>
          <Details> {descriptionTwo} </Details>
        </DescriptionContainer>
    </ServiceContainer>
    <ServiceContainer>
    <Img src ={imageUrl} />
    </ServiceContainer>
    </RowContainer>
  );

}
