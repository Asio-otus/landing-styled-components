import React from "react";
import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;

  //margin-top: -80px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 80px;

  font-size: 1rem;
  
  background: #000;
  
  @media screen and (max-width: 960px) {
    transition: .8s all ease;
  }
`