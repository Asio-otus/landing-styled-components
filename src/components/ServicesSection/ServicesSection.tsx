import styled from "styled-components";
import {Card} from "./Card/Card";
import {cardDataOne, cardDataThree, cardDataTwo} from "../../BLL/ServiceSectionData";

export const ServicesSection = () => {
    return (
        <ContainerL id="services">
            <HeaderL>
                Our Services
            </HeaderL>
            <CardWrapperL>
                <Card data={cardDataOne}/>
                <Card data={cardDataTwo}/>
                <Card data={cardDataThree}/>
            </CardWrapperL>
        </ContainerL>
    )
}

export const ContainerL = styled.div`
  display: flex;
  flex-direction: column;

  height: 800px;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
`
export const HeaderL = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`

export const CardWrapperL = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`