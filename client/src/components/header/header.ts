import styled, {keyframes} from "styled-components";
import { Wrapper } from "../../box/flexBox";
import {flipInX, swing} from 'react-animations'

export const HeaderSection = styled.header`
    background-color: rgba(0,0,0,0.65);
    width: 100%;
	height: 70px;
    position: fixed;
    padding-top: 20px;
	z-index: 4;
`
export const HeaderWrapper = styled(Wrapper)`
    justify-content: space-between;
`

export const LogoTitle = styled.div`
    font-size: 30px;
    line-height: 0.75;
    color: #FFFFFF;
`
export const LogoSubtitle = styled.div`
    font-size: 12px;
    text-transform: uppercase;
    color: #FFFFFF;
    letter-spacing: 0.680em;
    line-height: 0.75;
    margin-top: 12px;
    padding-left: 5px;
`

export const Button = styled.button`
    color: #FFFFFF;
    padding: 10px 15px;
    border-radius: 5px;
    border: 2px solid #b49383;
    background-color: transparent;
    line-height: 0.65;
    font-size: 16px;
    text-decoration: none;
    display: inline-block;

    :hover {
        background-color: #b49383; 
        animation: 5s ${keyframes`${swing}`} infinite;
    }
`
export const ButtonSecondary = styled(Button)`
    margin-left: 30px;
`

export const FlipInX = styled.div`animation: 8s ${keyframes`${flipInX}`} infinite`;

