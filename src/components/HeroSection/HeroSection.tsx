import React, {useState} from "react";
import styled from "styled-components";
import {MdArrowForward, MdKeyboardArrowRight} from "react-icons/all";
import {Button} from "../../components-shared/Button";
import {ThemeType} from "../../global-styles/theme";
import {H1} from "../../components-shared/Typography/H1";
// @ts-ignore
import Video from '../../video/video.mp4'

export const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <ContainerLS>
            <BackgroundLS>
                <VideoLS autoPlay loop muted src={Video}/>
            </BackgroundLS>
            <ContentLS>
                <H1>
                    Virtual Banking Made Easy
                </H1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit towards your next payment.
                </HeroP>
                <WrapperLS>
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            variant='primary'>
                        Get started {hover ? <ArrowForward/> : < ArrowRight/>}
                    </Button>
                </WrapperLS>
            </ContentLS>
        </ContainerLS>
    )
}

const ContainerLS = styled.div<{ theme: ThemeType }>`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 30px;

  height: 800px;

  background: ${({theme}) => theme.color.black};

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;

    background: linear-gradient(180deg, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, .6) 100%),
    linear-gradient(180deg, rgba(0, 0, 0, .2) 0%, transparent 100%)
  }
`

const BackgroundLS = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
`

const VideoLS = styled.video`
  width: 100%;
  height: 100%;

  background: #232a34;

  object-fit: cover;
`

const ContentLS = styled.div`
  position: absolute;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8px 24px;
  max-width: 1200px;
`

const WrapperLS = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HeroP = styled.p<{ theme: ThemeType }>`
  margin-top: 24px;
  max-width: 600px;

  font-size: ${({theme}) => theme.font.size.fs2};
  text-align: center;

  color: ${({theme}) => theme.color.white};

  @media (max-width: 480px) {
    font-size: ${({theme}) => theme.font.size.default};
  }
`

const ArrowForward = styled(MdArrowForward)<{ theme: ThemeType }>`
  margin-left: 8px;
  font-size: ${({theme}) => theme.font.size.fs1};
`

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: ${({theme}) => theme.font.size.fs1};
`