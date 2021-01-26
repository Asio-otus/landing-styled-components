import React from "react";
import styled from 'styled-components'
import {ThemeType} from "../global-styles/theme";

export const MobileIcon = styled.div<{theme: ThemeType}>`
  display: none;
  
  @media (max-width: ${({theme}) => theme.mediaQueries.mediumMax}) {
    position: absolute;
    top: 0;
    right: 0;
    
    display: block;
    
    font-size: ${({theme}) => theme.font.size.fs3};
    
    color: ${({theme}) => theme.color.white};
    
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`
