import React, { useEffect } from "react";
import { Container } from "../../box/absoluteBox";
import { BlockSubTitle } from "../../text/text";
import { FlexJustifyCenter } from "../../box/flexBox";
import { MenuContainer, MenuWrapper, MenuWrapperTitle, MenuTitle,  MenuPart, MenuPartTitle, MenuList, MenuListWrapper, DishName, DishPrice, DishDescription, DishOrder} from "./menu";
import Rating from "../rating";
import AOS from 'aos'
import "aos/dist/aos.css";

interface MenuProps{
  title?: string;
  subtitle?: string;
}

const Menu: React.FC<MenuProps> = ({title, subtitle}) => {
  useEffect(() => {   
    AOS.init({ duration: 2000});
  }, []);

  return (
    <MenuContainer>
      <Container>
    {title && subtitle && 
        <MenuWrapper data-aos="flip-down">
          <MenuWrapperTitle>
            <BlockSubTitle>{subtitle}</BlockSubTitle>
            <Rating rating={1} />
            <MenuTitle>{title}</MenuTitle>
          </MenuWrapperTitle>
        </MenuWrapper>}

        <FlexJustifyCenter>
          <MenuPart data-aos='fade-down'>
            <MenuPartTitle>Starters</MenuPartTitle>
            <MenuList>
              <MenuListWrapper>
                <DishName>Pork Tenderloin</DishName>
                <DishPrice>20 $</DishPrice>
              </MenuListWrapper>
              <DishDescription>Pork / Tenderloin / Green Pepper / Veggies</DishDescription>
              <DishOrder>Order now</DishOrder>
            </MenuList>
          </MenuPart>

          <MenuPart data-aos='fade-down'>
            <MenuPartTitle>Main</MenuPartTitle>
            <MenuList>
              <MenuListWrapper>
                <DishName>Chicken with lemon</DishName>
                <DishPrice>20 $</DishPrice>
              </MenuListWrapper>
              <DishDescription>Pork / Tenderloin / Green Pepper / Veggies</DishDescription>
              <DishOrder>Order now</DishOrder>
            </MenuList>
          </MenuPart>

          <MenuPart data-aos='fade-down'>
            <MenuPartTitle>Desserts</MenuPartTitle>
            <MenuList>
              <MenuListWrapper>
                <DishName>Lava cake</DishName>
                <DishPrice>15 $</DishPrice>
              </MenuListWrapper>
              <DishDescription>Pork / Tenderloin / Green Pepper / Veggies</DishDescription>
              <DishOrder>Order now</DishOrder>
            </MenuList>
          </MenuPart>
        </FlexJustifyCenter>
      </Container>
    </MenuContainer>
  )
}

export default Menu