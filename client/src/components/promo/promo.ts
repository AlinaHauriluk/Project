import styled from "styled-components";
import { SubTitle, Title } from "../../text/text";

export const PromoSection = styled.div`
  height: 460px;
  background-image: url(${require("../../assets/homePromoImage.jpg")});
`;

export const TitlePromo = styled(Title)`
  margin-bottom: 30px;
  letter-spacing: 2.8px;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  width: 80%;
  text-align: center;
`;

export const SubTitlePromo = styled(SubTitle)`
  margin-top: 80px;
  font-weight: bold;
  line-height: 0.75;
  margin-bottom: 45px;
  font-size: ${({ theme }) => theme.fontSize.title};
`;
