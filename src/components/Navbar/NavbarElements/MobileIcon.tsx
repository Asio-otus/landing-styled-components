import React from "react";
import styled from 'styled-components'

export const MobileIcon = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    
    display: block;
    
    font-size: 1.8rem;
    
    color: #fff;
    
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`
