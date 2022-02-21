import React from "react";
import DefaultLayout from "../../layout/defaultLayout";
import Promo from "../../components/promo";
import MenuDishes from "../../menu-dishes";

const styles = {
  section: {
    height: '460px',
    backgroundImage: `url(${require("../../assets/menuPromoImage.jpg")})`,
    backgroundPosition: 'bottom'
  }
}

const Menu = () => (
  <DefaultLayout>
    <Promo title="Our Menu" style={styles.section} />
    <MenuDishes />
  </DefaultLayout>
);

export default Menu;
