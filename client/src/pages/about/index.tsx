import React from "react";
import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import Chefs from "../../components/chefs";

const styles = {
  section: {
    height: '460px',
    backgroundImage: `url(${require("../../assets/aboutPromoImage.jpg")})`
  }
}

const About = () => (
  <DefaultLayout>
    <Promo title="About Us" style ={styles.section} />
    <Chefs />
  </DefaultLayout>
);

export default About;
