import styled, {keyframes} from "styled-components";
import {pulse} from 'react-animations';
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  display: flex;
`
export const ListItem = styled.li`
  margin-right: 35px;
`

export const PageLink = styled(Link)`
  font-size: ${({theme}) => theme.fontSize.medium};
  font-weight: 600;
  color: ${({theme}) => theme.colors.primary};
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  display: inline-block;

  :hover {
    color: ${({theme}) => theme.colors.secondary}; 
    animation: 3s ${keyframes`${pulse}`} infinite;
  }
`

