import styled from "styled-components";
import {Link} from 'react-scroll';

type ButtonPropsType = {
    primary?: boolean
    big?: boolean
    dark?: boolean
    fontBig?: boolean
}

export const Button = styled(Link)<ButtonPropsType>`
  border-radius: 50px;
  background: ${props => props.primary ? '#01bf71' : '#010606'};
  white-space: nowrap;
  padding: ${({big}) => big ? '14px 48px' : '12px 30px'}; // Диструктуризация пропс
  color: ${props => props.dark ? '#010606' : '#fff'};
  font-size: ${props => props.fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  
  &:hover {
    transition: all .2s ease-in-out;
    background: ${props => props.primary ? '#fff' : '#01bf71'};
  }
`