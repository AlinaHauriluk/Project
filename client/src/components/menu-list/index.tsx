import React, { useEffect } from "react";
import { Container } from "../../box/absolute-box";
import { BlockSubTitle } from "../../text/text";
import { FlexJustifyCenter } from "../../box/flex-box";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MenuContainer,
  MenuWrapper,
  MenuWrapperTitle,
  MenuTitle,
  MenuPart,
  MenuPartTitle,
  MenuListContainer,
  MenuListWrapper,
  DishName,
  DishPrice,
  DishDescription,
  DishOrder,
} from "./menu-list";

interface MenuProps {
  title?: string;
  subtitle?: string;
}

const data = [
  {
    id: 1,
    title: "Starters",
    dishes: [
      {
        id: 1,
        name: "Pork Tenderloin",
        price: 20,
        currency: "USD",
        description: "Pork / Tenderloin / Green Pepper / Veggies",
      },
    ],
  },
  {
    id: 2,
    title: "Main",
    dishes: [
      {
        id: 2,
        name: "Chicken with lemon",
        price: 20,
        currency: "USD",
        description: "Pork / Tenderloin / Green Pepper / Veggies",
      },
    ],
  },
  {
    id: 3,
    title: "Desserts",
    dishes: [
      {
        id: 3,
        name: "Lava cake",
        price: 15,
        currency: "USD",
        description: "Pork / Tenderloin / Green Pepper / Veggies",
      },
    ],
  },
];

const MenuList: React.FC<MenuProps> = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <_.MenuContainer>
      <Container>
        {title && subtitle && (
          <_.MenuWrapper data-aos="flip-down">
            <_.MenuWrapperTitle>
              <BlockSubTitle>{subtitle}</BlockSubTitle>
              <Rating rating={1} />
              <_.MenuTitle>{title}</_.MenuTitle>
            </_.MenuWrapperTitle>
          </_.MenuWrapper>
        )}

        <FlexJustifyCenter>
          {data.map((item) => (
            <_.MenuPart key={item.id} data-aos="fade-down">
              <_.MenuPartTitle>{item.title}</_.MenuPartTitle>
              {item.dishes.map((i) => (
                <MenuListContainer key={i.id}>
                  <MenuListWrapper>
                    <DishName>{i.name}</DishName>
                    <DishPrice>
                      {i.price} {i.currency}
                    </DishPrice>
                  </MenuListWrapper>
                  <DishDescription>{i.description}</DishDescription>
                  <DishOrder>Order now</DishOrder>
                </MenuListContainer>
              ))}
            </_.MenuPart>
          ))}
        </FlexJustifyCenter>
      </Container>
    </_.MenuContainer>
  );
};

export default MenuList;
