import React from "react";
import styled from "styled-components/macro";
import Rotate from 'react-reveal/Rotate';

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  text-align: center;
  margin: 20px 20px;

  @media screen and (max-width: 480px) {

}

`;

const NameText = styled.h3`
  color: #FFFFFF;
  font-family: Oxanium-Regular;
  font-size: 18px;
  margin-block-start: 0.1em;
  margin-block-end: 0.3em;
  line-height: 55px;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 18px;
  }
`;

const Img = styled.img`
  height: 10em;
  width: 10em;
  border-radius: 50%;

`;


export function TeamService(props) {
    const { imageUrl, name } = props;
    
      return (
        <Rotate top right>
        <TeamContainer >
              <Img src = {imageUrl} />
              <NameText> {name} </NameText>
        </TeamContainer>
        </Rotate>
      );
    
}