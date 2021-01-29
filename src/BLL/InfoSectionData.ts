import {buttonSizeType, buttonStyleType, buttonVarType} from "../components-shared/Button";

export type InfoSectionDataType = {
    id: string,
    lightBg: boolean,
    lightText: boolean,
    lightTextDesc: boolean,
    topLine: string,
    headline: string,
    description: string,
    buttonLabel: string,
    imgStart: boolean,
    img: string,
    alt: string,
    buttonType: buttonVarType,
    buttonStyle: buttonStyleType,
    buttonSize: buttonSizeType,
    darkText: boolean
}

export const infoSectionDataOne: InfoSectionDataType = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../images/svg-1.svg').default,
    alt: 'Car',
    buttonType: 'primary',
    buttonStyle: 'light',
    buttonSize: 'medium',
    darkText: false
}

export const infoSectionDataTwo: InfoSectionDataType = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Learn more',
    imgStart: true,
    img: require('../images/svg-2.svg').default,
    alt: 'Piggybank',
    buttonType: 'secondary',
    buttonStyle: 'dark',
    buttonSize: 'medium',
    darkText: true
}

export const infoSectionDataThree: InfoSectionDataType = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: require('../images/svg-3.svg').default,
    alt: 'Car',
    buttonType: 'primary',
    buttonStyle: 'light',
    buttonSize: 'medium',
    darkText: false
}