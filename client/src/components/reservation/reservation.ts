import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

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
export const Form = styled.form`
  width: 100%;
`;
export const ReservationInput = styled.input`
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 210px;
  height: 40px;
  border: solid 2px ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.primary};
  padding-left: 25px;
  outline: none;
  margin-right: 15px;
`;
export const ReservationSelect = styled.select`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.transparent};
  width: 210px;
  height: 45px;
  border: solid 2px ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding-left: 25px;
  outline: none;

  :not(:last-child) {
    margin-right: 15px;
  }
`;
export const ReservationOption = styled.option`
  color: ${({ theme }) => theme.colors.colorOption};
`;
export const ReservationButton = styled.button`
  width: 216px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  margin-top: 42px;
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  cursor: pointer;
  display: block;
  margin: 40px auto 0 auto;

  :hover {
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`;
