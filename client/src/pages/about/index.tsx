import React from "react";
import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import Chefs from "../../components/chefs";

const About = () => (
  <DefaultLayout>
    <Promo title="About Us" aboutStyles='aboutStyles' />
    <Chefs />
  </DefaultLayout>
);

export default About;
