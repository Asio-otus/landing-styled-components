import React, {useState} from "react";
// @ts-ignore
import Video from '../../video/video.mp4'

import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg
} from "./HeroSectionSC";
import {Button} from "../../components-shared/Button/Button";

export const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Virtual Banking Made Easy
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to={'signup'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary={true}
                            dark={true}>
                        Get started {hover ? <ArrowForward/> : < ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}