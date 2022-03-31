import React from "react";
import {LineWave} from "react-loader-spinner";
import styled from "styled-components/macro";


const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(1, 16, 31, 0.94);
  height: 100vh;

  @media screen and (max-width: 480px) {

}

`;

export function CustomLoader(props) {
    const { msg } = props;

    return(
        <LoaderContainer>
          <LineWave
            type="Spinner Type"
            color="white"
            height={500}
            width={500}
            ariaLabel="three-circles-rotating"r
          />        
        <p>{msg}</p>
        </LoaderContainer>
    );
  
  }
