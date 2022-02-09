import styled from "styled-components";
import { SubTitle, Title } from "../../text/text";

export const PromoSection = styled.div<{ ht: string; bphone: string }>`
  background: url(${(props) => props.bphone});
  background-position: "top";
  height: ${(props) => props.ht};
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
  font-weight: bold;
  line-height: 0.75;
  margin-bottom: 45px;
  font-size: ${({ theme }) => theme.fontSize.title};
`;
