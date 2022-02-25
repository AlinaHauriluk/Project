import React, {useEffect} from "react";
import * as _ from "./new-dishes";
import Rating from "../rating";
import { Container, ButtonOrder} from "../../box/absolute-box";
import { BlockSubTitle } from "../../text/text";
import AOS from "aos";
import "aos/dist/aos.css";

const newDishes = [
  {
    id: 1,
    title: "Pork Tenderloin marinated",
    description: "Pork / Tenderloin / Green Pepper / Veggies",
    price: 20,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage1.jpg")})`,
    rating: 2,
  },
  {
    id: 2,
    title: "Beef Tartar with forest mushroms",
    description: "Pork / Tenderloin / Green Pepper / Veggies",
    price: 23,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage2.jpg")})`,
    rating: 4,
  },
  {
    id: 3,
    title: "Beef Steak with sauted vegetables",
    description: "Pork / Tenderloin / Green Pepper / Veggies",
    price: 25,
    current: "USD",
    photo: `url(${require("../../assets/newDishesImage3.jpg")})`,
    rating: 3,
  },
];

const NewDishes = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <_.NewDishesSection>
      <Container>
        <BlockSubTitle>Something new</BlockSubTitle>
        <_.NewDishesTitle>Our Signature Dishes</_.NewDishesTitle>
        {newDishes.map((dish) => (
          <_.NewDishesContainer key={dish.id}>
            <_.NewDishesWrapper data-aos="fade-right">
              <_.NewDishesName>{dish.title}
                <_.NewDishesPrice>
                  {dish.price}
                  {dish.current}
                </_.NewDishesPrice>
              </_.NewDishesName>
              <_.NewDishesDescription>{dish.description}</_.NewDishesDescription>
              <ButtonOrder>Order now</ButtonOrder>
            </_.NewDishesWrapper>
            <_.NewDishesWrapper data-aos="fade-left">
              <_.NewDishesPhoto photo={dish.photo} />
              <Rating rating={dish.rating} />
            </_.NewDishesWrapper>
          </_.NewDishesContainer>
        ))}
      </Container>
    </_.NewDishesSection>
  );
};

export default NewDishes;