import React from "react";
import styled from "styled-components";
import {cardInfoType} from "../../../BLL/ServiceSectionData";

type CardPropsType = {
    data: cardInfoType
}

export const Card: React.FC<CardPropsType> = ({data}) => {
    return (
        <CardL>
            <CardIconL src={data.icon} />
            <CardHeaderL>
                {data.header}
            </CardHeaderL>
            <ParagraphL>
                {data.paragraph}
            </ParagraphL>
        </CardL>
    )
}

export const CardL = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0 .2);
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all .2s ease-in-out;
    cursor: pointer;
  }
`

export const CardIconL = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const CardHeaderL = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ParagraphL = styled.p`
  font-size: 1rem;
  text-align: center;
`