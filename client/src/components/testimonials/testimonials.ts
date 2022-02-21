import styled from "styled-components";
import { BlockSubTitle } from "../../text/text";
import { FlexCenter } from "../../box/flex-box";

export const TestimonialsSection = styled.div`
  height: 420px;
  background-image: url(${require("../../assets/aboutTestimonialsImage.jpg")});
  background-position: 50% 100%;
  padding: 30px 0;
`;
export const TestimonialsSubTitle = styled(BlockSubTitle)`
  margin: 30px 0;
  letter-spacing: 1.8px;
  text-align: center;
`;
export const TestimonialsTitle = styled(FlexCenter)`
  width: 18%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 0 auto 50px auto;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.large};
`;
export const TestimonialsQuote = styled.div`
  margin: 0 auto;
  width: 30px;
  height: 30px;
  background-image: url(${require("../../assets/aboutQuoteImage.png")});
  background-repeat: no-repeat;
`;
export const TestimonialsText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.8;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 30px;
`;
export const TestimonialsClientName = styled.h4`
  font-family: "Sedgwick Ave", cursive;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;
export const TestimonialsClient = styled.span`
  color: ${({ theme }) => theme.colors.colorText};
  font-size: ${({ theme }) => theme.fontSize.small};
  display: inline-block;
  margin-left: 10px;
`;
