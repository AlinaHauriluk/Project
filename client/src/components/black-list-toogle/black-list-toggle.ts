import styled from "styled-components";
import { FlexSpaceBetween } from "../../box/flex-box";
import { ModaleTitle } from "../modale/modale";

export const ToggleContainer = styled(FlexSpaceBetween)`
  margin: 30px 0;
`
export const BlackListTitle = styled(ModaleTitle)`
  margin: 0;
`
export const BlackListText = styled.h3`
  font-size: ${({theme}) => theme.fontSize.mediumLarge};
  font-weight: 600;
  margin-bottom: 40px;
`