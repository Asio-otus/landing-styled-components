import React from "react";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Navbar} from "../components/Navbar/Navbar";
import {useState} from "react";
import {HeroSection} from "../components/HeroSection/HeroSection";

export const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const sidebarToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} sidebarToggle={sidebarToggle}/>
            <Navbar sidebarToggle={sidebarToggle}/>
            <HeroSection/>
        </>
    )
}