import styled from "styled-components"
import { FlexSpaceBetween } from "../../box/flex-box"

export const MenuDishesSection = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundSection};
  padding-top: 60px;
`
export const MenuDishesContainer = styled(FlexSpaceBetween)`
  margin-top: 40px;
`
export const MenuDishesPhoto = styled.div<{photo: string}>`
  width: 33.3%;
  background-image: ${props => props.photo};
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;

  :not(:last-child){
    margin-right: 30px;
  }
`