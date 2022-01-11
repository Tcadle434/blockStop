import React from "react";
import styled from "styled-components";
import { PartnerSection } from "./partnerSection";
import { FooterSection } from "./footerSection";


const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgba(1, 16, 31, 0.94);
    align-items: center;
`;

export function Partners(props) {
  return(
      <PageContainer>
        <PartnerSection />
        <FooterSection />
      </PageContainer>
    );
}