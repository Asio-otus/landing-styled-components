import styled from "styled-components";
import {Link} from 'react-scroll';
import {ThemeType} from "../global-styles/theme";

export type buttonVarType = 'primary' | 'secondary'
export type buttonStyleType = 'light' | 'dark'
export type buttonSizeType = 'big' | 'medium'

export type ButtonPropsType = {
    theme: ThemeType
    $type: buttonVarType
    $style: buttonStyleType
    $size: buttonSizeType
}

export const Button = styled(Link)<ButtonPropsType>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => {

    switch (props.$size) {
      case 'big':
        return '14px 48px'
      case 'medium':
        return '12px 30px'
      default:
        return '12px 30px'
    }
  }};

  white-space: nowrap;
  font-size: ${props => props.$type === 'primary'
          ? ({theme}) => theme.font.size.fs1
          : ({theme}) => theme.font.size.default};

  font-size: ${props => {
    switch (props.$size) {
      case 'big':
        return ({theme}) => theme.font.size.fs1
      case 'medium':
        return ({theme}) => theme.font.size.default
    }
  }};

  color: ${props => {
    switch (props.$style) {
      case 'light':
        return ({theme}) => theme.color.black
      case 'dark':
        return ({theme}) => theme.color.white
    }
  }};

  background: ${props => {
    switch (props.$style) {
      case 'light':
        return ({theme}) => theme.color.primary
      case 'dark':
        return ({theme}) => theme.color.black
    }
  }};

  border: none;
  border-radius: 50px;
  outline: none;

  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    
    background: ${props => {
      switch (props.$style) {
        case 'light':
          return ({theme}) => theme.color.white
        case 'dark':
          return ({theme}) => theme.color.primary
      }
    }};

    transition: all .2s ease-in-out;
  }
`