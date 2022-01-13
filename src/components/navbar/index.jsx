import React from "react";
import styled from "styled-components";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { Logo } from "../logo";
import { Element, scroller } from "react-scroll";


const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  background-color: rgba(2, 23, 65, 0.39);


  @media screen and (max-width: 480px) {
    height: 85px;
}
  `;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50%;

  @media screen and (max-width: 480px) {
    min-width: 20%;

}
`;


const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 50%;

  @media screen and (max-width: 480px) {
    width: 70%;

}
`;


export function Navbar(props) {
  const scrollToFooterSection= () => {
    scroller.scrollTo("footerSection", { smooth: true, duration: 1500 })
  }

  return (
    <NavbarContainer>
    <BrandContainer>
      <Link to="/">
        <Logo />
      </Link>
    </BrandContainer>
      <AccessibilityContainer>
        <Link to="/services">
          <Button small> Services</Button>
        </Link>
        <Link to="/partners">
          <Button small> Clients</Button>
        </Link>
          <Button small onClick={scrollToFooterSection}> Contact</Button>
      </AccessibilityContainer>
    </NavbarContainer>

  );

}