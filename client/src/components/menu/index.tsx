import React, { useEffect } from "react";
import { Container } from "../../box/absoluteBox";
import { BlockSubTitle } from "../../text/text";
import { FlexJustifyCenter } from "../../box/flexBox";
import {
  MenuContainer,
  MenuWrapper,
  MenuWrapperTitle,
  MenuTitle,
  MenuPart,
  MenuPartTitle,
  MenuList,
  MenuListWrapper,
  DishName,
  DishPrice,
  DishDescription,
  DishOrder,
} from "./menu";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";

interface MenuProps {
  title?: string;
  subtitle?: string;
}

const Menu: React.FC<MenuProps> = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const data = [
    {
      id: 1,
      title: "Starters",
      dishes: [
        {
          id: 1,
          name: "Pork Tenderloin",
          price: 20,
          currency: 'USD',
          description: "Pork / Tenderloin / Green Pepper / Veggies"
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
          currency: 'USD',
          description: "Pork / Tenderloin / Green Pepper / Veggies"
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
          currency: 'USD',
          description: "Pork / Tenderloin / Green Pepper / Veggies"
        },
      ],
    },
  ];

  return (
    <MenuContainer>
      <Container>
        {title && subtitle && (
          <MenuWrapper data-aos="flip-down">
            <MenuWrapperTitle>
              <BlockSubTitle>{subtitle}</BlockSubTitle>
              <Rating rating={1} />
              <MenuTitle>{title}</MenuTitle>
            </MenuWrapperTitle>
          </MenuWrapper>
        )}

        <FlexJustifyCenter>
          {data.map((item) => (
            <MenuPart key={item.id} data-aos="fade-down">
              <MenuPartTitle>{item.title}</MenuPartTitle>
              {item.dishes.map((i) => (
                <MenuList key={i.id}>
                  <MenuListWrapper>
                    <DishName>{i.name}</DishName>
                    <DishPrice>{i.price} {i.currency}</DishPrice>
                  </MenuListWrapper>
                  <DishDescription>{i.description}</DishDescription>
                  <DishOrder>Order now</DishOrder>
                </MenuList>
              ))}
            </MenuPart>
          ))}
        </FlexJustifyCenter>
      </Container>
    </MenuContainer>
  );
};

export default Menu;
