import React from "react";
import styled, { css } from "styled-components";
import NftLogo from "../../assets/pictures/logoheader.png";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 13em;
  height: 3.6em;
  align-items: center;

  @media screen and (max-width: 480px) {
    height: 2em;
    width: 7.2em;
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