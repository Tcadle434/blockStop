import React from "react";
import styled from "styled-components/macro";
import CustomImageLoader from 'custom-image-loader-react';
import NftLogo from "../../assets/pictures/logo-bigger.png";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
`;

const LoaderRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
`;



export function CustomLoader(props) {

    return(
        <LoaderContainer>
          <LoaderRow>
            <CustomImageLoader
              image={NftLogo}
              isLoaded={true}
              circle={false}
              speed={2}
              animationType={'flash'}
            />
          </LoaderRow>
        </LoaderContainer>
    );
  }
