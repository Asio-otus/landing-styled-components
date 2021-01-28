import React from "react";
import styled from "styled-components";
import {InfoSectionDataType} from "./Data";
import {Button} from "../../components-shared/Button";

type InfoSectionPropsType = {
    data: InfoSectionDataType
}

export const InfoSection: React.FC<InfoSectionPropsType> = (
    {data}
) => {
    debugger
    return (
        <>
            <InfoContainer lightBg={data.lightBg} id={data.id}>
                <InfoWrapper>
                    <InfoRow imgStart={data.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{data.topLine}</TopLine>
                                <Heading lightText={data.lightText}>{data.headline}</Heading>
                                <Subtitle darkText={data.darkText}>{data.description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'>
                                        {data.buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={data.img} alt={data.alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

const InfoContainer = styled.div<{lightBg: boolean}>`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`

const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

const InfoRow = styled.div<{imgStart: boolean}>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col2 col1' 'col2 col2'`)};
  }
`

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

const TopLine = styled.div`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

const Heading = styled.h1<{lightText: boolean}>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`

const Subtitle = styled.p<{darkText: boolean}>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`