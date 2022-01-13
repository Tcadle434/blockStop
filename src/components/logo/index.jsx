import React from "react";
import styled, { css } from "styled-components";
import NftLogo from "../../assets/pictures/blocklogo.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 10em;
  height: 4em;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 3em;
    width: 7em;
}
`;

const styles = {
    bold: {fontWeight: 'bold'},
    italic: {fontStyle: 'italic'},
    underline: {textDecorationLine: 'underline'},
    blue: {color: '#16B1F3'}
};

export function Logo(props) {

  return(
    <LogoContainer>
      <LogoImg src={NftLogo}/>
    </LogoContainer>

  );

}