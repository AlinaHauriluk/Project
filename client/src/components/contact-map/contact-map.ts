import styled from "styled-components";
import { Map } from "react-yandex-maps";

export const ContactMapSection = styled.div`
  padding-bottom: 60px;
`
export const ContactMapInfo = styled(Map)`
  width: 100%;
  height: 350px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`
