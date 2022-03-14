import styled from "styled-components";
import { ButtonOrder } from "../../box/absolute-box";

export const ModaleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`
export const ModaleContext = styled.div`
  width: 40%;
  height: 400px;
  padding: 20px;
  position: fixed;
  top: 55%;
  left: 50%;
  z-index: 2;
  transform:translate(-50%, -50%);
  background-color: ${({theme}) => theme.colors.backgroundSectionTwo};
  border-radius: 12px;
`
export const ModaleContainer = styled.div`
  width: 50%;
  border-right: 2px solid ${({theme}) => theme.colors.secondary};
`
export const ModaleTitle = styled.h3`
  font-family: ${({theme}) => theme.fontFamily.cursiv};
  margin-top: 15px;
  font-size: ${({theme}) => theme.fontSize.mediumLarge};
  color: ${({theme}) => theme.colors.secondary};
`
export const ModaleText = styled.span`
  font-size: ${({theme}) => theme.fontSize.mediumMedium};
  font-weight: 600;
`
export const ModaleTitleMessage = styled.h4`
  font-size: ${({theme}) => theme.fontSize.large};
  font-weight: 600;
  font-family: ${({theme}) => theme.fontFamily.cursiv};
  margin: 20px auto;
`
export const ModaleContainerMessage = styled.div`
  margin: 0 auto;
  position: relative;
`
export const ModaleButton = styled(ButtonOrder)`
  width: 200px;
  margin-right: 30px;
  margin-bottom: 40px;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.primary};
`
