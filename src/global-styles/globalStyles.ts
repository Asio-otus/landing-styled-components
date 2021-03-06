import {createGlobalStyle} from "styled-components";
import {ThemeType} from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType}>`
  @import url('${props => props.theme.font.source}');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${props => props.theme.font.family.default};
    font-size: ${props => props.theme.font.size.default};
  }
`
