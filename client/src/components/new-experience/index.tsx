import { useEffect } from "react";
import { FlexContainer, Flex } from "../../box/flex-box";
import { BlockSubTitle, BlockTitle } from "../../text/text";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SectionNewExperience,
  NewExperienceImage,
  NewExperienceImageTwo,
  NewExperienceDescription,
  NewExperienceIcon,
  NewExperienceText,
} from "./new-experience";

const NewExperience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <SectionNewExperience>
      <FlexContainer data-aos="fade-down">
        <Flex>
          <NewExperienceImage />
          <NewExperienceImageTwo />
        </Flex>

        <NewExperienceDescription data-aos="fade-left">
          <BlockSubTitle>Something new</BlockSubTitle>
          <BlockTitle>An Extraordinery Experience</BlockTitle>
          <NewExperienceIcon />
          <NewExperienceText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
            Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
            justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
            potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
            venenatis. Nulla consequat fringilla massa.
          </NewExperienceText>
        </NewExperienceDescription>
      </FlexContainer>
    </SectionNewExperience>
  );
};

export default NewExperience;
