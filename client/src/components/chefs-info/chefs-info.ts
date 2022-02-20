import styled from "styled-components";
import { FlexColumn } from "../../box/flex-box";

export const ChefsInfoWrapper = styled(FlexColumn)`
  width: calc(33.3% - 30px);
  text-align: center;

  :not(:last-child) {
    margin-right: 30px;
  }
`;
export const ChefsInfoPhoto = styled.div<{ photo: string }>`
  height: 300px;
  width: 100%;
  background-image: ${(props) => props.photo};
  background-size: cover;
`;
export const ChefsInfoName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  line-height: 1.2;
  margin-top: 25px;
`;
export const ChefsInfoPosition = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.2;
  margin-top: 6px;
`;
