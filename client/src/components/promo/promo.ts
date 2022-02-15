import styled from "styled-components";
import { SubTitle, Title } from "../../text/text";

export const PromoSection = styled.div<{
  ht: string;
  bphone: string;
  position: string;
}>`
  background: url(${(props) => props.bphone});
  background-position: ${(props) => props.position};
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

export const SubTitlePromo = styled(SubTitle)<{ mg: string }>`
  font-weight: bold;
  line-height: 0.75;
  margin-bottom: 45px;
  font-size: ${({ theme }) => theme.fontSize.title};
  margin-top: ${(props) => props.mg};
`;
