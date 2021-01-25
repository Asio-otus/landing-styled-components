import React from "react";
import {CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./SidebarSC";

type SidebarPropsType = {
    isOpen: boolean
    sidebarToggle: () => void
}

export const Sidebar = (props: SidebarPropsType) => {
    return (
        <SidebarContainer isOpen={props.isOpen}>
            <Icon onClick={props.sidebarToggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
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
            </SidebarWrapper>
        </SidebarContainer>
    )
}