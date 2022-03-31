import React from 'react'
import styled from "styled-components";
import { AboutSection, FeaturedSection } from "./aboutSection";
import { ServiceSection } from "./serviceSection";
import { TeamSection } from "./teamSection"
import { FooterSection } from "./footerSection"


const PageContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
background-color: rgba(1, 16, 31, 0.94);

`;

const TopSec = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import("./topSection")
  );
});

export function Homepage(props) {
  return(
      <PageContainer>
        <TopSec/>
        <AboutSection />
        <ServiceSection />
        <FeaturedSection />
        <TeamSection />
        <FooterSection />
      </PageContainer>
    );
}