import styled from "styled-components";
import { CartListTableItem } from "../cart-list/cart-list";

export const CartHeadTitle = styled(CartListTableItem)`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  font-family: ${({ theme }) => theme.fontFamily.cursiv};
  color: ${({ theme }) => theme.colors.secondary};
`;