import React from "react";
import {Container} from "../../components-shared/Container/Container";
import {MobileIcon} from "../../components-shared/MobileIcon/MobileIcon";
import {FaBars as Burger} from 'react-icons/fa'
import {NavbarButton, NavbarItem, NavbarLink, NavbarLogo, NavbarMenu, NavbarMain, NavButtonLink } from "./NavbarSC";

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