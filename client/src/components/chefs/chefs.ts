import styled from "styled-components";
import { SectionContainer } from "../../box/absoluteBox";
import { FlexColumn } from "../../box/flexBox";

export const ChefSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
