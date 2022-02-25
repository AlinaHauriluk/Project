import React, { useEffect } from "react";
import * as _ from "./signature-dish";
import { FlexContainer, FlexSpaceBetween } from "../../box/flex-box";
import { BlockTitle, BlockSubTitle } from "../../text/text";
import { ButtonOrder } from "../../box/absolute-box";
import Rating from "../rating";
import AOS from "aos";
import "aos/dist/aos.css";

const SignatureDish = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <_.SectionSignatureDish>
      <FlexContainer>
        <_.SignatureDishDescription data-aos="fade-right">
          <BlockSubTitle>Something new</BlockSubTitle>
          <BlockTitle>Our Signature Dish</BlockTitle>
          <Rating rating={2} />
          <FlexSpaceBetween>
            <_.SignatureDishName>
              Pork Tenderloin marinated in Green Pepper
            </_.SignatureDishName>
            <_.SignatureDishPrice>20 USD</_.SignatureDishPrice>
          </FlexSpaceBetween>

          <_.SignatureDishText>
            Pork / Tenderloin / Green Pepper / Veggies
          </_.SignatureDishText>
          <ButtonOrder>Order now</ButtonOrder>
        </_.SignatureDishDescription>
        <_.SignatureDishImage data-aos="fade-down" />
      </FlexContainer>
    </_.SectionSignatureDish>
  );
};

export default SignatureDish;
