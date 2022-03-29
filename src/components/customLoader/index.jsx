import React from "react";
import {LineWave} from "react-loader-spinner";
import styled from "styled-components/macro";


const LoaderContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {

}

`;

export function CustomLoader(props) {
    const { msg } = props;

    return(
        <LoaderContainer>
          <LineWave
            type="Spinner Type"
            color="blue"
            height={110}
            width={110}
            ariaLabel="three-circles-rotating"r
          />        
        <p>{msg}</p>
        </LoaderContainer>
    );
  
  }
