import styled from "styled-components";

export const ReservationSection = styled.div`
  height: 400px;
  background-image: url(${require("../../assets/reservationImage.jpg")});
  background-color: ${({ theme }) => theme.colors.primary};
  background-position: 100% 20%;
`;

export const ReservationTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  line-height: 0.75;
  margin-bottom: 60px;
`;
