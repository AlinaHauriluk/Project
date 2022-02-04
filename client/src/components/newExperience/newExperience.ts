import styled from "styled-components";
import { SectionContainer, BlockDescription } from "../../box/absoluteBox";
import { SubTitle } from "../../text/text";

export const SectionNewExperience = styled(SectionContainer)`
    background-color: ${({theme}) => theme.colors.backgroundSection};
`

export const NewExperienceImage = styled.div`
    background-image: url(${require('../../assets/homeNewExperienceImage1.jpg')});
    height: 500px;
    width: 350px;
    background-position: 30% 20%;
    margin-right: 30px;
`

export const NewExperienceImageTwo = styled(NewExperienceImage)`
    background-image: url(${require('../../assets/homeNewExperienceImage2.jpg')});
    background-position: 90% 138%;
`

export const NewExperienceDescription = styled(BlockDescription)`
    margin-left: -80px;
    margin-bottom: -80px;
`

export const NewExperienceSubTitle = styled(SubTitle)`
    font-size: ${({theme}) => theme.fontSize.mediumLarge};
    margin-bottom: 10px;
    letter-spacing: 1.8px;
`

export const NewExperienceTitle = styled.h3`
    font-size: ${({theme}) => theme.fontSize.mediumLarge};
    line-height: 0.75;
    margin-bottom: 20px;
    font-weight: 400;
`
export const NewExperienceText = styled.p`
    font-size: ${({theme}) => theme.fontSize.mediumSmall};
    font-weight: 600;
    letter-spacing: 0.8px;
    color: ${({theme}) => theme.colors.colorText}
`


