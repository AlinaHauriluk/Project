import styled, {keyframes} from "styled-components";
import { Flex } from "../../box/flexBox";
import {flipInX, swing} from 'react-animations'

export const HeaderSection = styled.header`
    background-color: ${({theme}) => theme.colors.background};
    width: 100%;
	height: 70px;
    position: fixed;
    padding-top: 20px;
	z-index: 4;
`
export const HeaderFlex = styled(Flex)`
    justify-content: space-between;
`
export const LogoTitle = styled.div`
    font-size: ${({theme}) => theme.fontSize.large};
    line-height: 0.75;
    color: ${({theme}) => theme.colors.primary};
`
export const LogoSubtitle = styled.div`
    font-size: ${({theme}) => theme.fontSize.small};
    text-transform: uppercase;
    color: ${({theme}) => theme.colors.primary};
    letter-spacing: 8px;
    line-height: 0.75;
    margin-top: 12px;
    padding-left: 5px;
`
export const Button = styled.button`
    color: ${({theme}) => theme.colors.primary};
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid ${({theme}) => theme.colors.secondary};
    background-color: ${({theme}) => theme.colors.transparent};
    line-height: 0.65;
    font-size: ${({theme}) => theme.fontSize.medium};
    display: inline-block;

    :hover {
        background-color: ${({theme}) => theme.colors.secondary}; 
        animation: 5s ${keyframes`${swing}`} infinite;
    }
`
export const ButtonSecondary = styled(Button)`
    margin-left: 30px;
`

export const FlipInX = styled.div`animation: 8s ${keyframes`${flipInX}`} infinite`;

