import styled from "styled-components";
import { SectionContainer, BlockDescription, Star } from "../../box/absoluteBox";

export const SectionSignatureDish = styled(SectionContainer)`
  background-color: ${({theme}) => theme.colors.backgroundSectionTwo};
`
export const SignatureDishDescription = styled(BlockDescription)`
  margin-right: -80px;
  margin-bottom: -60px;
  width: 50%;
` 
export const SignatureDishImage = styled.div`
  background-image: url(${require('../../assets/homeSignatureDishImage.jpg')});
  width: 550px;
  height: 550px;
  margin-left: auto;
  background-position: center;
`

export const SignatureDishName = styled.h3`
  letter-spacing: 1.2px;
  font-size: ${({theme}) => theme.fontSize.mediumMedium};
`

export const SignatureDishPrice = styled.span`
  font-size: ${({theme}) => theme.fontSize.mediumLarge};
  font-weight: 600;
`

export const SignatureDishText = styled.p`
  letter-spacing: 1.6px;
  margin-bottom: 40px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.colorText};
`
export const SignatureDishOrder = styled.button`
  display: inline-block;
  padding: 10px 20px;
  letter-spacing: 1.6px;
  font-weight: 400;
  cursor: pointer;
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.mediumMedium};
  border: 2px solid ${({theme}) => theme.colors.secondary};

  :hover {
    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.secondary};
  }
`
export const SignatureDishStar = styled(Star)`
  display: inline-block;
  margin-bottom: 10px;
  background-color: ${({theme}) => theme.fontSize.medium};

  ::before{
    content: '\u2605';
    font-size: ${({theme}) => theme.fontSize.mediumMedium};
  }
`





