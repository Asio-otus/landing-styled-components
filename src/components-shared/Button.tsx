import styled from "styled-components";
import {Link} from 'react-scroll';
import {ThemeType} from "../global-styles/theme";

type ButtonPropsType = {
    theme: ThemeType
    variant?: 'primary'
}

export const Button = styled(Link)<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => props.variant ? '14px 48px' : '12px 30px'};
  
  white-space: nowrap;
  font-size: ${props => props.variant === 'primary'
          ? ({theme}) => theme.font.size.fs1
          : ({theme}) => theme.font.size.default};
  
  color: ${props => props.variant === 'primary'
          ? ({theme}) => theme.color.black
          : ({theme}) => theme.color.white};
  background: ${props => props.variant === 'primary'
          ? ({theme}) => theme.color.primary
          : ({theme}) => theme.color.black};

  border: none;
  border-radius: 50px;
  outline: none; 
  
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  &:hover {
    background: ${props => props.variant === 'primary'
            ? ({theme}) => theme.color.white 
            : ({theme}) => theme.color.primary};

    transition: all .2s ease-in-out;
  }
`