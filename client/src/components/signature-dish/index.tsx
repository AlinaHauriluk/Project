import type {FC} from "react";
import { useEffect } from "react";
import { FlexContainer, FlexSpaceBetween } from "../../box/flex-box";
import { BlockTitle, BlockSubTitle } from "../../text/text";
import { ButtonOrder } from "../../box/absolute-box";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SectionSignatureDish,
  SignatureDishDescription,
  SignatureDishName,
  SignatureDishPrice,
  SignatureDishText,
  SignatureDishImage,
} from "./signature-dish";

const SignatureDish:FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <SectionSignatureDish>
      <FlexContainer>
        <SignatureDishDescription data-aos="fade-right">
          <BlockSubTitle>Something new</BlockSubTitle>
          <BlockTitle>Our Signature Dish</BlockTitle>
          <Rating rating={2} />
          <FlexSpaceBetween>
            <SignatureDishName>
              Pork Tenderloin marinated in Green Pepper
            </SignatureDishName>
            <SignatureDishPrice>20 USD</SignatureDishPrice>
          </FlexSpaceBetween>

          <SignatureDishText>
            Pork / Tenderloin / Green Pepper / Veggies
          </SignatureDishText>
          <ButtonOrder>Order now</ButtonOrder>
        </SignatureDishDescription>
        <SignatureDishImage data-aos="fade-down" />
      </FlexContainer>
    </SectionSignatureDish>
  );
};

export default SignatureDish;
