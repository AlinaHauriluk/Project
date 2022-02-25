import styled from "styled-components";
import { FlexSpaceBetween } from "../../box/flex-box";
import { SectionContainer } from "../../box/absolute-box";

export const NewDishesSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const NewDishesTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  line-height: 0.75;
  font-weight: 400;
  margin-bottom: 65px;
`;
export const NewDishesContainer = styled(FlexSpaceBetween)`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;
export const NewDishesWrapper = styled.div`
  width: 50%;
`;
export const NewDishesPhoto = styled.div<{ photo: string }>`
  width: 100%;
  height: 200px;
  background-image: ${(props) => props.photo};
  background-size: cover;
`;
export const NewDishesName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  letter-spacing: 1.2px;
  margin-top: -40px;
  margin-bottom: 40px;
`;
export const NewDishesDescription = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.smallMedium};
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.colorText};
  letter-spacing: 1.6px;
  margin-bottom: 40px;
`;

export const NewDishesPrice = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.smallMedium};
  display: inline-block;
  margin-left: 20px;
`;
