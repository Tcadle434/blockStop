import React from "react";
import styled, { css } from "styled-components";
import NftLogo from "../../assets/pictures/blockstop-logo-only.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 4.5em;
  height: 4.5em;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 2.5em;
    width: 2.5em;
}
`;

const BiggerLogoImg = styled.img`
  width: 20em;
  height: 20em;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 8em;
    width: 8em;
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

export function BiggerLogo(props) {

  return(
    <LogoContainer>
      <BiggerLogoImg src={NftLogo}/>
    </LogoContainer>

  );

}