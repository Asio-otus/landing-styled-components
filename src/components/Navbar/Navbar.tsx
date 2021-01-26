import React from "react";
import {Container} from "../../components-shared/Container";
import {MobileIcon} from "../../components-shared/MobileIcon";
import {FaBars as Burger} from 'react-icons/fa'
import styled from "styled-components";
import {Link as LinkScroll} from "react-scroll/modules";
import {Link as LinkRouter} from "react-router-dom";

type NavbarPropsType = {
    sidebarToggle: () => void
}

export const Navbar = (props: NavbarPropsType) => {
    return (
        <NavbarMain>
            <Container>
                <NavbarLogo to={'/'}>Dolla</NavbarLogo>
                <MobileIcon onClick={props.sidebarToggle}>
                    <Burger/>
                </MobileIcon>
                <NavbarMenu>
                    <NavbarItem>
                        <NavbarLink to={'about'}>About</NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink to={'discover'}>Discover</NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink to={'services'}>Services</NavbarLink>
                    </NavbarItem>
                    <NavbarItem>
                        <NavbarLink to={'signup'}>Sign Up</NavbarLink>
                    </NavbarItem>
                </NavbarMenu>
                <NavbarButton>
                    <NavButtonLink to={'/signin'}>Sign In</NavButtonLink>
                </NavbarButton>
            </Container>
        </NavbarMain>
    )
}

// Navbar styles

const NavbarMain = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  
  margin-top: -80px;

  height: 80px;

  font-size: 1rem;

  background: #000;

  @media screen and (max-width: 960px) {
    transition: .8s all ease;
  }
`

const NavbarButton = styled.div`
  display: flex;

  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavbarItem = styled.li`
  height: 80px;
`

const NavbarLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

const NavbarLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavButtonLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all .2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`