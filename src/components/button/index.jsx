
import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({small}) => (small ? "16px 20px " : "14px 22px")};
  border-radius: 5px;
  background-color: transparent;
  color: #FFFFFF;
  font-weight: normal;
  font-size: 20px;
  margin: 20px 20px;
  font-family: Oxanium-Regular;
  outline: none;
  border: none;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    border: none;
    color: #FFFFFF;
  }
  @media screen and (min-width: 720px) and (max-width: 1024px) {
  font-size: 16px;
  padding: ${({small}) => (small ? "8px 10px " : "14px 22px")};
}

@media screen and (min-width: 480px) and (max-width: 720px) {
  font-size: 13px;
  padding: ${({small}) => (small ? "3px 5px " : "14px 22px")};
}

  @media screen and (max-width: 480px) {
  font-size: 12px;
  padding: ${({small}) => (small ? "1px 1px " : "16px 22px")};
}
`;

export function Button(props) {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}