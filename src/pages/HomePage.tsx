import React from "react";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Navbar} from "../components/Navbar/Navbar";
import {useState} from "react";
import {HeroSection} from "../components/HeroSection/HeroSection";
import {InfoSection} from "../components/InfoSection/InfoSection";
import {ServicesSection} from "../components/ServicesSection/ServicesSection";
import {infoSectionDataOne, infoSectionDataThree, infoSectionDataTwo} from "../BLL/InfoSectionData";

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
            <InfoSection data={infoSectionDataOne}/>
            <InfoSection data={infoSectionDataTwo}/>
            <InfoSection data={infoSectionDataThree}/>
            <ServicesSection/>
        </>
    )
}