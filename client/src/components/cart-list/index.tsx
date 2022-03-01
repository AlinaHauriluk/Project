import { useState } from "react";
import { Container } from "../../box/absolute-box";
import {
  CartListSection,
  CartListTable,
  CartListTableSection,
  TitleCart,
  CartListTableItem,
  CartListProductPrice,
  CartListProductCounter,
  CloseButton,
  CartListButton,
  Total,
  TotalPrice,
} from "./cart-list";
import { FlexColumn } from "../../box/flex-box";
import CartBodyProduct from "../cart-body-product";
import CartHead from "../cart-head";

type Product = {
  id: number;
  title: string;
  price: number;
  current: string;
  photo: string;
  count: number;
};

const tableHead = [
  { id: 1, title: "Product" },
  { id: 2, title: "Price" },
  { id: 3, title: "Quantity" },
  { id: 4, title: "Total" },
];

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Pork Tenderloin marinated",
    price: 23,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage2.jpg")})`,
    count: 1,
  },
  {
    id: 2,
    title: "Beef Tartar with forest mushroms",
    price: 20,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage1.jpg")})`,
    count: 1,
  },
];

const CartList = () => {
  const [state, setState] = useState<Product[]>(PRODUCTS);

  const total = state.reduce((acc, item) => acc + +item.price * +item.count, 0);

  return (
    <CartListSection>
      <Container>
        {state.length !== 0 ? (
          <CartListTable>
            <thead>
              <CartListTableSection>
                <CartHead cartHead={tableHead} />
              </CartListTableSection>
            </thead>
            <tbody>
              {state.map((product) => (
                <CartListTableSection key={product.id}>
                  <CartBodyProduct product={product} />
                  <CartListTableItem>
                    <CartListProductCounter
                      type="number"
                      min="1"
                      placeholder="1"
                      value={product.count}
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setState((state) =>
                          state.map((item) =>
                            item.id === product.id
                              ? { ...item, count: +event.target.value }
                              : item
                          )
                        );
                      }}
                    />
                  </CartListTableItem>
                  <CartListTableItem>
                    <CartListProductPrice>
                      {`${product.price * +product.count}`} {product.current}
                    </CartListProductPrice>
                    <CloseButton
                      onClick={() => {
                        setState((state) =>
                          state.filter((item) => item.id !== product.id && item)
                        );
                      }}
                    />
                  </CartListTableItem>
                </CartListTableSection>
              ))}
            </tbody>
          </CartListTable>
        ) : (
          <TitleCart>Your cart is empty</TitleCart>
        )}
        {state.length !== 0 && (
          <FlexColumn>
            <Total>
              Total:
              <TotalPrice>{`${total}`} USD</TotalPrice>
            </Total>
            <CartListButton as="a" href="/profile">
              Place an order
            </CartListButton>
          </FlexColumn>
        )}
      </Container>
    </CartListSection>
  );
};

export default CartList;
