import React from "react";
import styled from "styled-components";
import { PartnerSection } from "./partnerSection";
import { FooterSection } from "../homepage/footerSection";


const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000000;
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