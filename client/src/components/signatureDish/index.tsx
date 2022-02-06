import React, {useEffect} from "react";
import { SectionSignatureDish, SignatureDishDescription, SignatureDishImage, SignatureDishName, SignatureDishPrice, SignatureDishText, SignatureDishOrder, SignatureDishStar } from "./signatureDish";
import { FlexContainer, FlexSpaceBetween } from "../../box/flexBox";
import { BlockTitle, BlockSubTitle } from "../../text/text";
import AOS from 'aos'
import "aos/dist/aos.css";

const SignatureDish = () => {
  useEffect(() => {   
    AOS.init({ duration : 2000});
  }, []);

  return(
    <SectionSignatureDish>
      <FlexContainer>
        <SignatureDishDescription data-aos="fade-right">
          <BlockSubTitle>Something new</BlockSubTitle>
          <BlockTitle>Our Signature Dish</BlockTitle>
          <SignatureDishStar /> <SignatureDishStar /> <SignatureDishStar /> <SignatureDishStar /> <SignatureDishStar />

          <FlexSpaceBetween>
            <SignatureDishName>Pork Tenderloin marinated in Green Pepper</SignatureDishName>
            <SignatureDishPrice>20 $</SignatureDishPrice>
          </FlexSpaceBetween>

          <SignatureDishText>Pork / Tenderloin / Green Pepper / Veggies</SignatureDishText>
          <SignatureDishOrder>Order now</SignatureDishOrder>
        </SignatureDishDescription>
        <SignatureDishImage data-aos='fade-down' />
      </FlexContainer>
    </SectionSignatureDish>
  )
}

export default SignatureDish
        