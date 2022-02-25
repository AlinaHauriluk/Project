import styled from "styled-components";
import { SectionContainer } from "../../box/absolute-box";
import { FlexJustifyCenter } from "../../box/flex-box";

export const ContactInfoSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const ContactInfoWrapperLeft = styled.div`
  width: 50%;
`;
export const ContactInfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: left;
  text-align: justify;
  color: ${({ theme }) => theme.colors.colorText};
  letter-spacing: 1.8px;
  margin: 40px 0;
`;
export const ContactInfoSubtitleLogo = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
  letter-spacing: 8px;
  line-height: 0.75;
  margin-left: 5px;
`;
export const ContactInfoWrapperRight = styled.div`
  width: 35%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 20px;
`;

export const ContactInfoContainer = styled(FlexJustifyCenter)`
  margin-bottom: 10px;
`
export const ContactInfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 21px;
  color: ${({ theme }) => theme.colors.colorFooterContact};
  margin-right: 10px;
`
export const ContactInfoDescription = styled.a`
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 21px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.colorText};
`

