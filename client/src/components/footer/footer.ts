import styled, { keyframes } from "styled-components";
import { flash } from "react-animations";
import { FlexJustifyCenter } from "../../box/flex-box";

export const FooterBlock = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundFooter};
  padding: 50px 0;
`;
export const FooterLogo = styled.div`
  margin-right: 30px;
  animation: 8s ${keyframes`${flash}`} infinite;
`;
export const FooterLogoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  line-height: 0.75;
`;
export const FooterLogoSubTitle = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 8px;
  line-height: 0.75;
  margin-top: 17px;
  margin-left: 5px;
`;
export const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.colorFooter};
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.small};
  line-height: 18px;
  margin-right: 30px;
  text-align: center;
`;
export const FooterList = styled(FlexJustifyCenter)`
  margin-bottom: 10px;
`;
export const FooterContactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  line-height: 21px;
  color: ${({ theme }) => theme.colors.colorFooterContact};
  margin-right: 10px;
`;
export const FooterContactInfo = styled.a`
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 21px;
  text-decoration: none;
`;
