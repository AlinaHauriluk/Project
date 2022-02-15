import React, { useEffect } from "react";
import {
  ChefSection,
  ChefsPersonsWrapper,
  ChefsPersonsPhoto,
  ChefPersonsName,
  ChefPersonsPosition,
} from "./chefs";
import { Container } from "../../box/absoluteBox";
import SomethingNew from "../somethingNew";
import { FlexCenter } from "../../box/flexBox";
import AOS from "aos";
import "aos/dist/aos.css";

const chefData = [
  {
    id: 1,
    photo: `url(${require("../../assets/aboutChef1Image.jpg")})`,
    name: "Maria Smith",
    position: "Top Chef",
  },
  {
    id: 2,
    photo: `url(${require("../../assets/aboutChef2Image.jpg")})`,
    name: "William Jones",
    position: "Sauce Chef",
  },
  {
    id: 3,
    photo: `url(${require("../../assets/aboutChef3Image.jpg")})`,
    name: "Julien Williams",
    position: "Sushi Chef",
  },
  {
    id: 4,
    photo: `url(${require("../../assets/aboutChef4Image.jpg")})`,
    name: "Suzie James",
    position: "Sauce Chef",
  },
];

const Chefs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ChefSection>
      <Container>
        <SomethingNew
          title="Meet the Chefs"
          descriptionPartOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
              Ut ac ligula sapien. Suspendisse cursus faucibus finibus. Ut non
              justo eleifend, facilisis nibh ut, interdum odio. Suspendisse
              potenti. Vivamus luctus diam eu neque rutrum, vitae aliquet dolor
              venenatis. Nulla consequat fringilla."
          descriptionPartTwo="Sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus
              mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
              Suspendisse cursus faucibus finibus. Ut non justo eleifend,
              facilisis nibh ut, interdum odio. Suspendisse potenti. Vivamus
              luctus diam eu neque rutrum, vitae aliquet dolor venenatis. Nulla
              consequat fringilla."
        />
        <FlexCenter>
          {chefData.map((chef) => (
            <ChefsPersonsWrapper data-aos="fade-down" key={chef.id}>
              <ChefsPersonsPhoto photo={chef.photo} />
              <ChefPersonsName>{chef.name}</ChefPersonsName>
              <ChefPersonsPosition>{chef.position}</ChefPersonsPosition>
            </ChefsPersonsWrapper>
          ))}
        </FlexCenter>
      </Container>
    </ChefSection>
  );
};
export default Chefs;
