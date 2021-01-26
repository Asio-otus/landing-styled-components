import styled from "styled-components";
import {ThemeType} from "../../global-styles/theme";

export const H1 = styled.h1<{theme: ThemeType}>`
  font-size: ${({theme}) => theme.font.size.fs5};
  text-align: center;

  color: ${({theme}) => theme.color.white};

  @media (max-width: 768px) {
    font-size: ${({theme}) => theme.font.size.fs4};
  }

  @media (max-width: 480px) {
    font-size: ${({theme}) => theme.font.size.fs3};
  }
`