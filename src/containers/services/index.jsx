import React from "react";
import styled from "styled-components";
import { ServiceSectionContent } from "./serviceSection";
import { FooterSection } from "../homepage/footerSection";


const PageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    align-items: center;
`;


export function Services(props) {
  return(
        <PageContainer>
            <ServiceSectionContent />
            <FooterSection />
        </PageContainer>
    );
}