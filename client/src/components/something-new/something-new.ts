import styled from "styled-components";

import { FlexCenter } from "../../box/flex-box";

export const SomethingNewFlex = styled(FlexCenter)`
  margin-top: 20px;
`;
export const SomethingNewText = styled.p`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.8;
  text-align: justify;

  :first-child {
    margin-right: 40px;
  }
`;
