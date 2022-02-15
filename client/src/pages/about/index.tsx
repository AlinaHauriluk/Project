import React from "react";
import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import Chefs from "../../components/chefs";

const About = () => (
  <DefaultLayout>
    <Promo
      margin="80"
      title="About Us"
      height="460"
      background={require("../../assets/aboutPromoImage.jpg")}
    />
    <Chefs />
  </DefaultLayout>
);

export default About;
