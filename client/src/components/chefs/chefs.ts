import styled from "styled-components";
import { SectionContainer } from "../../box/absoluteBox";
import { FlexColumn } from "../../box/flexBox";

export const ChefSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const ChefsPersonsWrapper = styled(FlexColumn)`
  width: calc(33.3% - 30px);
  text-align: center;

  :not(:last-child) {
    margin-right: 30px;
  }
`;
export const ChefsPersonsPhoto = styled.div<{ photo: string }>`
  height: 300px;
  width: 100%;
  background-image: ${(props) => props.photo};
  background-size: cover;
`;
export const ChefPersonsName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  line-height: 1.2;
  margin-top: 25px;
`;
export const ChefPersonsPosition = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.2;
  margin-top: 6px;
`;
