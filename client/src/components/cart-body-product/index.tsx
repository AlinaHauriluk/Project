import type { FC } from "react";
import { Flex } from "../../box/flex-box";
import {
  CartBodyProductTitle,
  CartBodyProductPhoto,
} from "./cart-body-product";
import {
  CartListTableItem,
  CartListProductPrice,
} from "../cart-list/cart-list";

interface CartBodyProps {
  product: {
    id: number;
    title: string;
    price: number;
    current: string;
    photo: string;
    count: number;
  };
}

const CartBodyProduct: FC<CartBodyProps> = ({ product }) => {
  return (
    <>
      <CartListTableItem>
        <Flex>
          <CartBodyProductPhoto photo={product.photo} />
          <CartBodyProductTitle>{product.title}</CartBodyProductTitle>
        </Flex>
      </CartListTableItem>
      <CartListTableItem>
        <CartListProductPrice>
          {product.price} {product.current}
        </CartListProductPrice>
      </CartListTableItem>
    </>
  );
};
export default CartBodyProduct;
