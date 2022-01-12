import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import BackgroundImg from "../../assets/pictures/chaintrim.mov";
import { Navbar } from "../../components/navbar";
// import AWS from 'aws-sdk';

// var s3 = new AWS.S3({region: "us-east-1"});
// var params = {
//     Bucket: "blockstop",
//     Key: "backgroundofficial.mov"
// }
// const preSignUrl = s3.getSignedUrl("getObject", params);

const TopContainer = styled.div`
    width: 100%;
    @media screen and (max-width: 480px) {

}
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.31);
`;

const VideoContainer = styled.div`
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;

`
const Video = styled.video`
    height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
    left: 50%;
    min-height: 100vh;
    min-width: 177.77vh; // for a 16:9 aspect ratio, 16/9*100 = 177.77
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.5);
  left: 0;
  min-width: 100%;
  min-height: 100vh;
  height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
  width: 100vw;
  object-fit: cover;
  object-position: center;
  position: absolute;
  right: 0;
  top: 0;
`;

const NameText = styled.h1`
  font-family: Oxanium-SemiBold;
  font-size: 82px;
  color: #FFFFFF;
  text-align: center;
  margin-block-start: 1.5em;

    @media screen and (min-width: 1024px) and (max-width: 1420px) {
        font-size: 64px;
    }

    @media screen and (min-width: 480px) and (max-width: 1024px) {
        font-size: 48px;
    }

  @media screen and (max-width: 480px) {
    font-size: 40px;
    margin-block-start: 2.5em;

    }

`;

const SloganText = styled.h2`
  font-family: Oxanium-Regular;
  color: #FFFFFF;
  text-align: center;


  @media screen and (max-width: 480px) {
    font-size: 20px;
    align-items: center;
    }
`;

const VideoTwo = styled.video`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  min-height: 100vh;
  height: 56.25vw; // for a 16:9 aspect ratio, 9/16*100 = 56.25
  width: 100vw;
  object-fit: cover;


`;

export function TopSection(props) {

    return(
        < TopContainer>
        <Element name="topSection">
        <VideoTwo autoPlay loop muted playsInline>
            <source src={BackgroundImg} type="video/mp4" />
        </VideoTwo>
            <Overlay> 
                <Navbar />
                <NameText>
                    The <br />
                    BlockStop
                </NameText>
                <SloganText>
                    Your NFT one stop shop. Bringing high caliber clients and brands onto the Blockchain 
                </SloganText>          
            </Overlay>

      </Element>
      </TopContainer>
    );
  }