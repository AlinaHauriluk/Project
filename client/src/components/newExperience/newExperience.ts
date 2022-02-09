import styled from "styled-components";
import { SectionContainer, BlockDescription } from "../../box/absoluteBox";

export const SectionNewExperience = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.backgroundSection};
`;

export const NewExperienceImage = styled.div`
  background-image: url(${require("../../assets/homeNewExperienceImage1.jpg")});
  height: 500px;
  width: 350px;
  background-position: 30% 20%;
  margin-right: 30px;
`;

export const NewExperienceImageTwo = styled(NewExperienceImage)`
  background-image: url(${require("../../assets/homeNewExperienceImage2.jpg")});
  background-position: 90% 138%;
`;

export const NewExperienceDescription = styled(BlockDescription)`
  margin-left: -80px;
  margin-bottom: -80px;
`;

export const NewExperienceText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  font-weight: 600;
  letter-spacing: 0.8px;
  color: ${({ theme }) => theme.colors.colorText};
`;

export const NewExperienceIcon = styled.div`
  float: left;
  shape-outside: circle();
  clip-path: circle();
  width: 80px;
  height: 80px;
  background-image: url(${require("../../assets/homeNewExperienceIcon.png")});
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 10px;
`;
