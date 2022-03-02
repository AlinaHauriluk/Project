import styled from "styled-components";
import { SectionContainer } from "../../box/absolute-box";
import 'react-tabs/style/react-tabs.css';
import { Tabs, Tab } from "react-tabs";

export const ProfileSection = styled(SectionContainer)`
  background-color: ${({theme}) => theme.colors.backgroundSectionTwo};
`
export const ProfileTabs = styled(Tabs)`
  background-color: ${({theme}) => theme.colors.primary};
`
export const ProfileTab = styled(Tab)`
  color: ${({theme}) => theme.colors.secondary};
  display: inline-block;
  padding: 20px 0;
  font-weight: bold;
  font-size: ${({theme}) => theme.fontSize.mediumMedium};
  margin-right: 80px;
  cursor: pointer;
  font-family: ${({theme}) => theme.fontFamily.cursiv};
  letter-spacing: 2.2px;

  :first-child {
    margin-left: 60px;
  }
`