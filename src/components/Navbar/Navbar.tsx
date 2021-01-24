import React from "react";
import {NavbarWrapper} from "./NavbarElements/NavbarWrapper";
import {NavbarContainer} from "./NavbarElements/NavbarContainer";
import {NavbarLogo} from "./NavbarElements/NavbarLogo";
import {MobileIcon} from "./NavbarElements/MobileIcon";
import {NavbarMenu} from "./NavbarElements/NavbarMenu";
import {NavbarItem} from "./NavbarElements/NavbarItem";
import {NavbarLinks} from "./NavbarElements/NavbarLinks";
import {FaBars} from 'react-icons/fa'

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavbarLogo to={'/'}>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavbarMenu>
                        <NavbarItem>
                            <NavbarLinks to={'about'}>About</NavbarLinks>
                        </NavbarItem>
                    </NavbarMenu>
                </NavbarLogo>
            </NavbarContainer>
        </NavbarWrapper>
    )
}