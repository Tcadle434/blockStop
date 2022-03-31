import React from "react";
import styled from "styled-components";
import { PartnerSection } from "./partnerSection";
import { FooterSection } from "../homepage/footerSection";


const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(1, 16, 31, 0.94);
    align-items: center;
`;

const PartnerSec = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(
    () => import("./partnerSection")
  );
});

export function Partners(props) {
  return(
      <PageContainer>
        <PartnerSec />
        <FooterSection />
      </PageContainer>
    );
}