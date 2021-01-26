import styled from "styled-components";
import {Link} from 'react-scroll';
import {ThemeType} from "../global-styles/theme";

type ButtonPropsType = {
    theme: ThemeType
    primary?: boolean
    big?: boolean
    dark?: boolean
}

export const Button = styled(Link)<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({big}) => big ? '14px 48px' : '12px 30px'};

  white-space: nowrap;
  font-size: ${({big}) => big
          ? ({theme}) => theme.font.size.fs1
          : ({theme}) => theme.font.size.default};
  
  color: ${props => props.dark
          ? ({theme}) => theme.color.black
          : ({theme}) => theme.color.white};
  background: ${({primary}) => primary
          ? ({theme}) => theme.color.primary
          : ({theme}) => theme.color.black};

  border: none;
  border-radius: 50px;
  outline: none;
  
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  &:hover {
    background: ${({primary}) => primary 
            ? ({theme}) => theme.color.white 
            : ({theme}) => theme.color.primary};

    transition: all .2s ease-in-out;
  }
`