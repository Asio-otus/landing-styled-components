import React from "react";
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkScroll} from "react-scroll/modules";
import {Link as LinkRouter} from "react-router-dom";
import {ThemeType} from "../../global-styles/theme";

type SidebarPropsType = {
    isOpen: boolean
    sidebarToggle: () => void
}

export const Sidebar = (props: SidebarPropsType) => {
    return (
        <SidebarContainer isOpen={props.isOpen}>
            <Icon onClick={props.sidebarToggle}>
                <CloseIcon/>
            </Icon>
            <WrapperS>
                <SidebarMenu>
                    <SidebarLink to={'about'} onClick={props.sidebarToggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to={'discover'} onClick={props.sidebarToggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to={'services'} onClick={props.sidebarToggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to={'signup'} onClick={props.sidebarToggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={'/signin'}>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </WrapperS>
        </SidebarContainer>
    )
}

// Local Styled-Components
const SidebarContainer = styled.aside<{ isOpen: boolean, theme: ThemeType }>`
  position: fixed;
  top: ${({isOpen}) => isOpen ? '0' : '-100%'};
  left: 0;
  z-index: 999;

  display: grid;
  align-items: center;

  height: 100%;
  width: 100%;

  background: ${({theme}) => theme.color.black};

  transition: .3s ease-in-out;
  opacity: ${({isOpen}) => isOpen ? '100%' : '0%'}
`

const Icon = styled.div<{ theme: ThemeType }>`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  font-size: ${({theme}) => theme.font.size.fs3};

  background: transparent;

  outline: none;
  cursor: pointer;
`

const CloseIcon = styled(FaTimes)<{ theme: ThemeType }>`
  color: ${({theme}) => theme.color.white};
`

const WrapperS = styled.div<{ theme: ThemeType }>`
  color: ${({theme}) => theme.color.white};
`

const SidebarLink = styled(LinkScroll)<{ theme: ThemeType }>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({theme}) => theme.font.size.fs2};
  text-decoration: none;
  list-style: none;

  color: ${({theme}) => theme.color.white};

  transition: .2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.color.primary};

    transition: .2s ease-in-out;
  }
`

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

const SidebarRoute = styled(LinkRouter)<{ theme: ThemeType }>`
  padding: 16px 64px;

  white-space: nowrap;
  text-decoration: none;

  background: ${({theme}) => theme.color.primary};
  color: ${({theme}) => theme.color.black};

  outline: none;
  border: none;
  border-radius: 50px;

  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    background: ${({theme}) => theme.color.white};
    color: ${({theme}) => theme.color.black};

    transition: all .2s ease-in-out;
  }
`

const SidebarMenu = styled.ul<{ theme: ThemeType }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);

  text-align: center;

  @media (max-width: ${({theme}) => theme.mediaQueries.smallMax}) {
    grid-template-rows: repeat(6, 60px);
  }
`