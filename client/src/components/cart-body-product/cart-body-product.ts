import styled from "styled-components";

export const CartBodyProductPhoto = styled.div<{ photo: string }>`
  width: 340px;
  height: 200px;
  background-image: ${(props) => props.photo};
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;
export const CartBodyProductTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  margin-left: 20px;
  width: 40%;
`;