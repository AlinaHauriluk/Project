import styled from "styled-components";
import { SectionContainer, BlockDescription } from "../../box/absolute-box";

export const SectionSignatureDish = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.backgroundSectionTwo};
`;
export const SignatureDishDescription = styled(BlockDescription)`
  margin-right: -80px;
  margin-bottom: -60px;
  width: 50%;
`;
export const SignatureDishImage = styled.div`
  background-image: url(${require("../../assets/homeSignatureDishImage.jpg")});
  width: 550px;
  height: 550px;
  margin-left: auto;
  background-position: center;
`;

export const SignatureDishName = styled.h3`
  letter-spacing: 1.2px;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
`;

export const SignatureDishPrice = styled.span`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  font-weight: 600;
`;

export const SignatureDishText = styled.p`
  letter-spacing: 1.6px;
  margin-bottom: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.colorText};
`;
