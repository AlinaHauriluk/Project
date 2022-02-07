import styled, {keyframes} from "styled-components";
import {pulse} from 'react-animations';
import { SectionContainer } from '../../box/absoluteBox'
import { FlexCenter, FlexSpaceBetween } from '../../box/flexBox';

export const MenuContainer = styled(SectionContainer)`
  background-color: ${({theme}) => theme.colors.backgroundSection};
  border-bottom: 2px solid ${({theme}) => theme.colors.secondary};
`

export const MenuWrapper = styled(FlexCenter)`
  height: 200px;
  margin-bottom: 30px;
  background-color: ${({theme}) => theme.colors.backgroundMenu};
`

export const MenuWrapperTitle = styled.div`
  width: 96%;
  padding: 20px 0;
  border: 2px solid ${({theme}) => theme.colors.secondary};
  text-align: center;
`

export const MenuTitle = styled.h3`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fontSize.subtitle};
  letter-spacing: 1.8px;
`

export const MenuPart = styled.div`
  width: calc(33% - 30px);
  padding: 20px;
  border: 2px solid ${({theme}) => theme.colors.secondary};

  :not(:last-child){
    margin-right: 30px;
  }
`
export const MenuPartTitle = styled(FlexCenter)`
  display: inline-block;
  padding: 10px;
  border: 2px solid ${({theme}) => theme.colors.secondary};
  width: 40%;
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize.mediumLarge};
  letter-spacing: 1.8px;
  font-weight: 600;
  margin-bottom: 20px;
  animation: 5s ${keyframes`${pulse}`} infinite;
`

export const MenuList = styled.div`
  margin-bottom: 20px;
`

export const MenuListWrapper = styled(FlexSpaceBetween)`
  margin-bottom: 10px;
`

export const DishName = styled.h4`
  font-size: ${({theme}) => theme.fontSize.medium};
  letter-spacing: 1.6px;
`

export const DishPrice = styled.span`
  font-weight: 600;
  font-size: ${({theme}) => theme.fontSize.mediumLarge};
  color: ${({theme}) => theme.colors.colorText};
`

export const DishDescription = styled.p`
  font-weight: 600;
  font-size: ${({theme}) => theme.fontSize.small};
  letter-spacing: 1.6px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.colorText};
  margin-bottom: 20px;
`
export const DishOrder = styled.button`
  display: inline-block;
  padding-bottom: 5px;
  font-size: ${({theme}) => theme.fontSize.medium};
  color: ${({theme}) => theme.colors.secondary};
  letter-spacing: 1.6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background-color: ${({theme}) => theme.colors.transparent};
  text-transform: capitalize;
  border-bottom: 1px solid ${({theme}) => theme.colors.transparent};

  :hover {
    border-bottom: 1px solid ${({theme}) => theme.colors.secondary};
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`


